package com.seeyou.cu.DAO;

import java.util.ArrayList;

public interface DataMapper2 {
	public void inserthtml(String id, String html);
	public String makehtml(String id, String title, String html);
	public void makefile(String id, String title);
	public String fileinfo(String id);
	public ArrayList<String> booklist(String id);
}
