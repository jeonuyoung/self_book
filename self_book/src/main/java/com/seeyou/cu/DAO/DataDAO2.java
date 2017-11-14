package com.seeyou.cu.DAO;


import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.seeyou.cu.VO.DataVO;

@Repository
public class DataDAO2 {
	
	@Autowired
	private SqlSession sqlSession;
	
	public void inserthtml(String id, String html) {
		DataMapper2 mapper2 = sqlSession.getMapper(DataMapper2.class);
		mapper2.inserthtml(id, html);
		System.out.println(html.toString());
	}
	



}
