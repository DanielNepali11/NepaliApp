package com.nepaliwebsite.NepaliWebsite.repository;

import com.nepaliwebsite.NepaliWebsite.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findUserByEmailAndPassword(String email, String password);

    Optional<User> findByEmail(String email);
}
