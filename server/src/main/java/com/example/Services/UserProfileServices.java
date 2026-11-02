package com.example.Services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Repository.ProfessionalDetailsRepo;
import com.example.Repository.UserProfileRepo;
import com.example.Dto.ProfileDto;
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
    public ResponseEntity<Map<String, Object>> UpdateUseeProfile(ProfileDto userid) {

        String s = Long.toString(userid.getId());
        Map<String, Object> m = new HashMap<>();
        if (s.isEmpty()) {
            m.put("Code", HttpStatus.NOT_FOUND);
            m.put("Message", "Userid is missing ");
            ResponseEntity.status(HttpStatus.NOT_FOUND).body(m);
        }

        UserProfileModel uodate_user = userProfileRepo.findByUserid(userid.getId());
        uodate_user.setResumeUrl("Resume");
        uodate_user.setUserLocation(null);
        uodate_user.setUserMobileNumber(null);
        userProfileRepo.save(uodate_user);
        ProfessionalDetails professionalDetails = ProfessionalDetails.findByUserid(userid.getId());
        professionalDetails.setAboutMe(userid.getProfile().getAbout());
        professionalDetails.setExperienceLevel(userid.getProfile().getExperience());
        professionalDetails.setGithuburl(userid.getProfile().getGithub());
        professionalDetails.setLinkedInUrl(userid.getProfile().getLinkedin());
        professionalDetails.setPortfolio(userid.getProfile().getPortfolio());
        professionalDetails.setTagetJobRole(userid.getProfile().getRole());
        ProfessionalDetails.save(professionalDetails);
        m.put("Code", HttpStatus.OK);
        m.put("message", "Profile Updated Sucessfully");
        m.put("Status", "ok");

        return ResponseEntity.status(HttpStatus.OK).body(m);
    }

}
