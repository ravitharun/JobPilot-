package com.example.demo.Controller;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/corn")

public class CornJobApplyController {
    @GetMapping("/")
    public String TestCorn() {

        return runCornJob();
    }

    @Scheduled(cron = "0 * * * * *")
    public String runCornJob() {
        System.out.println("Runs every minute");
        return "Running";
    }
}
