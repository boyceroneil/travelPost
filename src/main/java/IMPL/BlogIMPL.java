package IMPL;

import Entity.Blog;
import Entity.Comment;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class BlogIMPL implements CRUD{
    private final EntityManager manager;

    @Autowired
    public BlogIMPL(EntityManager manager) {
        this.manager = manager;
    }

    @Override
    @Transactional
    public List<Object> searchAll() {
        Session session = manager.unwrap(Session.class);
        Query<Object> query = session.createQuery("from Blog");
        return query.getResultList();
    }

    @Override//not needed
    public Object searchId(int theId) {
        return null;
    }

    @Override//not needed
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
        Blog blog = session.get(Blog.class, theId);
        session.delete(blog);

    }
}
