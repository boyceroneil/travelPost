package com.example.demo.IMPL;

import com.example.demo.Entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface UserCRUD extends CrudRepository<User, Long> {
    List<User> findByNameAndPassword(String name, String password);

    @Query("select u from User u where u.name is :name")
    List<User> findByName(@PathVariable("name") String name);



}