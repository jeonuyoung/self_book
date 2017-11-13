package com.seeyou.cu.DAO;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.seeyou.cu.VO.DataVO;
import com.seeyou.cu.VO.MemberVO;

@Repository
public class DataDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	public void inputHTML(String num, DataVO html) {
		DataMapper mapper = sqlSession.getMapper(DataMapper.class);
		mapper.inputHTML(num, html);
		System.out.println(html.toString());
	}
	
	public void inputHTML(String num, String html) {
		DataMapper mapper = sqlSession.getMapper(DataMapper.class);
		mapper.inputHTML(num, html);
		System.out.println(html+ "dao");
	}


}
