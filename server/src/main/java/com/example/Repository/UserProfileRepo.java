package com.example.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Model.UserProfileModel;

public interface UserProfileRepo extends JpaRepository<UserProfileModel, Long> {
    Optional<UserProfileModel> findByUserid(long userid);

}
