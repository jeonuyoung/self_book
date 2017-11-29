package com.seeyou.cu;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import gui.ava.html.image.generator.HtmlImageGenerator;

@Controller
public class PDFController {
	
	private static final Logger logger = LoggerFactory.getLogger(PDFController.class);
	
	/*
	@ResponseBody
	@RequestMapping(value = "toPdf", method = RequestMethod.POST)
	public void pdf (String divlist) {
		System.out.println(divlist);
			
	 HtmlImageGenerator imageGenerator = new HtmlImageGenerator(); 
	  imageGenerator.loadHtml($html[i]); imageGenerator.saveAsImage("hello-world.png"); 
	  imageGenerator.saveAsHtmlWithMap("hello-world.html", "hello-world.png"); 
	}
	
	HtmlImageGenerator imageGenerator = new HtmlImageGenerator();
	  String html = "<link rel='stylesheet' type='text/css' href='file:///C:/project/exam/test/workspace/a1234/product/test.css'><h1 style='background-color:red;'>Hello, world.</h1><div>test</div><img src='file:///C:/project/exam/test/workspace/a1234/product/test.PNG' width='507px' height='851px' />";
	  imageGenerator.loadHtml(html);
	  imageGenerator.saveAsImage("hello-world.png");
*/
	
	@RequestMapping(value = "test1", method = RequestMethod.GET)
	public String pdf () {
		return "test1";
	}
	
	@RequestMapping(value = "final1", method = RequestMethod.GET)
	public String pdfFinal() {
		return "final";
	}
	
}
