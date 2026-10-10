package com.example.demo.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Dto.SignupDto;
import com.example.Response.ApiSucessResponse;
import com.example.Services.UserServices;



@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/jobPilot")
public class AuthController {
	@Autowired
	private	 UserServices  user;
	
	
	@PostMapping("/singup")
	public ResponseEntity<?> name(@RequestBody SignupDto logindto) {
	
	return user.Signup(logindto);

	}

}
