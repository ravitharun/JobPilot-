package com.example.Response;

import java.util.Optional;

import org.springframework.http.HttpStatus;

import com.example.Model.UserModel;

public class ApiSucessResponse {
	
	public String message;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public HttpStatus getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(HttpStatus statusCode) {
		this.statusCode = statusCode;
	}
	public UserModel getData() {
		return data;
	}
	public void setData(UserModel data) {
		this.data = data;
	}
	public HttpStatus statusCode;
	public UserModel data;

	
	

}
