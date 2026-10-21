package com.example.Dto;

public class NaukriDto {
    private String user_Naukri_email;
    private String user_Naukri_passwrod;

    private long User_appliocation_id;
    public long getUser_appliocation_id() {
        return User_appliocation_id;
    }
    public void setUser_appliocation_id(long user_appliocation_id) {
        User_appliocation_id = user_appliocation_id;
    }
    public String getUser_Naukri_email() {
        return user_Naukri_email;
    }
    public void setUser_Naukri_email(String user_Naukri_email) {
        this.user_Naukri_email = user_Naukri_email;
    }
    public String getUser_Naukri_passwrod() {
        return user_Naukri_passwrod;
    }
    public void setUser_Naukri_passwrod(String user_Naukri_passwrod) {
        this.user_Naukri_passwrod = user_Naukri_passwrod;
    }
}
