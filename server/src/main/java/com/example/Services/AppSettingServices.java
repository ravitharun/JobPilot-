package com.example.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Repository.ApplicationSettingsRepo;
import com.example.Response.ApiErrorResponse;
import com.example.Response.ApiSucessResponse;
import com.example.Model.ApplicationSettigs;

@Service
public class AppSettingServices {

    @Autowired

    ApplicationSettingsRepo applicationSettingsRepo;

    // GET: the App settings Method
    public ResponseEntity<?> GetSetting_app(String UserId) {
        System.err.println(UserId);
        ApiErrorResponse err = new ApiErrorResponse();
        ApiSucessResponse su = new ApiSucessResponse();

        try {

            // Check whether UserId is null or empty
            if (UserId == null || UserId.trim().isEmpty()) 
                {

                err.setErrorMessage("UserId cannot be null or empty.");
                err.setErrorcode(HttpStatus.BAD_REQUEST);

                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
            }

            // Convert String to long
            long USERID = Long.parseLong(UserId);

            System.err.println(USERID + "dfgrht");

            // Fetch application settings
            ApplicationSettigs app = applicationSettingsRepo.findByUserId(USERID);

            // Check whether settings exist
            if (app == null) {

                err.setErrorMessage("Application settings not found.");
                err.setErrorcode(HttpStatus.NOT_FOUND);

                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
            }

            su.setData(app);
            su.setMessage("Application Settings");

            return ResponseEntity.status(HttpStatus.OK).body(su);

        } catch (NumberFormatException e) {

            err.setErrorMessage("Invalid UserId. Please provide a valid number.");
            err.setErrorcode(HttpStatus.BAD_REQUEST);
            System.err.println("exp 1 " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);

        } catch (Exception e) {
            System.err.println("exp 2" + e.getMessage());

            err.setErrorMessage("Something went wrong while fetching application settings.");
            err.setErrorcode(HttpStatus.INTERNAL_SERVER_ERROR);

            return ResponseEntity.status(err.getErrorcode()).body(err);
        }
    }
}
