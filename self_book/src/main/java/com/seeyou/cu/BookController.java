package com.seeyou.cu;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.seeyou.cu.DAO.BookDAO;
import com.seeyou.cu.file.FileService;


/**
 * Handles requests for the application home page.
 */
@Controller
public class BookController {

	@Autowired
	BookDAO Bdao;
	
	final String uploadPath = "/boardfile";
	/**
	 * Simply selects the home view to render by returning its name.
	 */

	@RequestMapping(value = "mypage", method = RequestMethod.GET)
	public String mypage() {
		return "mypage";      
	}

	  /*初めて本を作る時*/
	   @RequestMapping(value = "makeabook1", method = RequestMethod.GET)
	   public String firstmakebook(Model model,HttpSession session) {
	      //セッションを使ってデータベースでせセッション
		  String title = (String) session.getAttribute("title");
		  String saveflag = (String) session.getAttribute("title");
		  model.addAttribute("first","first");
	      model.addAttribute("title",title);
	      model.addAttribute("saveflag", "savebook");
	      return "makeabook1";
	   }
	
	/*作った本がある時に本の目録をリターン*/
	@RequestMapping(value = "booklist", method = RequestMethod.GET)
	public String booklist(HttpSession session, Model model) {
		String id = (String) session.getAttribute("id");
		ArrayList<String> booklist = Bdao.booklist(id);
		model.addAttribute("booklist", booklist);
		
		return "booklist";
	}
	
	@ResponseBody
	@RequestMapping(value = "savebook", method = RequestMethod.POST)
	public String savebook(String id, String title, String html,String saveflag,Model model,HttpSession session) {
		id = (String) session.getAttribute("id");
		model.addAttribute("saveflag", "savebook");
		model.addAttribute("first", "notfirst");
		String result = Bdao.savebook(id, title, html,saveflag);
		return result;
	}	
	
	@RequestMapping(value = "savebooktitle", method = RequestMethod.POST)
	public String savebooktitle(String title,HttpSession session,Model model) {
		
		String id = (String) session.getAttribute("id");
		model.addAttribute("saveflag", "savebook");
		model.addAttribute("first", "first");
		session.setAttribute("title", title);
		session.setAttribute("saveflag", "savebook");
		
/*		String html = "<body><body>";
		String result = Bdao.savebook(id, title, html,"savebook");*/
		return "makeabook1";
	}		
	
	/*作った本を選択した時本をロードする*/
	@RequestMapping(value = "loadbook", method = RequestMethod.GET)
	public String loadbook(String title,String first,Model model,HttpSession session) {
		if(first.equals("yes")){
		model.addAttribute("first","first");
		}
		model.addAttribute("id", session.getAttribute("id"));
		model.addAttribute("title",title);
		session.setAttribute("title", title);
		model.addAttribute("saveflag", "savebook");
		return "makeabook1";
	}	
	
	/*作った本を削除*/
	@RequestMapping(value = "deletebook", method = RequestMethod.GET)
	public String deletebook(String title,HttpSession session) {
		String id = (String) session.getAttribute("id");
		Bdao.deletebook(id, title);
		
		return "redirect:booklist";
	}	

	@RequestMapping(value = "imagesave", method = RequestMethod.GET)
	public String imagesave() {
		return "imagesave";
	}	
	

	@RequestMapping(value = "saveimg", method = RequestMethod.POST)
	public String saveimg(MultipartFile s_file,HttpSession session,Model model) {
		String savedFile = null;
		String id = (String) session.getAttribute("id");
		if (!s_file.isEmpty()) {
			   savedFile = FileService.saveFile(s_file, uploadPath,id);
			   session.setAttribute("imgtest", savedFile);
			  }
		return "imagesave2";
	
	}	
	
	@ResponseBody
	@RequestMapping(value = "imagetest", method = RequestMethod.POST)
	public String imagetest(HttpSession session) {
		String imgtest1 = (String)session.getAttribute("id");
		String imgtest2 = (String)session.getAttribute("imgtest");
		String imgtest3 =imgtest1+"/"+imgtest2; 
		return imgtest3;
	}	
}
