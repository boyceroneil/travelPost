package com.example.demo.Controller;

import com.example.demo.Entity.Blog;
import com.example.demo.IMPL.CRUD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class BlogControl {
    private final CRUD crud;

    @Autowired
public BlogControl(@Qualifier("blogIMPL") CRUD crud) {
        this.crud = crud;
    }

    @GetMapping("/allblogs")
    public List<Object> searchAll(){ return crud.searchAll();}

    @PostMapping("/PostBlog")
    public Blog postBlog(@RequestBody Blog blog){
    blog.setId(0);
    crud.saveUpdate(blog);
    return blog;
    }

    @PutMapping("/UpdateBlog")
    public Blog updateBlog(@RequestBody Blog blog){
    crud.saveUpdate(blog);
    return blog;
    }

    @DeleteMapping("/DeleteBlog/{id}")
    public String deleteBlog(@PathVariable int id){
        crud.deleteId(id);
        return "Delete id "+ id;
    }
}
