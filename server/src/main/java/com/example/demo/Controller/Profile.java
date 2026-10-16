package com.example.demo.Controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Services.UserProfileServices;

import jakarta.validation.Valid;

@RestController

@RequestMapping("/api/Profile")
public class Profile {

    @Autowired
    UserProfileServices userProfileServices;

    // create get the Profile
    @GetMapping("/User/profile")

    public ResponseEntity<?> getUserProfile(@Valid @RequestParam("userid") long userid) {
        // Map<String,Object> h=new HashMap<>;
        // h.put("data", )
        return userProfileServices.getuserProfile(userid);
    }

}
