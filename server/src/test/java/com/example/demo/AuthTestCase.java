
package com.example.demo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.example.Dto.SignupDto;
import com.example.Model.UserModel;
import com.example.Repository.UserRepository;
import com.example.Services.UserServices;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

@ExtendWith(MockitoExtension.class)
public class AuthTestCase {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserServices userServices;
    @Autowired
    PasswordEncoder PasswordEncoder;

    @Test
    // @Disabled
    public void CreateANewAccount() {
        SignupDto data = new SignupDto();

        String encodedPassword = PasswordEncoder.encode("test123");
        data.setApplication_password(encodedPassword);
        data.setUseremail("tharunravi672@gmail.com");
        data.setUsername("ravi tharun");

        ResponseEntity<?> response = userServices.Signup(data);

        assertNotNull(response);
    }

    @Test
    void LoginAccount() {
        String userEmail = "tharunrav55i672@gmail.com";
        String userPassword = "12345678";

        UserModel user = new UserModel();
        user.setUserEmail(userEmail);
        user.setUserPasswoard(userPassword);
        user.setUsername("Ravi Tharun");

        when(userRepository.findByUserEmail(userEmail))
                .thenReturn(user);

        ResponseEntity<?> response = userServices.Signin(userEmail, userPassword);
        System.err.println(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(userRepository).findByUserEmail(userEmail);
    }

}
