package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Services.SeleniumPracticeService;

/**
 * SeleniumPracticeController
 */

@RestController
@RequestMapping("/api/Automation")
@CrossOrigin("http://localhost:5173")
public class Automation {

    @Autowired

    SeleniumPracticeService seleniumPracticeService;

    @GetMapping("/Start")

    public String TestSelinium(@RequestParam("userid") long userid) {
        return seleniumPracticeService.StartAutomation(userid);
    }

    @PostMapping("/naukri/ProfileUpdate")

    public String UpdateNaukriProfile() {

        return seleniumPracticeService.UpdateNaukriProfile();
    }
}