
package com.example.demo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.example.Dto.SignupDto;
import com.example.Repository.UserRepository;
import com.example.Services.UserServices;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

@ExtendWith(MockitoExtension.class)
public class AuthTestCase {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserServices userServices;

    @Test
    @Disabled
    public void CreateANewAccount() {

    }

    @Test
    void LoginAccount() {

        String userEmail = "tharun@gmail.com";
        String userPasswoard = "Test@123";

        ResponseEntity<?> response = userServices.Signin(userEmail, userPasswoard);

        assertNotNull(response);
    }
}
