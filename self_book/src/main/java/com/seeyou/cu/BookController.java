package com.seeyou.cu;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.seeyou.cu.DAO.BookDAO;


/**
 * Handles requests for the application home page.
 */
@Controller
public class BookController {

	@Autowired
	BookDAO Bdao;

	/**
	 * Simply selects the home view to render by returning its name.
	 */

	@RequestMapping(value = "mypage", method = RequestMethod.GET)
	public String mypage() {
		return "mypage";      
	}

	  /*初めて本を作る時*/
	   @RequestMapping(value = "makeabook1", method = RequestMethod.GET)
	   public String firstmakebook(Model model) {
	      //セッションを使ってデータベースでせセッション
	      model.addAttribute("title","first");
	      model.addAttribute("saveflag", "firstsavebook");
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
	public String savebook(String id, String title, String html,String saveflag,Model model) {
		model.addAttribute("saveflag", "savebook");
		String result = Bdao.savebook(id, title, html,saveflag);
		return result;
	}	
	
	/*作った本を選択した時本をロードする*/
	@RequestMapping(value = "loadbook", method = RequestMethod.GET)
	public String loadbook(String title,Model model,HttpSession session) {
		model.addAttribute("id", session.getAttribute("id"));
		model.addAttribute("title",title);
		session.setAttribute("title", title);
		model.addAttribute("saveflag", "savebook");
		return "loadbookpage";
	}	
	
	/*作った本を削除*/
	@RequestMapping(value = "deletebook", method = RequestMethod.GET)
	public String deletebook(String title,HttpSession session) {
		String id = (String) session.getAttribute("id");
		Bdao.deletebook(id, title);
		
		return "redirect:booklist";
	}	

}
