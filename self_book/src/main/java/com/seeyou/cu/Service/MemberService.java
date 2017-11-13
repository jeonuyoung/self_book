package com.seeyou.cu.Service;

import javax.servlet.http.HttpServletResponse;

import com.seeyou.cu.VO.MemberVO;

public interface MemberService {
	public void check_id(String id, HttpServletResponse response) throws Exception;

	public int join_member(MemberVO member, HttpServletResponse response) throws Exception;

	public void send_mail(MemberVO member) throws Exception;

	public void approval_member(MemberVO member, HttpServletResponse response) throws Exception;

	public String create_key() throws Exception;

	public MemberVO login(MemberVO member, HttpServletResponse response) throws Exception;
}
