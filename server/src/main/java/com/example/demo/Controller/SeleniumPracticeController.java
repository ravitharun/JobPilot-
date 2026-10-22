package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Services.SeleniumPracticeService;

/**
 * SeleniumPracticeController
 */

@RestController
@RequestMapping("/api/test")
public class SeleniumPracticeController {

    @Autowired

    SeleniumPracticeService seleniumPracticeService;

    @GetMapping("/")

    public String TestSelinium() {
        // seleniumPracticeService
        return seleniumPracticeService.loginToNaukri(null, null);
    }

}