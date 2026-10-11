package com.example.Dto;

import java.time.LocalDateTime;

public class LoginDto {

    public String useremail;

    public long ApplicationuserId;

    public String userName;

    public LocalDateTime Created_Account;

    public long getApplicationuserId() {
        return ApplicationuserId;
    }

    public void setApplicationuserId(long applicationuserId) {
        ApplicationuserId = applicationuserId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public LocalDateTime getCreated_Account() {
        return Created_Account;
    }

    public void setCreated_Account(LocalDateTime created_Account) {
        this.Created_Account = created_Account;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

}
