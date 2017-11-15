package com.seeyou.cu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.seeyou.cu.DAO.MapDAO;

@Controller
public class MapController {

	/*@Autowired
	MapDAO mapDao;*/
	
	
	@RequestMapping(value = "makeabook1", method = RequestMethod.GET)
	public String makeabook() {
		return "makeabook1";
	}
	
	
}
