package com.example.demo.Controller;

import com.example.demo.Entity.Comment;
import com.example.demo.IMPL.CRUD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class CommentControl {
    private final CRUD crud;

    @Autowired
    public CommentControl(@Qualifier("commentIMPL")CRUD crud) {
        this.crud = crud;
    }

    @GetMapping("/AllComments")
    public List<Object> searchAll(){return crud.searchAll();}

    @PutMapping("/UpdateComment")
    public Comment updateComment(@RequestBody Comment comment){
        crud.saveUpdate(comment);
        return comment;
    }

    @PostMapping("/PostComment")
    public Comment PostComment(@RequestBody Comment comment){
        comment.setId(0);
        crud.saveUpdate(comment);
        return comment;
    }

    @DeleteMapping("/DeleteComment")
    public String deleteComment(@PathVariable int id){
        crud.deleteId(id);
        return "";
    }
}
