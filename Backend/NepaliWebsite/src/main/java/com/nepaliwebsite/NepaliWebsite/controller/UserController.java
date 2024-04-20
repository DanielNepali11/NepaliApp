package com.nepaliwebsite.NepaliWebsite.controller;


import com.nepaliwebsite.NepaliWebsite.dto.LoginDTO;
import com.nepaliwebsite.NepaliWebsite.dto.UserDTO;
import com.nepaliwebsite.NepaliWebsite.response.LoginResponse;
import com.nepaliwebsite.NepaliWebsite.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path="/add")
    public String savePlayer(@RequestBody UserDTO userDTO){
        userService.saveUser(userDTO);
        return "User has been added";
    }

    @DeleteMapping("/delete/{id}")
    public String deletePlayer(@PathVariable int id){
        userService.deleteUser(id);
        return "User deleted successfully.";
    }

    @PostMapping(path="/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse= userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);

    }
}
