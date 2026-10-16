package com.example.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Application_settings")
public class ApplicationSettigs {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long ApplicationSettingId;

    private long userId;

    private boolean Enableautomation = true;

    private boolean Automaticapplications = true;

    private boolean Reviewbeforeapplying = true;

    private boolean EmailNotification = true;

    private boolean Applicationupdates = true;

    private boolean Interviewalerts = true;

    private boolean Automationreports = true;

    public long getApplicationSettingId() {
        return ApplicationSettingId;
    }

    public void setApplicationSettingId(long applicationSettingId) {
        ApplicationSettingId = applicationSettingId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        userId = userId;
    }

    public boolean isEnableautomation() {
        return Enableautomation;
    }

    public void setEnableautomation(boolean enableautomation) {
        Enableautomation = enableautomation;
    }

    public boolean isAutomaticapplications() {
        return Automaticapplications;
    }

    public void setAutomaticapplications(boolean automaticapplications) {
        Automaticapplications = automaticapplications;
    }

    public boolean isReviewbeforeapplying() {
        return Reviewbeforeapplying;
    }

    public void setReviewbeforeapplying(boolean reviewbeforeapplying) {
        Reviewbeforeapplying = reviewbeforeapplying;
    }

    public boolean isEmailNotification() {
        return EmailNotification;
    }

    public void setEmailNotification(boolean emailNotification) {
        EmailNotification = emailNotification;
    }

    public boolean isApplicationupdates() {
        return Applicationupdates;
    }

    public void setApplicationupdates(boolean applicationupdates) {
        Applicationupdates = applicationupdates;
    }

    public boolean isInterviewalerts() {
        return Interviewalerts;
    }

    public void setInterviewalerts(boolean interviewalerts) {
        Interviewalerts = interviewalerts;
    }

    public boolean isAutomationreports() {
        return Automationreports;
    }

    public void setAutomationreports(boolean automationreports) {
        Automationreports = automationreports;
    }

}
