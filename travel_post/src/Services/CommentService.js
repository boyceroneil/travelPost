import axios from 'axios';

class CommentService{

    retrieveAllComment(){
        return axios.get(`http://localhost:8080/AllComments`)
    }

    postComment(comment){
        return axios.post(`http://localhost:8080/PostComment`,comment)
    }

    deleteComment(id){
        return axios.delete(`http://localhost:8080/DeleteComment/${id}`)
    }

}
export default new CommentService;