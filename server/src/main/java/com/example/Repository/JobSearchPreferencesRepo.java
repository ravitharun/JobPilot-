package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Model.JobSearchPreferences;

public interface JobSearchPreferencesRepo extends JpaRepository<JobSearchPreferences, Long> {

}