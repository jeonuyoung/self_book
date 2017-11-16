package com.seeyou.cu.DAO;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.seeyou.cu.VO.MemberVO;

@Repository
public class MemberDAO {

	@Autowired
	private SqlSession sqlsession = null;

	// 아이디 중복 검사　IDの重複検査
	public int check_id(String id) throws Exception {
		return sqlsession.selectOne("check_id", id);
	}

	// 회원가입　会員加入
	@Transactional
	public int join_member(MemberVO member) throws Exception {
		return sqlsession.insert("join_member", member);
	}

	//메일 인증 メール認証
	@Transactional
	public int approval_member(MemberVO member) throws Exception {
		return sqlsession.update("approval_member", member);
	}

	//ログイン
	public MemberVO login(String id) throws Exception {
		return sqlsession.selectOne("login", id);
	}

	// 로그인 접속일자 변경 ログイン接続の日付変更
	@Transactional
	public int update_log(String id) throws Exception {
		return sqlsession.update("update_log", id);
	}

	// 비밀번호 변경　暗証番号変更
	@Transactional
	public int update_pw(MemberVO member) throws Exception {
		return sqlsession.update("update_pw", member);
	}

	// 회원탈퇴　会員脱退
	@Transactional
	public int withdrawal(MemberVO member) throws Exception {
		return sqlsession.delete("withdrawal", member);
	}

	// 마이페이지　mypage
	@Transactional
	public int update_mypage(MemberVO member) throws Exception {
		return sqlsession.update("update_mypage", member);
	}

}
