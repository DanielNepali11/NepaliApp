package com.nepaliwebsite.NepaliWebsite.controller;


import com.nepaliwebsite.NepaliWebsite.dto.LoginDTO;
import com.nepaliwebsite.NepaliWebsite.dto.UserDTO;
import com.nepaliwebsite.NepaliWebsite.exception.ResourceNotFoundException;
import com.nepaliwebsite.NepaliWebsite.model.User;
import com.nepaliwebsite.NepaliWebsite.repository.UserRepository;
import com.nepaliwebsite.NepaliWebsite.response.LoginResponse;
import com.nepaliwebsite.NepaliWebsite.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/add")
    public ResponseEntity<String> savePlayer(@RequestBody UserDTO userDTO) {
        Optional<User> getUserWithEmail = userRepository.findByEmail(userDTO.getEmail());
        if (getUserWithEmail.isPresent()) {
            throw new IllegalArgumentException("Email already exists.");
        } else {
            userService.saveUser(userDTO);
            return ResponseEntity.ok("User has been added");

        }
    }

    @DeleteMapping("/delete/{id}")
    public String deletePlayer(@PathVariable int id) {
        User userExists = userRepository.findById(id).orElse(null);
        if(userExists!=null) {
            userService.deleteUser(id);
            return "User deleted successfully.";
        } else {
            throw new ResourceNotFoundException("User with "+id+" not found");
        }
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO) {
        if(loginDTO.getEmail().isBlank() || loginDTO.getPassword().isBlank()){
            throw new IllegalArgumentException("Email and password required.");
        }else {
            LoginResponse loginResponse = userService.loginUser(loginDTO);
            return ResponseEntity.ok(loginResponse);
        }
    }
}
