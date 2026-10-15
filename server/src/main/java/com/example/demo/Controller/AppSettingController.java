package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.Services.AppSettingServices;

@RestController
@RequestMapping("/api/AppSettings")
public class AppSettingController {

    @Autowired
    AppSettingServices getSetting_app;

    // get use settings
    @GetMapping("/get")
    public String GetAppSettings(@RequestParam("userid") long userid) {
        System.err.println(userid + "useridTharun");

        return getSetting_app.GetSetting_app(userid);
    }

}
