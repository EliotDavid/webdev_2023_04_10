package com.jihoon.board.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jihoon.board.entity.RelatedSearchWordEntity;

@Repository
public interface RelatedSearchWordRepository extends JpaRepository<RelatedSearchWordEntity, Integer> {
    
    // @Query(value=
    //             "SELECT search_word AS searchWord, count(search_word) AS count " + 
    //             "FROM Searchwordlog " + 
    //             "GROUP BY search_word " + 
    //             "ORDER BY count DESC " + 
    //             "LIMIT 15", nativeQuery=true)
    // public List<RelatedSearchWordResultSet> findTop15();

}
