package com.example.Services;

// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Dto.SignupDto;
// import com.example.Dto.UserProfileDto;
import com.example.Model.UserModel;
import com.example.Model.ApplicationSettigs;
import com.example.Model.JobSearchPreferences;
import com.example.Model.ProfessionalDetails;
import com.example.Model.UserProfileModel;
import com.example.Dto.LoginDto;
import com.example.Repository.UserProfileRepo;
import com.example.Repository.ApplicationSettingsRepo;
import com.example.Repository.JobSearchPreferencesRepo;
import com.example.Repository.ProfessionalDetailsRepo;
import com.example.Repository.UserRepository;
import com.example.Response.ApiErrorResponse;
import com.example.Response.ApiSucessResponse;
import jakarta.transaction.Transactional;

@Service
public class UserServices {
	@Autowired
	public UserRepository userRepo;
	@Autowired
	public ApplicationSettingsRepo ApplicationSettingsRepo;
	@Autowired
	public UserProfileRepo userProfileRepo;

	@Autowired
	PasswordEncoder PasswordEncoder;
	@Autowired
	JobSearchPreferencesRepo jobPreferencesRepo;
	@Autowired
	ApplicationSettingsRepo applicationSettingsRepo;
	@Autowired
	ProfessionalDetailsRepo professionalDetailsRepo;

	// create a new account logic
	@Transactional
	public ResponseEntity<?> Signup(SignupDto data) {

		UserModel u = new UserModel();

		u.setUserEmail(data.getUseremail());

		u.setUsername(data.getUsername());
		u.setUserPasswoard(PasswordEncoder.encode(data.getApplication_password()));
		ApiSucessResponse api_sucess = new ApiSucessResponse();
		ApiErrorResponse api_err = new ApiErrorResponse();
		// check email is empty
		if (data.getUseremail().isEmpty()) {
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

		// Create the profile
		UserProfileModel user_P = new UserProfileModel();
		// Save the new account first
		UserModel user = userRepo.save(u);
		// insrertt the profile to the saved user
		user_P.setUserid(u.getUserApplicationId());
		// Save the profile
		// UserProfileModel user_profile_response = userProfileRepo.save(user_P);
		userProfileRepo.save(user_P);

		// Professional_Details
		ProfessionalDetails Professional_Details = new ProfessionalDetails();
		Professional_Details.setUserid(u.getUserApplicationId());
		System.err.println(Professional_Details.getUserid() + "Professional_Details.setUserid");
		// save the professionalDetailsRepo
		// ProfessionalDetails p = professionalDetailsRepo.save(Professional_Details);
		professionalDetailsRepo.save(Professional_Details);
		// save the ApplicationSettigs
		ApplicationSettigs app_setting = new ApplicationSettigs();
		app_setting.setUserId(u.getUserApplicationId());
		ApplicationSettingsRepo.save(app_setting);

		// JobSearchPreferences
		JobSearchPreferences jobPrefernce = new JobSearchPreferences();
		jobPrefernce.setUserApplicationId(u.getUserApplicationId());
		jobPreferencesRepo.save(jobPrefernce);

		// API Sucess Response
		api_sucess.setData(user);
		api_sucess.setStatusCode(HttpStatus.OK);
		api_sucess.setMessage("created anew acount");

		return ResponseEntity.status(HttpStatus.OK).body(api_sucess);
	}

	// Login into the account
	public ResponseEntity<?> Signin(String userEmail, String Application_password) {

		ApiSucessResponse api_sucess = new ApiSucessResponse();
		ApiErrorResponse api_Err = new ApiErrorResponse();
		LoginDto login = new LoginDto();
		UserModel u = userRepo.findByUserEmail(userEmail);
		api_Err.setErrorMessage("No user Found based on the email");
		api_Err.setErrorcode(HttpStatus.UNAUTHORIZED);
		if (u == null) {
			System.err.println("UUU" + u);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(api_Err);
		}
		// matches(u.getUserPasswoard())
		boolean check = PasswordEncoder.matches(
				Application_password,
				u.getUserPasswoard());

		System.err.println(check + " check");

		if (u.getUserEmail() != null
				&& u.getUserEmail().equalsIgnoreCase(userEmail)
				&& check) {

			login.setUseremail(u.getUserEmail());
			login.setUserName(u.getUsername());
			login.setApplicationuserId(u.getUserApplicationId());
			login.SetToken(null);
			api_sucess.setLoginDto(login);
			api_sucess.setMessage("Account verifed");
			return ResponseEntity.status(HttpStatus.OK).body(api_sucess);
		}
		api_Err.setErrorMessage("invalid Credatinals");
		api_Err.setErrorcode(HttpStatus.UNAUTHORIZED);

		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(api_Err);

	}
}
