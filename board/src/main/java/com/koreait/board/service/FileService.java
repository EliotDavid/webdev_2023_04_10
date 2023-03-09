package com.koreait.board.service;

import java.io.File;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileService {

    private final String FILE_PATH = "C:/fileupload/"; 
    
    public String upload(MultipartFile file) {

        //? 실제 파일이 존재하는지 검증
        if (file.isEmpty()) return null;

        //? 원본 파일명
        String originalFileName = file.getOriginalFilename();
        //? 원본 확장자명 (image.png)
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
        //? 난수형의 이름 생성
        String uuid = UUID.randomUUID().toString();
        //? 저장할 이름
        String saveName = uuid + extension;
        //? 저장할 경로
        String savePath = FILE_PATH + saveName;

        try {
            //? 파일 생성 (저장)
            file.transferTo(new File(savePath));
        } catch(Exception exception) {
            exception.printStackTrace();
            return null;
        }

        return saveName;

    }

}
