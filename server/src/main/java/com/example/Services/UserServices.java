package com.example.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Dto.SignupDto;
import com.example.Model.UserModel;
import com.example.Dto.LoginDto;
import com.example.Repository.UserRepository;
import com.example.Response.ApiErrorResponse;
import com.example.Response.ApiSucessResponse;

@Service
public class UserServices {
	@Autowired
	public UserRepository userRepo;

	// create a new account logic
	public ResponseEntity<?> Signup(SignupDto data) {

		UserModel u = new UserModel();

		u.setUserEmail(data.getUseremail());

		u.setUsername(data.getUsername());
		u.setUserPasswoard(data.getApplication_password());
		ApiSucessResponse api_sucess = new ApiSucessResponse();
		ApiErrorResponse api_err = new ApiErrorResponse();
		// check email is empty
		if (data.getUseremail().isEmpty()) {
			System.err.println("hey");
			api_err.setErrorcode(HttpStatus.NOT_FOUND);
			api_err.setErrorMessage("email is required");

			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(api_err);
		}

		// check Application password is emapty
		if (data.getApplication_password().isBlank()) {
			api_err.setErrorcode(HttpStatus.NOT_FOUND);
			api_err.setErrorMessage("Passowrd  is required");

			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(api_err);

		}

		UserModel user = userRepo.save(u);

		api_sucess.setData(user);
		api_sucess.setStatusCode(HttpStatus.OK);
		api_sucess.setMessage("created anew acount");

		return ResponseEntity.status(HttpStatus.OK).body(api_sucess);
	}

	// Login into the account

	public ResponseEntity<?> Signin(String userEmail, String Application_password) {

		ApiSucessResponse api_sucess = new ApiSucessResponse();
		ApiErrorResponse api_Err = new ApiErrorResponse();
		UserModel u = userRepo.findByUserEmail(userEmail);

		LoginDto login = new LoginDto();
		login.setUseremail(u.getUserEmail());

		login.setUserName(u.getUsername());
		login.setApplicationuserId(u.getUserApplicationId());

		if (u.getUserEmail().equals(userEmail) && u.getUserPasswoard().equals(Application_password)) {

			api_sucess.setLoginDto(login);
			api_sucess.setMessage("Application_password");
			return ResponseEntity.status(HttpStatus.OK).body(api_sucess);
		}
		api_Err.setErrorMessage("invalid Credatinals");
		api_Err.setErrorcode(HttpStatus.UNAUTHORIZED);

		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(api_Err);

	}
}
