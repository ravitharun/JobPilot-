package com.example.demo.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.Dto.NaukriDto;
import com.example.Services.NaukriServices;

@Controller
@RequestMapping("/api/naukri/user")
@CrossOrigin("http://localhost:5173")
public class NaukriController {

    @Autowired
    NaukriServices naukriServices;

    // get the naukiri login data
    @GetMapping("/Naukri")

    public long GetNaukriLoginInfo(@RequestParam("userid") long userid) {

        return userid;
    }

    // post save the naukir account in jobPilot db

    @PostMapping("/Add")

    public ResponseEntity<Map<String, Object>> AddNaukriAccount(@RequestBody NaukriDto NaukriLogin) {

        return naukriServices.AddNaukriCredtianls(NaukriLogin);
    }

    // update the naukiri account

    @PutMapping("/naukri/update")

    public String Updatenaukri() {

        return "Updating the naukri login creditanla";
    }
}
