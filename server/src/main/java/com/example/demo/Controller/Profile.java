package com.example.demo.Controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.web.multipart.MultipartFile;
import com.example.Services.UserProfileServices;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/Profile")
public class Profile {

    @Autowired
    UserProfileServices userProfileServices;

    @PostMapping(value = "/upload-resume", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadResume(
            @RequestParam("file") MultipartFile file) {

        System.out.println(
                "File name: " + file.getOriginalFilename());
        System.out.println(
                "File size: " + file.getSize());
        String fileName = UUID.randomUUID() + "_" +
                Paths.get(file.getOriginalFilename())
                        .getFileName().toString();

        // Path uploadDir = Paths.get("uploads/resumes");
        // Files.createDirectories(uploadDir);

        // Path filePath = uploadDir.resolve(fileName);
        // Files.copy(file.getInputStream(), filePath);

        String fileUrl = "http://localhost:8080/api/Profile/resumes/" + fileName;
        Map<String, Object> m = new HashMap<>();
        m.put("fileUrl", fileUrl);
        return ResponseEntity.status(200).body(m);
    }
}