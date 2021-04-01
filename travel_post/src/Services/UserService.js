import axios from 'axios';

class UserService{

    retrieveUser(name){
        return axios.get(`http://localhost:8080/getLogin/${name}`)
    }

    postUser(user){
        return axios.post(`http://localhost:8080/createAccount`,user)
    }
    

}
export default new UserService;