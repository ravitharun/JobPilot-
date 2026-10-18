package com.example.Response;

import org.springframework.http.HttpStatus;

import com.example.Model.JobSearchPreferences;
import com.example.Model.UserProfileModel;

public class UserProfileResponse {

    public String message;

    public UserProfileModel data;
    public HttpStatus StatusCode;

    private JobSearchPreferences job;

    public JobSearchPreferences getjob() {
        return job;
    }

    public void setjob(JobSearchPreferences job) {
        this.job = job;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public UserProfileModel getData() {
        return data;
    }

    public void setData(UserProfileModel data) {
        this.data = data;
    }

    public HttpStatus getStatusCode() {
        return StatusCode;
    }

    public void setStatusCode(HttpStatus statusCode) {
        StatusCode = statusCode;
    }

    public JobSearchPreferences getJob() {
        return job;
    }

    public void setJob(JobSearchPreferences job) {
        this.job = job;
    }

}
