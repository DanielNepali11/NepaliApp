package com.nepaliwebsite.NepaliWebsite.response;

public class LoginResponse {
    String username;
    String message;
    Boolean status;

    public LoginResponse(String username, String message, Boolean status) {
        this.username = username;
        this.message = message;
        this.status = status;
    }

    public LoginResponse() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "username='" + username + '\'' +
                ", message='" + message + '\'' +
                ", status=" + status +
                '}';
    }
}
