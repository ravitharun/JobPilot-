package com.example.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Repository.JobSearchPreferencesRepo;
import com.example.Repository.UserProfileRepo;
import com.example.Model.JobSearchPreferences;
import com.example.Model.UserProfileModel;
import com.example.Response.ApiErrorResponse;
import com.example.Response.ApiSucessResponse;
import com.example.Response.UserProfileResponse;

@Service
public class UserProfileServices {
    @Autowired

    UserProfileRepo userProfileRepo;


    public ResponseEntity getuserProfile(long userid) {
        ApiErrorResponse apier = new ApiErrorResponse();
        UserProfileResponse userProfileResponse = new UserProfileResponse();
        Optional<UserProfileModel> u = userProfileRepo.findById(userid);

      
        System.err.println(u.get() + "RRRTharun");
        if (u.isPresent()) {
            userProfileResponse.setData(u.get());
            userProfileResponse.setMessage("profile");
            userProfileResponse.setStatusCode(HttpStatus.ACCEPTED);

            
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(userProfileResponse);
        } else {
            apier.setErrorMessage("NO user Profile Found");
            apier.setErrorcode(HttpStatus.NOT_FOUND);

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(apier);
        }

    }

}
