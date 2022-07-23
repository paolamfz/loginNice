package com.login_projectNICE.loginNICE.repository;

import com.login_projectNICE.loginNICE.models.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    List<User> getAll();
    Optional<User> create(User user);
    boolean delete(Long user_id);
    User findUser(Long user_id);
    User validateUser(String email, String password);
}
