package com.nepaliwebsite.NepaliWebsite.service;

import com.nepaliwebsite.NepaliWebsite.dto.LoginDTO;
import com.nepaliwebsite.NepaliWebsite.dto.UserDTO;
import com.nepaliwebsite.NepaliWebsite.response.LoginResponse;

public interface UserService {
    public void saveUser(UserDTO userDTO);

    public void deleteUser(int id);

    public LoginResponse loginUser(LoginDTO loginDTO);
}
