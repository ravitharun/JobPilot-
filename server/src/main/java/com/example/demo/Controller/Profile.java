package com.example.demo.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Services.UserProfileServices;

import jakarta.validation.Valid;

@RestController

@CrossOrigin("http://localhost:5173")

@RequestMapping("/api/Profile")
public class Profile {

    @Autowired
    UserProfileServices userProfileServices;

    // create get the Profile
    @GetMapping("/User/profile")

    public ResponseEntity<?> getUserProfile(@Valid @RequestParam("userid") long userid) {
        System.err.println(userid + "userid");
        return userProfileServices.getuserProfile(userid);
    }

}
