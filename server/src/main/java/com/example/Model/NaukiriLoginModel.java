package com.example.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Naukiri Login")
public class NaukiriLoginModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long applicationId;

    private long applicationuserid;
    @Column(name = "naukiriEmail", unique = true)
    private String naukiriEmail;

    private String NaukiriPassword;

    public long getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(long applicationId) {
        this.applicationId = applicationId;
    }

    public long getApplicationuserid() {
        return applicationuserid;
    }

    public void setApplicationuserid(long applicationuserid) {
        this.applicationuserid = applicationuserid;
    }

    public String getNaukiriEmail() {
        return naukiriEmail;
    }

    public void setNaukiriEmail(String naukiriEmail) {
        this.naukiriEmail = naukiriEmail;
    }

    public String getNaukiriPassword() {
        return NaukiriPassword;
    }

    public void setNaukiriPassword(String naukiriPassword) {
        NaukiriPassword = naukiriPassword;
    }

}
