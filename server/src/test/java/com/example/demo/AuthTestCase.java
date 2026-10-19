
package com.example.demo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.example.Dto.SignupDto;
import com.example.Model.UserModel;
import com.example.Repository.UserRepository;
import com.example.Services.UserServices;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

@ExtendWith(MockitoExtension.class)
class AuthTestCase {

    @Mock
    UserRepository userRepository;

    @Mock
    PasswordEncoder passwordEncoder;

    @InjectMocks
    UserServices userServices;

    @Test
    void CreateANewAccount() {
        SignupDto data = new SignupDto();

        data.setApplication_password("test123");
        data.setUseremail("tharunravi672@gmail.com");
        data.setUsername("Ravi Tharun");

        when(passwordEncoder.encode("test123"))
                .thenReturn("encoded-test123");

        ResponseEntity<?> response = userServices.Signup(data);

        assertNotNull(response);
    }

    @Test
    void LoginAccount() {
        String userEmail = "tharunravi672@gmail.com";
        String userPassword = "12345678";

        UserModel user = new UserModel();
        user.setUserEmail(userEmail);
        user.setUserPasswoard(userPassword);
        user.setUsername("Ravi Tharun");

        when(userRepository.findByUserEmail(userEmail))
                .thenReturn(user);

        ResponseEntity<?> response =
                userServices.Signin(userEmail, userPassword);

        assertEquals(HttpStatus.OK, response.getStatusCode());

        verify(userRepository).findByUserEmail(userEmail);
    }
}
