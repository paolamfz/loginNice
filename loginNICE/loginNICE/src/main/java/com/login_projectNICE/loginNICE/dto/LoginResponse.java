package com.login_projectNICE.loginNICE.dto;

import lombok.Data;

@Data
public class LoginResponse {
  private UserDto user;
  private String token;
}
