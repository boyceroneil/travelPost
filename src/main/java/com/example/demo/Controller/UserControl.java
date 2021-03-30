package com.example.demo.Controller;

import com.example.demo.IMPL.CRUD;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class UserControl {
//    private final CRUD crud;
//
//    public UserControl(@Qualifier("userIMPL") CRUD crud) {
//        this.crud = crud;
//    }
//
//    @GetMapping("/getAccounts")
//    public List<Object> searchAll(){ return crud.searchAll();}
}
