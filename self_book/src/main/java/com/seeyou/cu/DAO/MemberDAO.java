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

	// 아이디 중복 검사
	public int check_id(String id) throws Exception {
		return sqlsession.selectOne("check_id", id);
	}

	// 회원가입
	@Transactional
	public int join_member(MemberVO member) throws Exception {
		return sqlsession.insert("join_member", member);
	}

	@Transactional
	public int approval_member(MemberVO member) throws Exception {
		return sqlsession.update("approval_member", member);
	}

	public MemberVO login(String id) throws Exception {
		return sqlsession.selectOne("login", id);
	}

	// 로그인 접속일자 변경
	@Transactional
	public int update_log(String id) throws Exception {
		return sqlsession.update("update_log", id);
	}

	// 비밀번호 변경
	@Transactional
	public int update_pw(MemberVO member) throws Exception {
		return sqlsession.update("update_pw", member);
	}

	// 회원탈퇴
	@Transactional
	public int withdrawal(MemberVO member) throws Exception {
		return sqlsession.delete("withdrawal", member);
	}

}
