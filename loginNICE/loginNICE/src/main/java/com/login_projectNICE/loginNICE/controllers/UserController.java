package com.login_projectNICE.loginNICE.controllers;


import com.login_projectNICE.loginNICE.models.User;
import com.login_projectNICE.loginNICE.repository.UserRepository;
import com.login_projectNICE.loginNICE.service.UserService;
import com.login_projectNICE.loginNICE.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

//Se hacen los endpoints

@CrossOrigin
@RestController
@RequestMapping("/Api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private JWTUtil jwtUtil;

    @GetMapping
    public ResponseEntity<List<User>> getAll(@RequestHeader(value = "Authorization") String token) {
        if (!validateToken(token)){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(userRepository.getAll(), HttpStatus.OK);

    }

    @PostMapping("/createUser")
    public ResponseEntity<User> create(@Valid @RequestBody User user) {
        return userService.createUser(user);
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity delete(@RequestHeader(value = "Authorization") String token, @NotNull @PathVariable("id") final Long user_id) {
        if (!validateToken(token)) {
        }
        return userService.deleteUser(user_id);
    }
    private boolean validateToken(String token) {
        String userId = jwtUtil.getKey(token);
        return userId != null;
    }
}

