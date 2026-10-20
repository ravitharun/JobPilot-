package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Model.ProfessionalDetails;

public interface  ProfessionalDetailsRepo extends JpaRepository<ProfessionalDetails,Long> {
    
}
