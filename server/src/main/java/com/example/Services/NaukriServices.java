package com.example.Services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Dto.NaukriDto;
import com.example.Model.NaukiriLoginModel;
import com.example.Repository.NaukiriRepo;

@Service
public class NaukriServices {

    @Autowired
    SeleniumPracticeService NaukriCheckLogin;

    @Autowired
    NaukiriRepo naukriRepo;

    @Autowired
    PasswordEncoder PasswordEncoder;

    public ResponseEntity<Map<String, Object>> AddNaukriCredtianls(NaukriDto NaukriLogin) {
        Map<String, Object> m = new HashMap<>();
        NaukiriLoginModel nm = new NaukiriLoginModel();

        String Test_NaukriLogin = NaukriCheckLogin.loginToNaukri(NaukriLogin.getUser_Naukri_email(),
                NaukriLogin.getUser_Naukri_passwrod());
        if (Test_NaukriLogin.equals("Login valid")) {
            // db we need to save

            nm.setApplicationuserid(NaukriLogin.getUser_appliocation_id());
            nm.setNaukiriEmail(NaukriLogin.getUser_Naukri_email());
            nm.setNaukiriPassword(PasswordEncoder.encode(NaukriLogin.getUser_Naukri_passwrod()));
            naukriRepo.save(nm);
            m.put("code", 201);
            m.put("message", "Data received successfullys");
            return ResponseEntity.status(HttpStatus.OK).body(m);
        }
        m.put("code", 403);
        m.put("message", "Login Failed By Naukri");
        System.err.println("Login Failed By Naukri");
        return ResponseEntity.status(403).body(m);
    }
}
