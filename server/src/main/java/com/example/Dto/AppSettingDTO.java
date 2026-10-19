package com.example.Dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AppSettingDTO {

    private JobPreferencesDTO jobperfecncedata;
    private SettingsDataDTO settingsdata;

    @JsonProperty("Jobperfecncedata")
    public JobPreferencesDTO getJobperfecncedata() {
        return jobperfecncedata;
    }

    @JsonProperty("Jobperfecncedata")
    public void setJobperfecncedata(
            JobPreferencesDTO jobperfecncedata) {
        this.jobperfecncedata = jobperfecncedata;
    }

    @JsonProperty("Settingsdata")
    public SettingsDataDTO getSettingsdata() {
        return settingsdata;
    }

    @JsonProperty("Settingsdata")
    public void setSettingsdata(SettingsDataDTO settingsdata) {
        this.settingsdata = settingsdata;
    }
}