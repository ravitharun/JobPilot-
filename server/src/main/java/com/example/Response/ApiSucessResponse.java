package com.example.Response;

import java.util.Optional;

import org.springframework.http.HttpStatus;

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
	public Optional<?> getData() {
		return data;
	}
	public void setData(Optional<?> data) {
		this.data = data;
	}
	public HttpStatus statusCode;
	public Optional<?> data;

	
	

}
