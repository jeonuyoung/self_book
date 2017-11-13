package com.seeyou.cu;


import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.Test;


public class MySQLConnectionText {
	
	private static final String DRIVER = "com.mysql.jdbc.Driver";
	// 만약 본인의 MySQL Driver 버전이 5 : "com.mysql.jdbc.Driver";
	
	private static final String URL = "jdbc:mysql://localhost:3308/cool?user=root";
	// MySQL 버전 5.6 이하 : "jdbc:mysql://127.0.0.1:3306
	// 3306은 본인의 MySQL 포트설정에 따라 상이할 수 있습니다.
	
	private static final String USER = "root";
	private static final String PW = "7311971";
	
	@Test
	public void testConnection() throws Exception {
		
		Class.forName(DRIVER);
		
		try (Connection conn = DriverManager.getConnection (URL, USER, PW)) {
			//
			System.out.println(conn+"11");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}


}
