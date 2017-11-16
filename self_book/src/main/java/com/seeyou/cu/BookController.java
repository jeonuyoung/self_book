package com.seeyou.cu;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.seeyou.cu.DAO.BookDAO;
import com.seeyou.cu.VO.Member;


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
	@RequestMapping(value = "firstmakebook", method = RequestMethod.GET)
	public String firstmakebook() {
		//セッションを使ってデータベースでせセッション
		return "firstmakebook";
	}
	
	
	/*作った本がある時に本の目録をリターン*/
	@RequestMapping(value = "booklist", method = RequestMethod.GET)
	public String booklist(HttpSession session, Model model) {
		String id = (String) session.getAttribute("id");
		id = "coolpark93@gmail.com";
		ArrayList<String> booklist = Bdao.booklist(id);
		model.addAttribute("booklist", booklist);
		
		return "booklist";
	}
	
	@ResponseBody
	@RequestMapping(value = "savebook", method = RequestMethod.POST)
	public void savebook(String id, String title, String html) {
		Bdao.savebook(id, title, html);
	}	
	
	/*作った本を選択した時本をロードする*/
	@RequestMapping(value = "loadbook", method = RequestMethod.GET)
	public String loadbook(String title,Model model) {
		System.out.println(title);
		model.addAttribute("id", "coolpark93@gmail.com");
		model.addAttribute("title",title);
		return "loadbookpage";
	}	



}
