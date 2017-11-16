package com.seeyou.cu;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.seeyou.cu.DAO.DataDAO2;
import com.seeyou.cu.VO.Member;

/**
 * Handles requests for the application home page.
 */
@Controller
public class SIWONController {

	@Autowired
	DataDAO2 dao2;

	/**
	 * Simply selects the home view to render by returning its name.
	 */


	/*@RequestMapping(value = "menu", method = RequestMethod.GET)
	public String menu() {
		return "menu";
	}*/
/*	@RequestMapping(value = "menu", method = RequestMethod.GET)
	public String menu() {
		return "menu";
	}

	@RequestMapping(value = "mypage", method = RequestMethod.GET)
	public String mypage() {
		return "mypage";
	}*/

	@RequestMapping(value = "makeabook", method = RequestMethod.GET)
	public String makeabook() {
		return "makeabook";
	}

	@ResponseBody
	@RequestMapping(value = "inserthtml", method = RequestMethod.POST)
	public void inserthtml(String id, String html) {
		dao2.inserthtml(id, html);
	}

}
