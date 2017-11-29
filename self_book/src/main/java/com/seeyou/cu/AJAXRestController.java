package com.seeyou.cu;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.w3c.dom.Document;

import com.seeyou.cu.DAO.BookDAO;
import com.seeyou.cu.DAO.MemberDAO;
import com.seeyou.cu.Service.MemberServiceImpl;

import gui.ava.html.image.generator.HtmlImageGenerator;

@RestController
public class AJAXRestController {

	private static final Logger logger = LoggerFactory.getLogger(AJAXRestController.class);

	@Autowired
	private BookDAO Bdao;

	@Autowired
	MemberDAO mdao;

	@Autowired
	private MemberServiceImpl service;

	// 아이디 중복 검사(AJAX)　IDの重複検査
	@RequestMapping(value = "check_id", method = RequestMethod.POST)
	public void check_id(@RequestParam("id") String id, HttpServletResponse response) throws Exception {
		service.check_id(id, response);
	}
	
	@RequestMapping(value = "final", method = RequestMethod.GET)
	public String finalPage() throws Exception {
		//Document docu,  HttpSession session
		//session.setAttribute("docu", docu);
		return "final";
	}
	
	
	@RequestMapping(value = "toPdf", method = RequestMethod.POST)
	public void toPdf (String divlist) throws Exception {
	  System.out.println(divlist);
	  HtmlImageGenerator imageGenerator = new HtmlImageGenerator(); 
	  imageGenerator.loadHtml(divlist); 
	  imageGenerator.saveAsImage("hello-world.png"); 
	  imageGenerator.saveAsHtmlWithMap("hello-world.html", "hello-world.png"); 
	  
	  PDDocument document = new PDDocument();
	  InputStream in = new FileInputStream(new File("hello-world.png"));
	  BufferedImage bimg = ImageIO.read(in);
	  float width = bimg.getWidth();
	  float height = bimg.getHeight();
	  PDPage page = new PDPage(new PDRectangle(width, height));
	  document.addPage(page);
	  PDImageXObject img = PDImageXObject.createFromFile("hello-world.png", document);
	  PDPageContentStream contentStream = new PDPageContentStream(document, page);
	  contentStream.drawImage(img, 0, 0);
	  contentStream.close();
	  in.close();
	  document.save("test.pdf");
	  document.close();
	}

}
