package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.IMPL.CRUD;
import com.example.demo.IMPL.UserCRUD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class UserControl {
//    private final CRUD crud;
//    @Autowired
//    public UserControl(@Qualifier("userIMPL")CRUD crud) {
//        this.crud = crud;
//    }

    @Autowired
    UserCRUD crud;


    @PostMapping("/createAccount")
    public User createAccount(@RequestBody User s){
        crud.save(s);
        return s;
    }
    @GetMapping("/getLogin/{name}")
    public List<User> getName(@PathVariable("name") String name){
        crud.findByName(name);
        return crud.findByName(name);
    }
//    private final CRUD crud;
//
//    public UserControl(@Qualifier("userIMPL") CRUD crud) {
//        this.crud = crud;
//    }
//
//    @GetMapping("/getAccounts")
//    public List<Object> searchAll(){ return crud.searchAll();}
}
