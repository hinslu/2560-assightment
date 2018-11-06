package mbs;

import java.io.Serializable;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author jackie
 */

public class Userbean extends Object implements Serializable {

    public static final String ISTATUS = "Login";
    
    private String status;
    private String username;
    private String password;

    public String getStatus() {
        return status;
    }
    public void setStatus(String value) {
        status = value;
    }

    
    public String getUsername() {
        return username;
    }
    public void setUsername(String value) {
        username = value;
    }
    
    public String getPassword() {
        return password;
    }
    public void setPassword(String value) {
        password = value;
    }

}