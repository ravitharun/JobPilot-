package com.example.Response;

import org.springframework.http.HttpStatus;


import com.example.Dto.LoginDto;

public class ApiSucessResponse {

	public String message;
	public String Token;

	public String getToken() {
		return Token;
	}

	public void setToken(String token) {
		Token = token;
	}

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

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public HttpStatus statusCode;
	public Object data;
	private LoginDto loginDto;

	public LoginDto getLoginDto() {
		return loginDto;
	}

	public void setLoginDto(LoginDto loginDto) {
		this.loginDto = loginDto;
	}

}
