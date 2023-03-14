package com.jihoon.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jihoon.board.common.constant.ApiPattern;
import com.jihoon.board.service.AuthService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(ApiPattern.AUTH)
public class AuthController {

    @Autowired private AuthService authService;

    private String SIGN_UP = "/sign-up";
    
    @PostMapping(SIGN_UP)
    public ? signUp(?) {
        
    }
    
}
