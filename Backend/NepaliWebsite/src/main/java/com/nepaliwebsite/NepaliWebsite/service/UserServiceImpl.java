package com.nepaliwebsite.NepaliWebsite.service;

import com.nepaliwebsite.NepaliWebsite.dto.LoginDTO;
import com.nepaliwebsite.NepaliWebsite.dto.UserDTO;
import com.nepaliwebsite.NepaliWebsite.model.User;
import com.nepaliwebsite.NepaliWebsite.repository.UserRepository;
import com.nepaliwebsite.NepaliWebsite.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void saveUser(UserDTO userDTO) {

        User user = new User(
                userDTO.getFirstName(),
                userDTO.getLastName(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword())
        );
        userRepository.save(user);
    }

    @Override
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        String message = "";
        User user = userRepository.findByEmail(loginDTO.getEmail());
        if (user != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user.getPassword();
            boolean isPasswordCorrect = passwordEncoder.matches(password, encodedPassword);
            if (isPasswordCorrect) {
                Optional<User> checkUser = userRepository.findUserByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (checkUser.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("Password donot match.", false);
            }
        } else {
            return new LoginResponse("Email doesnot exist", false);
        }
    }
}