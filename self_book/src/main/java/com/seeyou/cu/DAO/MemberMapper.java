package com.seeyou.cu.DAO;

import com.seeyou.cu.VO.MemberVO;

public interface MemberMapper {
	public MemberVO loginMember(String id, String pw);
	public void join_member(MemberVO member);
	public MemberVO checkPassword(String pw);
	public int id_check(String id);
}
