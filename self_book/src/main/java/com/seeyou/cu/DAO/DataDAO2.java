package com.seeyou.cu.DAO;


import java.io.FileInputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.seeyou.cu.file.makefile;

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
	
	public String makehtml(String id, String title, String html) {
		DataMapper2 mapper2 = sqlSession.getMapper(DataMapper2.class);
		makefile mf = new makefile();
		mf.makeafile(id, title, html);
		mapper2.makefile(id, title);
		
		booklist(id);
		return "success";
	}
	
	public ArrayList<String> booklist(String id){
		ArrayList<String> booklist = new ArrayList<String>();
		DataMapper2 mapper2 = sqlSession.getMapper(DataMapper2.class);
		booklist = mapper2.booklist(id);		
		System.out.println(booklist);
		return booklist;
	}
	
}
