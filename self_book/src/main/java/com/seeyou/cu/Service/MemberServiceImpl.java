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
	
	// 아이디 중복 검사(AJAX)
	@Override
	public void check_id(String id, HttpServletResponse response) throws Exception {
		PrintWriter out = response.getWriter();
		out.println(manager.check_id(id));
		out.close();
	}

	// 회원가입
	@Override
	public int join_member(MemberVO member, HttpServletResponse response) throws Exception {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();

		if (manager.check_id(member.getId()) == 1) {
			out.println("<script>");
			out.println("alert('동일한 아이디가 있습니다.');");
			out.println("history.go(-1);");
			out.println("</script>");
			out.close();
			return 0;
		} else {
			member.setApproval_key(create_key());
			out.println("<script>");
			out.println("alert('이메일에서 인증을 완료해주세요.');");
			out.println("history.go(-1);");
			out.println("</script>");
			out.close();
			member.setApproval_key(create_key());
			send_mail(member,"join");
			manager.join_member(member);
			return 1;
		}
	}

	@Override
	public String create_key() throws Exception {
		String key = "";
		Random rd = new Random();

		for (int i = 0; i < 8; i++) {
			key += rd.nextInt(10);
		}
		return key;
	}
	
	// 이메일 발송
		@Override
		public void send_mail(MemberVO member,String div) throws Exception {
			// Mail Server 설정
			String charSet = "utf-8";
			String hostSMTP = "smtp.naver.com";
			String hostSMTPid = "foremailauth";
			String hostSMTPpwd = "seeyou12";

			// 보내는 사람 EMail, 제목, 내용
			String fromEmail = "foremailauth@naver.com";
			String fromName = "Self Tour Guide Book";
			String subject = "";
			String msg = "";
			
			if (div.equals("join")) {
				
			// 회원가입 메일 내용
			subject = "Self Tour Guide Book 회원가입 인증 메일입니다.";
			msg += "<div align='center' style='border:1px solid black; font-family:verdana'>";
			msg += "<h3 style='color: blue;'>";
			msg += member.getNickname() + "님 회원가입을 환영합니다.</h3>";
			msg += "<div style='font-size: 130%'>";
			msg += "하단의 인증 버튼 클릭 시 정상적으로 회원가입이 완료됩니다.</div><br/>";
			msg += "<form method='post' action='http://localhost:8888/cu/approval_member'>";
			msg += "<input type='hidden' name='id' value='" + member.getId() + "'>";
			msg += "<input type='hidden' name='approval_key' value='" + member.getApproval_key() + "'>";
			msg += "<input type='submit' value='인증'></form><br/></div>";

			// 받는 사람 E-Mail 주소
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
				System.out.println("메일발송 실패 : " + e);
			}
		}else if(div.equals("find_pw")){
			subject = "Spring Homepage 임시 비밀번호 입니다.";
			msg += "<div align='center' style='border:1px solid black; font-family:verdana'>";
			msg += "<h3 style='color: blue;'>";
			msg += member.getId() + "님의 임시 비밀번호 입니다. 비밀번호를 변경하여 사용하세요.</h3>";
			msg += "<p>임시 비밀번호 : ";
			msg += member.getPw() + "</p></div>";

			// 받는 사람 E-Mail 주소
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
				System.out.println("메일발송 실패 : " + e);
			}
		}
	}
		
		// 회원 인증
		@Override
		public void approval_member(MemberVO member, HttpServletResponse response) throws Exception {
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			if (manager.approval_member(member) == 0) { // 이메일 인증에 실패하였을 경우
				out.println("<script>");
				out.println("alert('잘못된 접근입니다.');");
				out.println("history.go(-1);");
				out.println("</script>");
				out.close();
			} else { // 이메일 인증을 성공하였을 경우
				out.println("<script>");
				out.println("alert('인증이 완료되었습니다. 로그인 후 이용하세요.');");
				out.println("location.href='/';");
				out.println("</script>");
				out.close();
			}
		}
		
		// 로그인
		@Override
		public MemberVO login(MemberVO member, HttpServletResponse response) throws Exception {
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			// 등록된 아이디가 없으면
			if(manager.check_id(member.getId()) == 0) {
				out.println("<script>");
				out.println("alert('등록된 아이디가 없습니다.');");
				//out.println("history.go(-1);");
				out.println("location.href='/cu';");
				out.println("</script>");
				out.close();
				return null;
			} else {
				String pw = member.getPw();
				member = manager.login(member.getId());
				// 비밀번호가 다를 경우
				if(!member.getPw().equals(pw)) {
					out.println("<script>");
					out.println("alert('비밀번호가 다릅니다.');");
					out.println("location.href='/cu';");
					out.println("</script>");
					out.close();
					return null;
				// 이메일 인증을 하지 않은 경우
				}else if(!member.getApproval_status().equals("true")) {
					out.println("<script>");
					out.println("alert('이메일 인증 후 로그인 하세요.');");
					out.println("history.go(-1);");
					out.println("</script>");
					out.close();
					return null;
	            // 로그인 일자 업데이트 및 회원정보 리턴			
				}else {
					manager.update_log(member.getId());
					return member;
				}
			}
		}
		
		// 로그아웃
		@Override
		public void logout(HttpServletResponse response) throws Exception {
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			out.println("<script>");
			out.println("location.href=document.referrer;");
			out.println("</script>");
			out.close();
		}

		
		// 비밀번호 찾기
		@Override
		public void find_pw(HttpServletResponse response, MemberVO member) throws Exception {
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			// 아이디가 없으면
			if(manager.check_id(member.getId()) == 0) {
				out.print("아이디가 없습니다.");
				out.close();
			}
			// 가입에 사용한 이메일이 아니면
			else if(!member.getId().equals(manager.login(member.getId()))) {
				out.print("잘못된 이메일 입니다.");
				out.close();
			}else {
				// 임시 비밀번호 생성
				String pw = "";
				for (int i = 0; i < 12; i++) {
					pw += (char) ((Math.random() * 26) + 97);
				}
				member.setPw(pw);
				// 비밀번호 변경
				manager.update_pw(member);
				// 비밀번호 변경 메일 발송
				send_mail(member, "find_pw");
				
				out.print("이메일로 임시 비밀번호를 발송하였습니다.");
				out.close();
			}
		}
		
		// 회원탈퇴
		@Override
		public boolean withdrawal(MemberVO member, HttpServletResponse response) throws Exception {
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			if(manager.withdrawal(member) != 1) {
				out.println("<script>");
				out.println("alert('회원탈퇴 실패');");
				out.println("history.go(-1);");
				out.println("</script>");
				out.close();
				return false;
			}else {
				return true;
			}
		}

}
