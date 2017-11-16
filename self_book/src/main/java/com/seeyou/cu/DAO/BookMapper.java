package com.seeyou.cu.DAO;

import java.util.ArrayList;

public interface BookMapper {

	public void savebook(String id, String title);
	public String fileinfo(String id);
	public ArrayList<String> booklist(String id);
}
