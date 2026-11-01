package com.example.Services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Repository.ProfessionalDetailsRepo;
import com.example.Repository.UserProfileRepo;
import com.example.Model.ProfessionalDetails;
import com.example.Model.UserProfileModel;
import com.example.Response.ApiErrorResponse;
import com.example.Response.UserProfileResponse;

import jakarta.transaction.Transactional;

@Service

public class UserProfileServices {
    @Autowired

    UserProfileRepo userProfileRepo;

    @Autowired
    ProfessionalDetailsRepo ProfessionalDetails;

    public ResponseEntity<?> getuserProfile(long userid) {
        ApiErrorResponse apier = new ApiErrorResponse();
        UserProfileResponse userProfileResponse = new UserProfileResponse();
        UserProfileModel u = userProfileRepo.findByUserid(userid);

        if (u != null) {
            userProfileResponse.setData(u);
            userProfileResponse.setMessage("profile");
            userProfileResponse.setStatusCode(HttpStatus.ACCEPTED);

            return ResponseEntity.status(HttpStatus.ACCEPTED).body(userProfileResponse);
        } else {
            apier.setErrorMessage("NO user Profile Found");
            apier.setErrorcode(HttpStatus.NOT_FOUND);

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(apier);
        }

    }

    // update the user Profile
    @Transactional
    public ResponseEntity<Map<String, Object>> UpdateUseeProfile(Long userid) {

        String s = Long.toString(userid);
        Map<String, Object> m = new HashMap<>();
        if (s.isEmpty()) {
            m.put("Code", HttpStatus.NOT_FOUND);
            m.put("Message", "Userid is missing ");
            ResponseEntity.status(HttpStatus.NOT_FOUND).body(m);
        }

        UserProfileModel uodate_user = userProfileRepo.findByUserid(userid);
        uodate_user.setResumeUrl("Resume");
        uodate_user.setUserLocation(null);
        uodate_user.setUserMobileNumber(null);
        userProfileRepo.save(uodate_user);
        ProfessionalDetails professionalDetails = ProfessionalDetails.findByUserid(userid);
        professionalDetails.setAboutMe("About me");
        professionalDetails.setExperienceLevel("Exp Level");
        professionalDetails.setGithuburl("url");
        professionalDetails.setLinkedInUrl("url");
        professionalDetails.setPortfolio("url");
        professionalDetails.setTagetJobRole("Target Job Role");
        ProfessionalDetails.save(professionalDetails);
        m.put("Code", HttpStatus.OK);
        m.put("message", "Profile Updated Sucessfully");
        m.put("Status", "ok");

        return ResponseEntity.status(HttpStatus.OK).body(m);
    }

}
