package com.seeyou.cu.DAO;

public interface DataMapper2 {
	public void inserthtml(String id, String html);
	public String makehtml(String id, String title, String html);
	public String makefile(String id, String title);
}
