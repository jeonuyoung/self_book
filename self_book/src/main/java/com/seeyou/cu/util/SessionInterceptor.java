package com.seeyou.cu.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.seeyou.cu.VO.MemberVO;

public class SessionInterceptor extends HandlerInterceptorAdapter{
	
	 protected final Logger logger = LoggerFactory.getLogger(this.getClass());
	   
	  @Override
	  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
	      throws Exception {
	 
		  HttpSession session = request.getSession();
		  MemberVO member = (MemberVO) session.getAttribute("member");
		  if (member == null) {
			response.sendRedirect(request.getContextPath()+"/");
			return false;
			
		}else{
			return super.preHandle(request, response, handler);
		}
	 
	  }
	 
	  @Override
	  public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
	      ModelAndView modelAndView) throws Exception {
	 
	   System.out.println("postHandle");
	   
	  }



}
