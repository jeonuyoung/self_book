package com.seeyou.cu.file;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class makefile {

	
	public void makeafile(String id,String title,String html){

		FileOutputStream fop = null;
		File file;
		String content = html;

		try {

		     File folder = new File("C://Users/cool/git/self_book/self_book/src/main/webapp/resources/demo/"+id);  
		      if (!folder.exists()) {  
		         folder.mkdir();  
		      }  
		      
			file = new File("c:/Users/cool/git/self_book/self_book/src/main/webapp/resources/demo/"+id+"/"+title+".html");
			fop = new FileOutputStream(file);
			// if file doesnt exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}

			// get the content in bytes
			byte[] contentInBytes = content.getBytes();

			fop.write(contentInBytes);
			fop.flush();
			fop.close();

			System.out.println("Done");

		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (fop != null) {
					fop.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
	 }

}
