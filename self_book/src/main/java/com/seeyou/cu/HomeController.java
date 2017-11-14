package com.seeyou.cu;

import java.util.Random;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.mail.HtmlEmail;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.seeyou.cu.DAO.DataDAO;
import com.seeyou.cu.DAO.MemberDAO;
import com.seeyou.cu.Service.MemberServiceImpl;
import com.seeyou.cu.VO.MemberVO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	DataDAO dao;

	@Autowired
	MemberDAO mdao;

	@Autowired
	private MemberServiceImpl service;

	// Main画面
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String mainpage() {
		return "main";
	}

	// 메뉴화면
	@RequestMapping(value = "/menu", method = RequestMethod.GET)
	public String menu(@ModelAttribute MemberVO member, HttpSession session, HttpServletResponse response)
			throws Exception {
/*		member = service.login(member, response);
		session.setAttribute("member", member);*/
		return "menu";
	}

	// 회원 가입
	@RequestMapping(value = "join_member", method = RequestMethod.POST)
	public String join_member(@ModelAttribute MemberVO member, RedirectAttributes rttr, HttpServletResponse response)
			throws Exception {
		rttr.addFlashAttribute("result", service.join_member(member, response));
		return "main";
	}

	// 회원 인증
	@RequestMapping(value = "/approval_member", method = RequestMethod.POST)
	public void approval_member(@ModelAttribute MemberVO member, HttpServletResponse response) throws Exception {
		service.approval_member(member, response);
	}

	// 로그인
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@ModelAttribute MemberVO member, HttpSession session, HttpServletResponse response)
			throws Exception {
		member = service.login(member, response);
		session.setAttribute("member", member);
		return "menu";
	}

	// 로그아웃
	@RequestMapping(value = "logout", method = RequestMethod.GET)
	public void logout(HttpSession session, HttpServletResponse response) throws Exception {
		session.invalidate();
		service.logout(response);
	}

	// 비밀번호 찾기
	@RequestMapping(value = "/find_pw", method = RequestMethod.POST)
	public void find_pw(@ModelAttribute MemberVO member, HttpServletResponse response) throws Exception {
		service.find_pw(response, member);
	}

	// 회원탈퇴
	@RequestMapping(value = "/withdrawal", method = RequestMethod.POST)
	public String withdrawal_form(@ModelAttribute MemberVO member, HttpSession session, HttpServletResponse response)
			throws Exception {
		if (service.withdrawal(member, response)) {
			session.invalidate();
		}
		return "redirect:/";
	}

	// 마이페이지 이동
	@RequestMapping(value = "/mypage")
	public String mypage() throws Exception {
		return "mypage";
	}

	// mypage 수정
	@RequestMapping(value = "update_mypage", method = RequestMethod.POST)
	public String update_mypage(@ModelAttribute MemberVO member, HttpSession session, RedirectAttributes rttr, HttpServletResponse response)throws Exception {
		System.out.println(member + "control");
		session.setAttribute("member", service.update_mypage(member, response));
		rttr.addFlashAttribute("msg", "회원정보 수정 완료!");
		return "menu";
	}

}
