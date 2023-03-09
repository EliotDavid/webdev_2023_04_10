package com.koreait.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.koreait.board.common.constant.ApiMappingPattern;
import com.koreait.board.service.FileService;

@RestController
@RequestMapping(ApiMappingPattern.FILE)
public class FileController {

    @Autowired private FileService fileService;

    private static final String UPLOAD = "/upload";
    
    //# File upload 
    @PostMapping(UPLOAD)
    public String upload(@RequestParam("file") MultipartFile file) {
        return fileService.upload(file);
    }

}
