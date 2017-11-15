package com.seeyou.cu;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.seeyou.cu.DAO.DataDAO2;
import com.seeyou.cu.DAO.MemberDAO;
import com.seeyou.cu.Service.MemberServiceImpl;
import com.seeyou.cu.VO.DataVO;
import com.seeyou.cu.VO.MemberVO;

@RestController
public class AJAXRestController {

	private static final Logger logger = LoggerFactory.getLogger(AJAXRestController.class);

	@Autowired
	private DataDAO2 dao;

	@Autowired
	MemberDAO mdao;

	@Autowired
	private MemberServiceImpl service;

	// 아이디 중복 검사(AJAX)
	@RequestMapping(value = "check_id", method = RequestMethod.POST)
	public void check_id(@RequestParam("id") String id, HttpServletResponse response) throws Exception {
		service.check_id(id, response);
	}

}
