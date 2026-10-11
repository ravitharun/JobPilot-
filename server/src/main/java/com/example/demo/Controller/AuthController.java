package com.example.demo.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Dto.LoginDto;
import com.example.Dto.SignupDto;
import com.example.Services.UserServices;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/jobPilot")
public class AuthController {
	@Autowired
	private UserServices user;

	@PostMapping("/singup")
	public ResponseEntity<?> name(@Valid @RequestBody SignupDto logindto) {

		return user.Signup(logindto);

	}

	@GetMapping("/singin")
	public ResponseEntity<?> Login(@RequestParam("useremail") String useremail,
			@RequestParam("Application_password") String Application_password) {

		return user.Signin(useremail, Application_password);
	}

}
