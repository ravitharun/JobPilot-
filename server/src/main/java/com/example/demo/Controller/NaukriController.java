package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/api/naukri/user")
public class NaukriController {

    // get the naukiri login data
    @GetMapping("/Naukri")

    public long GetNaukriLoginInfo(@RequestParam("userid") long userid) {

        return userid;
    }

    // post save the naukir account in jobPilot db

    @PostMapping("/Add")

    public String AddNaukriAccount() {

        return "Creating the new Account";
    }

    // update the naukiri account

    @PutMapping("/naukri/update")

    public String Updatenaukri() {

        return "Updating the naukri login creditanla";
    }
}
