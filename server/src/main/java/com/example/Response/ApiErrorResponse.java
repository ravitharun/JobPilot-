package com.example.Response;



import org.springframework.http.HttpStatus;

public class ApiErrorResponse {
	
	public String ErrorMessage;
	public HttpStatus Errorcode;
	public String getErrorMessage() {
		return ErrorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		ErrorMessage = errorMessage;
	}
	public HttpStatus getErrorcode() {
		return Errorcode;
	}
	public void setErrorcode(HttpStatus errorcode) {
		Errorcode = errorcode;
	}
	



}
