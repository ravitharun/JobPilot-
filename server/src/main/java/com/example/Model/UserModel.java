package com.example.Model;

import com.sun.istack.NotNull;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class UserModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userApplicationId;
	@NotNull
	@Column(name = "userEmail", unique = true)

	private String userEmail;
	private String username;
	private String userPasswoard;

	public long getUserApplicationId() {
		return userApplicationId;
	}

	public void setUserApplicationId(long userApplicationId) {
		this.userApplicationId = userApplicationId;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserPasswoard() {
		return userPasswoard;
	}

	public void setUserPasswoard(String userPasswoard) {
		this.userPasswoard = userPasswoard;
	}

}
