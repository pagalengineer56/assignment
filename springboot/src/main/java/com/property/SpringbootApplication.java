package com.property;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.property.dao.UserRepository;
import com.property.entities.User;

@SpringBootApplication
public class SpringbootApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(SpringbootApplication.class, args);
		
	//	UserRepository userRepository = context.getBean(UserRepository.class);
		
	//	User user1 =  new User();
		
	//	user1.setName("vijay");
	//	user1.setCity("bsf");
	//	user1.setCity("delhi");
	//	userRepository.save(user1);
	//	System.out.println(user1);
	}

}
