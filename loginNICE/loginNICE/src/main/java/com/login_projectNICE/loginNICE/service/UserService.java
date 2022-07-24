package com.login_projectNICE.loginNICE.service;


import com.login_projectNICE.loginNICE.dto.LoginResponse;
import com.login_projectNICE.loginNICE.dto.UserDto;
import com.login_projectNICE.loginNICE.models.User;
import com.login_projectNICE.loginNICE.repository.UserRepository;
import com.login_projectNICE.loginNICE.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.nio.file.AccessDeniedException;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JWTUtil jwtUtil;
    public ResponseEntity<User>  createUser(User user){
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1,1024,1,user.getPassword());
        user.setPassword(hash);
        return  userRepository.create(user).map(user1 -> new ResponseEntity<>(user1, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }
    public ResponseEntity  deleteUser(Long user_id){
        User findUser = userRepository.findUser(user_id);
        if (findUser != null ) {
            if (userRepository.delete(user_id)){
                return new ResponseEntity(HttpStatus.OK);
             }else{
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    public LoginResponse login(User user) throws AccessDeniedException {
        System.out.println(user.getEmail()+"  "+user.getPassword());
        LoginResponse loginResponse= new LoginResponse();
        User userFound = userRepository.validateUser(user.getEmail(), user.getPassword());
        if(userFound != null){
            String token = jwtUtil.create(String.valueOf(userFound.getId()), userFound.getEmail());
            loginResponse.setUser(userToUserDto(userFound));
            loginResponse.setToken((token));
            return loginResponse;
        }else{
            throw new AccessDeniedException("Error en el login");
        }
    }

    private UserDto userToUserDto (User user){
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setLastname(user.getLastname());
        userDto.setEmail(user.getEmail());
        return userDto;
    }
}
