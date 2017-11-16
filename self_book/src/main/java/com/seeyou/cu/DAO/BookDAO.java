package com.seeyou.cu.DAO;


import java.io.FileInputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.jasper.tagplugins.jstl.core.ForEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.seeyou.cu.file.savebook;

import com.seeyou.cu.VO.DataVO;

@Repository
public class BookDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	public void savebook(String id, String title, String html) {
		BookMapper Bmapper = sqlSession.getMapper(BookMapper.class);
		
		//実際の本のファイルを作る機能
		savebook mf = new savebook();
		mf.saveabook(id, title, html);
		
		ArrayList<String> booklist = booklist(id);
		System.out.println(title);
		
		if(booklist.size()==0){
			Bmapper.savebook(id, title);
			
		}else{
			for(int i=0;i<booklist.size();i++){
				String titlecheck = null;
				
				if(booklist.get(i).equals(title)){
					titlecheck=title;
				}
				
				if(titlecheck==null){
					Bmapper.savebook(id, title);
				}
			}
		}
	}
	
	public ArrayList<String> booklist(String id){
		ArrayList<String> booklist = new ArrayList<String>();
		BookMapper mapper2 = sqlSession.getMapper(BookMapper.class);
		booklist = mapper2.booklist(id);		
		return booklist;
	}
	
}
