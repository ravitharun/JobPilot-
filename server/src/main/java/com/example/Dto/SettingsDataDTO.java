package com.example.Dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SettingsDataDTO {

    @JsonProperty("ApplicationSettingId")
    private long applicationSettingId;

    @JsonProperty("Applicationupdates")
    private Boolean applicationupdates;

    @JsonProperty("Automaticapplications")
    private Boolean automaticapplications;

    @JsonProperty("Automationreports")
    private Boolean automationreports;

    @JsonProperty("EmailNotification")
    private Boolean emailNotification;

    @JsonProperty("Enableautomation")
    private Boolean enableautomation;

    @JsonProperty("Interviewalerts")
    private Boolean interviewalerts;

    @JsonProperty("Reviewbeforeapplying")
    private Boolean reviewbeforeapplying;

    @JsonProperty("userId")
    private long userId;

    public long getApplicationSettingId() {
        return applicationSettingId;
    }

    public void setApplicationSettingId(long applicationSettingId) {
        this.applicationSettingId = applicationSettingId;
    }

    public Boolean getApplicationupdates() {
        return applicationupdates;
    }

    public void setApplicationupdates(Boolean applicationupdates) {
        this.applicationupdates = applicationupdates;
    }

    public Boolean getAutomaticapplications() {
        return automaticapplications;
    }

    public void setAutomaticapplications(Boolean automaticapplications) {
        this.automaticapplications = automaticapplications;
    }

    public Boolean getAutomationreports() {
        return automationreports;
    }

    public void setAutomationreports(Boolean automationreports) {
        this.automationreports = automationreports;
    }

    public Boolean getEmailNotification() {
        return emailNotification;
    }

    public void setEmailNotification(Boolean emailNotification) {
        this.emailNotification = emailNotification;
    }

    public Boolean getEnableautomation() {
        return enableautomation;
    }

    public void setEnableautomation(Boolean enableautomation) {
        this.enableautomation = enableautomation;
    }

    public Boolean getInterviewalerts() {
        return interviewalerts;
    }

    public void setInterviewalerts(Boolean interviewalerts) {
        this.interviewalerts = interviewalerts;
    }

    public Boolean getReviewbeforeapplying() {
        return reviewbeforeapplying;
    }

    public void setReviewbeforeapplying(Boolean reviewbeforeapplying) {
        this.reviewbeforeapplying = reviewbeforeapplying;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}