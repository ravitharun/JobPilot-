package com.example.Dto;

/**
 * JobPreferencesDTO
 */
public class JobPreferencesDTO {

    private long userApplicationId;
    private String PreferredJobRole;
    private String PreferredLocation;
    private String ExperienceLevel;
    private String WorkMode;
    private String ExpectedSalary;
    private String DailyApplicationLimit;
    public long getUserApplicationId() {
        return userApplicationId;
    }
    public void setUserApplicationId(long userApplicationId) {
        this.userApplicationId = userApplicationId;
    }
    public String getPreferredJobRole() {
        return PreferredJobRole;
    }
    public void setPreferredJobRole(String preferredJobRole) {
        PreferredJobRole = preferredJobRole;
    }
    public String getPreferredLocation() {
        return PreferredLocation;
    }
    public void setPreferredLocation(String preferredLocation) {
        PreferredLocation = preferredLocation;
    }
    public String getExperienceLevel() {
        return ExperienceLevel;
    }
    public void setExperienceLevel(String experienceLevel) {
        ExperienceLevel = experienceLevel;
    }
    public String getWorkMode() {
        return WorkMode;
    }
    public void setWorkMode(String workMode) {
        WorkMode = workMode;
    }
    public String getExpectedSalary() {
        return ExpectedSalary;
    }
    public void setExpectedSalary(String expectedSalary) {
        ExpectedSalary = expectedSalary;
    }
    public String getDailyApplicationLimit() {
        return DailyApplicationLimit;
    }
    public void setDailyApplicationLimit(String dailyApplicationLimit) {
        DailyApplicationLimit = dailyApplicationLimit;
    }
}