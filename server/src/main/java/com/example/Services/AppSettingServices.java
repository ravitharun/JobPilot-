package com.example.Services;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Repository.ApplicationSettingsRepo;
import com.example.Repository.JobSearchPreferencesRepo;
import com.example.Response.ApiErrorResponse;

import jakarta.transaction.Transactional;

import com.example.Dto.AppSettingDTO;
import com.example.Dto.JobPreferencesDTO;

import com.example.Dto.SettingsDataDTO;
import com.example.Model.ApplicationSettigs;
import com.example.Model.JobSearchPreferences;

@Service
public class AppSettingServices {

        @Autowired

        ApplicationSettingsRepo applicationSettingsRepo;
        @Autowired

        JobSearchPreferencesRepo jobSearchPreferencesRepo;
        @Autowired
        ApplicationSettingsRepo appSettingRepo;

        // GET: the App settings and JobSearchPreferences data
        public ResponseEntity<?> GetSetting_app(String UserId) {
                System.err.println(UserId);
                ApiErrorResponse err = new ApiErrorResponse();
                Map<String, Object> m = new HashMap<>();

                try {

                        // Check whether UserId is null or empty
                        if (UserId == null || UserId.trim().isEmpty()) {

                                err.setErrorMessage("UserId cannot be null or empty.");
                                err.setErrorcode(HttpStatus.BAD_REQUEST);

                                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
                        }

                        // Convert String to long
                        long USERID = Long.parseLong(UserId);

                        System.err.println(USERID + "dfgrht");

                        // Fetch application settings
                        ApplicationSettigs app = applicationSettingsRepo.findByUserId(USERID);
                        JobSearchPreferences job = jobSearchPreferencesRepo.findByUserApplicationId(USERID);

                        // Check whether settings exist
                        if (app == null) {

                                err.setErrorMessage("Application settings not found.");
                                err.setErrorcode(HttpStatus.NOT_FOUND);

                                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
                        }

                        m.put("Settingsdata", app);
                        m.put("message", "Application Settings");
                        m.put("Jobperfecncedata", job);

                        return ResponseEntity.status(HttpStatus.OK).body(m);
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

        // put:/Update/Settings userapp settngsincluded(

        // update the settings
        @Transactional
        public ResponseEntity<?> UpdateSettings(AppSettingDTO appsetting) {

                SettingsDataDTO setting = appsetting.getSettingsdata();
                JobPreferencesDTO jobData = appsetting.getJobperfecncedata();

                if (setting == null || jobData == null) {
                        return ResponseEntity.badRequest()
                                        .body("Settingsdata or Jobperfecncedata is missing");
                }

                try {
                        System.out.println("ApplicationSettingId: "
                                        + setting.getApplicationSettingId());

                        JobSearchPreferences job = jobSearchPreferencesRepo.findByUserApplicationId(
                                        jobData.getUserApplicationId());

                        ApplicationSettigs settings = appSettingRepo.findByUserId(
                                        setting.getApplicationSettingId());

                        // Check both records before updating
                        if (job == null) {
                                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                                .body("Job preferences not found");
                        }

                        if (settings == null) {
                                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                                .body("Application settings not found");
                        }

                        // Update job preferences
                        job.setDailyApplicationLimit(
                                        jobData.getDailyApplicationLimit());

                        job.setExpectedSalary(
                                        jobData.getExpectedSalary());

                        job.setExperienceLevel(
                                        jobData.getExperienceLevel());

                        job.setPreferredJobRole(
                                        jobData.getPreferredJobRole());

                        job.setPreferredLocation(
                                        jobData.getPreferredLocation());

                        job.setWorkMode(
                                        jobData.getWorkMode());

                        // Update application settings
                        settings.setApplicationupdates(
                                        setting.getApplicationupdates());

                        settings.setAutomaticapplications(
                                        setting.getAutomaticapplications());

                        settings.setAutomationreports(
                                        setting.getAutomationreports());

                        settings.setEmailNotification(
                                        setting.getEmailNotification());

                        settings.setEnableautomation(
                                        setting.getEnableautomation());

                        settings.setInterviewalerts(
                                        setting.getInterviewalerts());

                        settings.setReviewbeforeapplying(
                                        setting.getReviewbeforeapplying());

                        // Save both entities
                        System.out.println("Before saving job preferences");
                        JobSearchPreferences jobSerch = jobSearchPreferencesRepo.saveAndFlush(job);
                        System.out.println("Job preferences saved successfully");

                        System.out.println("Before saving application settings");
                        ApplicationSettigs app = appSettingRepo.saveAndFlush(settings);
                        System.out.println("Application settings saved successfully");
                        Map<String, Object> m = new HashMap<>();

                        m.put("AppSetting", jobSerch);
                        m.put("message", "Settings Updated");
                        m.put("code", HttpStatus.OK);

                        return ResponseEntity.status(HttpStatus.OK).body(m);

                } catch (Exception e) {
                        System.err.println(e.getMessage());
                        e.printStackTrace();
                        throw e;
                }
        }

}
