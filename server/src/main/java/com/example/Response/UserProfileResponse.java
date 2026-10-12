package com.example.Response;

import org.springframework.http.HttpStatus;

import com.example.Model.UserProfileModel;

public class UserProfileResponse {

    public String message;

    public UserProfileModel data;
    public HttpStatus StatusCode;

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

}
