package com.example.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Repository.ApplicationSettingsRepo;
import com.example.Model.ApplicationSettigs;

@Service
public class AppSettingServices {

    @Autowired

    ApplicationSettingsRepo applicationSettingsRepo;

    // get the App settings Method

    public String GetSetting_app(long UserId) {

        try {
            ApplicationSettigs app = applicationSettingsRepo.findByUserId(5);
            System.err.println(app + "checktharun");
            return null;
        } catch (Exception e) {

            System.err.println(e.getMessage());
        }
        return null;
    }
}
