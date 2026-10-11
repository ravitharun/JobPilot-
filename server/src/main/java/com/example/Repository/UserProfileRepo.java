package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Model.UserProfileModel;

public interface UserProfileRepo extends JpaRepository<UserProfileModel, Long> {

}
