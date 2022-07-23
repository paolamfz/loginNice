package com.login_projectNICE.loginNICE.controllers;

import com.login_projectNICE.loginNICE.models.User;
import com.login_projectNICE.loginNICE.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.AccessDeniedException;

@RestController
@RequestMapping("/Api/Auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping
    public String login(@RequestBody User user) throws AccessDeniedException {
        return userService.login(user);
    }
}