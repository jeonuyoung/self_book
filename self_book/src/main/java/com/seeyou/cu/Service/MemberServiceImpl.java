package com.seeyou.cu.Service;

import java.io.PrintWriter;
import java.util.Random;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.mail.HtmlEmail;
import org.springframework.stereotype.Service;

import com.seeyou.cu.DAO.MemberDAO;
import com.seeyou.cu.VO.MemberVO;

@Service
public class MemberServiceImpl implements MemberService {

	@Inject
	private MemberDAO manager;

	// 아이디 중복 검사(AJAX)　IDの重複検査
	@Override
	public void check_id(String id, HttpServletResponse response) throws Exception {
		PrintWriter out = response.getWriter();
		out.println(manager.check_id(id));
		out.close();
	}

	// 회원가입　会員加入
	@Override
	public int join_member(MemberVO member, HttpServletResponse response) throws Exception {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();

		if (manager.check_id(member.getId()) == 1) {
			out.println("<script>");
			out.println("alert('同一のアイディ-があります。');");
			out.println("history.go(-1);");
			out.println("</script>");
			out.close();
			return 0;
		} else {
			member.setApproval_key(create_key());
			out.println("<script>");
			out.println("alert('メールで認証を完了してください。');");
			out.println("history.go(-1);");
			out.println("</script>");
			out.close();
			member.setApproval_key(create_key());
			send_mail(member, "join");
			manager.join_member(member);
			return 1;
		}
	}

	//인증번호 만들기 認証番号作り
	@Override
	public String create_key() throws Exception {
		String key = "";
		Random rd = new Random();

		for (int i = 0; i < 8; i++) {
			key += rd.nextInt(10);
		}
		return key;
	}

	// 이메일 발송 メール発送
	@Override
	public void send_mail(MemberVO member, String div) throws Exception {
		// Mail Server 設定
		String charSet = "utf-8";
		String hostSMTP = "smtp.naver.com";
		String hostSMTPid = "foremailauth";
		String hostSMTPpwd = "seeyou12";

		// 보내는 사람 EMail, タイトル、内容
		String fromEmail = "foremailauth@naver.com";
		String fromName = "Self Tour Guide Book";
		String subject = "";
		String msg = "";

		if (div.equals("join")) {

			// 회원가입 메일 내용　メール内容
			subject = "Self Tour Guide Book 会員加入認証メールです。";
			msg += "<div align='center' style='border:1px solid black; font-family:verdana'>";
			msg += "<h3 style='color: blue;'>";
			msg += member.getNickname() + "様の 会員加入を歓迎します。</h3>";
			msg += "<div style='font-size: 130%'>";
			msg += "下段の認証ボタンをくりっくすると正常に会員加入が完了されます。</div><br/>";
			msg += "<form method='post' action='http://localhost:8888/cu/approval_member'>";
			msg += "<input type='hidden' name='id' value='" + member.getId() + "'>";
			msg += "<input type='hidden' name='approval_key' value='" + member.getApproval_key() + "'>";
			msg += "<input type='submit' value='認証'></form><br/></div>";

			// 받는 사람 E-Mail 주소　メールアドレス
			String mail = member.getId();
			try {
				HtmlEmail email = new HtmlEmail();
				email.setDebug(true);
				email.setCharset(charSet);
				email.setSSL(true);
				email.setHostName(hostSMTP);
				email.setSmtpPort(465);

				email.setAuthentication(hostSMTPid, hostSMTPpwd);
				email.setTLS(true);
				email.addTo(mail, charSet);
				email.setFrom(fromEmail, fromName, charSet);
				email.setSubject(subject);
				email.setHtmlMsg(msg);
				email.send();
			} catch (Exception e) {
				System.out.println("メール発送失敗 : " + e);
			}
		} else if (div.equals("find_pw")) {
			subject = "Spring Homepage 臨時パスワードです。";
			msg += "<div align='center' style='border:1px solid black; font-family:verdana'>";
			msg += "<h3 style='color: blue;'>";
			msg += member.getId() + "様の臨時パスワードです。パソワードを変更して使用して下さい。</h3>";
			msg += "<p>臨時パスワード　: ";
			msg += member.getPw() + "</p></div>";

			// 받는 사람 E-Mail 주소　e-mail　アドレス
			String mail = member.getId();
			try {
				HtmlEmail email = new HtmlEmail();
				email.setDebug(true);
				email.setCharset(charSet);
				email.setSSL(true);
				email.setHostName(hostSMTP);
				email.setSmtpPort(587);

				email.setAuthentication(hostSMTPid, hostSMTPpwd);
				email.setTLS(true);
				email.addTo(mail, charSet);
				email.setFrom(fromEmail, fromName, charSet);
				email.setSubject(subject);
				email.setHtmlMsg(msg);
				email.send();
			} catch (Exception e) {
				System.out.println("メール発送失敗　: " + e);
			}
		}
	}

	// 회원인증 会員認証
	@Override
	public void approval_member(MemberVO member, HttpServletResponse response) throws Exception {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		if (manager.approval_member(member) == 0) { // 이메일 인증에 실패하였을 경우 メール認証に失敗した場合
			out.println("<script>");
			out.println("alert('誤った処理です。');");
			out.println("history.go(-1);");
			out.println("</script>");
			out.close();
		} else { // 이메일 인증을 성공하였을 경우  メール認証を成功した場合
			out.println("<script>");
			out.println("location.href='/cu';");
			out.println("alert('認証が完了しました。 ログイン後利用してください。');");
			out.println("</script>");
			out.close();
		}
	}

	// 로그인　ログイン
	@Override
	public MemberVO login(MemberVO member, HttpServletResponse response) throws Exception {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		// 등록된 아이디가 없으면 登録されたIDがない場合
		if (manager.check_id(member.getId()) == 0) {
			out.println("<script>");
			out.println("alert('登録されたIDがありません。');");
			out.println("location.href='/cu';");
			out.println("</script>");
			out.close();
			return null;
		} else {
			String pw = member.getPw();
			member = manager.login(member.getId());
			// 비밀번호가 다를 경우　パソワードが異なる場合
			if (!member.getPw().equals(pw)) {
				out.println("<script>");
				out.println("alert('パソワードが違います。');");
				out.println("location.href='/cu';");
				out.println("</script>");
				out.close();
				return null;
				// 이메일 인증을 하지 않은 경우
			} else if (!member.getApproval_status().equals("true")) {
				out.println("<script>");
				out.println("alert('メール認証後のログインしてください。');");
				out.println("history.go(-1);");
				out.println("</script>");
				out.close();
				return null;
				// 로그인 일자 업데이트 및 회원정보 리턴
			} else {
				manager.update_log(member.getId());
				return member;
			}
		}
	}

	// 로그아웃　ログアウト
	@Override
	public void logout(HttpServletResponse response) throws Exception {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		out.println("<script>");
		out.println("location.href='/cu'");
		out.println("</script>");
		out.close();
	}

	// 비밀번호 찾기　パスワード忘れ
	@Override
	public void find_pw(HttpServletResponse response, MemberVO member) throws Exception {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		// 아이디가 없으면　アイディ-がない場合
		if (manager.check_id(member.getId()) == 0) {
			out.print("IDがありません");
			out.close();
		}
			// 임시 비밀번호 생성　臨時秘密番号の生成
			String pw = "";
			for (int i = 0; i < 12; i++) {
				pw += (char) ((Math.random() * 26) + 97);
			}
			member.setPw(pw);
			// 비밀번호 변경　暗証番号変更
			manager.update_pw(member);
			// 비밀번호 변경 메일 발송　暗証番号の変更メール発送
			send_mail(member, "find_pw");

			out.print("メールで臨時秘密番号を発送しました。");
			out.close();
	}

	// 회원탈퇴　会員脱退
	@Override
	public boolean withdrawal(MemberVO member, HttpServletResponse response) throws Exception {
		System.out.println(member);
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		if (manager.withdrawal(member) != 1) {
			out.println("<script>");
			out.println("alert('会員離脱を失敗しました。');");
			out.println("history.go(-1);");
			out.println("</script>");
			out.close();
			return false;
		} else {
			out.println("<script>");
			out.println("alert('退会処理が完了しました。');");
			out.println("location.href='/cu';");
			out.println("</script>");
			out.close();
			return true;
		}
	}

	// 회원정보 수정　会員情報修正
	@Override
	public MemberVO update_mypage(MemberVO member, HttpServletResponse response) throws Exception {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		manager.update_mypage(member);
		out.println("<script>");
		out.println("alert('会員情報修正が完了しました。');");
		out.println("location.href='/cu/menu';");
		out.println("</script>");
		out.close();
		return manager.login(member.getId());
	}

}
