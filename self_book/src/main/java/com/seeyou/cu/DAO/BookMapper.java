package com.seeyou.cu.DAO;

import java.util.ArrayList;

public interface BookMapper {

	public void savebook(String id, String title);
	public ArrayList<String> booklist(String id);
	public void deletebook(String id,String title);
}
