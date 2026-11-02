package com.example.Dto;

public class ProfileDto {

    private long id;
    private ProfileInfoDto profile;
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public ProfileInfoDto getProfile() {
        return profile;
    }
    public void setProfile(ProfileInfoDto profile) {
        this.profile = profile;
    }

}
