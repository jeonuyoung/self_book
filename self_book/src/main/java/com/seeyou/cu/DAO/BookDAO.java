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
	
	
	public String savebook(String id, String title, String html,String saveflag) {
		BookMapper Bmapper = sqlSession.getMapper(BookMapper.class);
		String result = null;
		//実際の本のファイルを作る機能
		savebook mf = new savebook();
		
		ArrayList<String> booklist = booklist(id);
		
		if(booklist.size()==0){
			mf.saveabook(id, title, html);
			Bmapper.savebook(id, title);
			result ="success";
			
		}else{
			
			String titlecheck = null;
			
			for(int i=0;i<booklist.size();i++){
				if(booklist.get(i).equals(title)){
					titlecheck=title;
					
					if(saveflag.equals("firstsavebook")){
						result = "samefile";
					}else{
						mf.saveabook(id, title, html);
						result="covered";
					}
				}
			}
			
			if(titlecheck==null){
				mf.saveabook(id, title, html);
				Bmapper.savebook(id, title);
				result = "success";
			}
			
		}
		return result;
	}
	
	public ArrayList<String> booklist(String id){
		ArrayList<String> booklist = new ArrayList<String>();
		BookMapper mapper2 = sqlSession.getMapper(BookMapper.class);
		booklist = mapper2.booklist(id);		
		return booklist;
	}
	
	public void deletebook(String id,String title){
		savebook mf = new savebook();
		mf.deletebook(id, title);
		BookMapper mapper2 = sqlSession.getMapper(BookMapper.class);
		mapper2.deletebook(id, title);
	}
}
