package com.example.Dto;

public class SettingsDataDTO {
    private long applicationSettingId;
    private Boolean applicationupdates;
    private Boolean automaticapplications;
    private Boolean automationreports;
    private Boolean emailNotification;
    private Boolean enableautomation;
    private Boolean interviewalerts;
    private Boolean reviewbeforeapplying;
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
