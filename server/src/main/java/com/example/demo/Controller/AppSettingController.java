package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Dto.AppSettingDTO;

import com.example.Services.AppSettingServices;

@RestController
@RequestMapping("/api/AppSettings")
@CrossOrigin("http://localhost:5173")
public class AppSettingController {

    @Autowired
    AppSettingServices getSetting_app;

    // get use settings
    @GetMapping("/get")

    public ResponseEntity<?> GetAppSettings(@RequestParam("userid") String userid) {
        System.err.println(userid + "userid");

        return getSetting_app.GetSetting_app(userid);
    }

    @PutMapping("/Update/Settings")
    public ResponseEntity<?> UpdateSettings(
            @RequestBody AppSettingDTO appsetting) {

        return getSetting_app.UpdateSettings(appsetting);
    }

}
