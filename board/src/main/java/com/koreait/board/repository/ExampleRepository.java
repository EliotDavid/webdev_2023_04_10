package com.koreait.board.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koreait.board.entity.ExampleEntity;

//# @Repository 
//? 해당 인터페이스를 Repository로 사용하도록 지정하는 어노테이션
@Repository
//? JpaRepository<T, ID>: 해당 인터페이스를 상속 받은 인터페이스를 
//? JPA Query Creation을 사용할 수 있도록하는 인터페이스
//? T: 데이터베이스의 테이블을 구현한 Entity class
//? ID: 해당 Entity Primary Key의 타입
public interface ExampleRepository extends JpaRepository<ExampleEntity, Integer> {
    
    public ExampleEntity findByComment(String comment);

}
