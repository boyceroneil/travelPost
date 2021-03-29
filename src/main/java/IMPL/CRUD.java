package IMPL;

import java.util.List;

public interface CRUD {
    List<Object> searchAll();
    Object searchId(int theId);
    //    List<Object> genreType(Object object);
    List<Object> search(Object object);
    Object identify(Object name, Object password);
    void saveUpdate(Object object);//rent the book
    void deleteId(int theId);//bought the book
}
