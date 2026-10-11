package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long>{

}
