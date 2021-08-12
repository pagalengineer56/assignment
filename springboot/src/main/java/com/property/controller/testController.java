package com.property.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.property.dao.UserRepository;
import com.property.entities.Property;

@Controller
public class testController {
	
	@Autowired
	private UserRepository userRepository;

	@RequestMapping("/processForm")
	public String formHandler(@RequestParam("name") String name,
							  @RequestParam("desc") String desc,
							  @RequestParam("size") String size) {

		//System.out.println(name);
		Property prop = new Property();
		prop.setName(name);
		prop.setDesc(desc);
		prop.setSize(size);
		
		userRepository.save(prop);
		
		return "home";
	}

	@RequestMapping("/home")
	public String homeHandler() {

		return "home";
	}

}
