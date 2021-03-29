package Controller;

import Entity.Blog;
import IMPL.CRUD;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins =("http://localhost:3000"))
@RestController
public class BlogControl {
    private final CRUD crud;

public BlogControl(@Qualifier("blogIMPL") CRUD crud) {
        this.crud = crud;
    }

    @GetMapping("/AllBlogs")
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
