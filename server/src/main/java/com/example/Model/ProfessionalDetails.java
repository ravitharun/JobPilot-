package com.example.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Professional_Details")
public class ProfessionalDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long ProfessionalDetails_ID;
    private String AboutMe;
    private String TagetJobRole;
    private String ExperienceLevel;

    private long userid;

    private String Githuburl;
    private String LinkedInUrl;
    private String Portfolio;

    public String getGithuburl() {
        return Githuburl;
    }

    public void setGithuburl(String githuburl) {
        Githuburl = githuburl;
    }

    public String getLinkedInUrl() {
        return LinkedInUrl;
    }

    public void setLinkedInUrl(String linkedInUrl) {
        LinkedInUrl = linkedInUrl;
    }

    public String getPortfolio() {
        return Portfolio;
    }

    public void setPortfolio(String portfolio) {
        Portfolio = portfolio;
    }

    public long getProfessionalDetails_ID() {
        return ProfessionalDetails_ID;
    }

    public void setProfessionalDetails_ID(long professionalDetails_ID) {
        ProfessionalDetails_ID = professionalDetails_ID;
    }

    public String getAboutMe() {
        return AboutMe;
    }

    public void setAboutMe(String aboutMe) {
        AboutMe = aboutMe;
    }

    public String getTagetJobRole() {
        return TagetJobRole;
    }

    public void setTagetJobRole(String tagetJobRole) {
        TagetJobRole = tagetJobRole;
    }

    public String getExperienceLevel() {
        return ExperienceLevel;
    }

    public void setExperienceLevel(String experienceLevel) {
        ExperienceLevel = experienceLevel;
    }

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }

}
