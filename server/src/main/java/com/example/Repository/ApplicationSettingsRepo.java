package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Model.ApplicationSettigs;

public interface ApplicationSettingsRepo extends JpaRepository<ApplicationSettigs, Long> {

    ApplicationSettigs findByUserId(long UserId);

}
