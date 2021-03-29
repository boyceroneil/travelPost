package IMPL;

import Entity.Comment;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class CommentIMPL implements CRUD {
    private final EntityManager manager;
    @Autowired
    public CommentIMPL(EntityManager manager){
        this.manager = manager;
    }

    @Override
    @Transactional
    public List<Object> searchAll() {
        Session session = manager.unwrap(Session.class);
        Query<Object> query = session.createQuery("from Comment");
        return query.getResultList();
    }

    @Override
    public Object searchId(int theId) {
        return null;
    }

    @Override
    public List<Object> search(Object object) {
        return null;
    }

    @Override
    public Object identify(Object name, Object password) {
        return null;
    }

    @Override
    @Transactional
    public void saveUpdate(Object object) {
        Session session = manager.unwrap(Session.class);
        session.saveOrUpdate(object);
    }

    @Override
    @Transactional
    public void deleteId(int theId) {
        Session session = manager.unwrap(Session.class);
        Comment comment = session.get(Comment.class, theId);
        session.delete(comment);
    }
}
