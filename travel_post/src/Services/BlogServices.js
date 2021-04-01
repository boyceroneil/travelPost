import axios from 'axios';

class BlogService{

    retrieveAllBlog(){
        return axios.get(`http://localhost:8080/allblogs`)
    }

    postBlog(blog){
        return axios.post(`http://localhost:8080/PostBlog`,blog)
    }
    putBlog(blog){
        return axios.put(`http://localhost:8080/UpdateBlog`,blog)
    }

    deleteBlog(id){
        return axios.delete(`http://localhost:8080/DeleteBlog/${id}`)
    }

}
export default new BlogService;