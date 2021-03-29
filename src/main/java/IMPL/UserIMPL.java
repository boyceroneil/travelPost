package IMPL;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class UserIMPL implements UserCRUD{
    @Autowired
    private final EntityManager manager;

    public UserIMPL(EntityManager manager) {
        this.manager = manager;
    }

    @Override
    public List<Object> searchAll() {
        Session session = manager.unwrap(Session.class);
        Query<Object> query = session.createQuery("from User");
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
        Session session = manager.unwrap(Session.class);
        Query<Object> query = session.createQuery("from User");
        List<Object> list = query.list();
        for(Object i: list){

        }

    }

    @Override
    @Transactional
    public void saveUpdate(Object object) {
        Session current = manager.unwrap(Session.class);
        current.saveOrUpdate(object);
    }

    @Override
    public void deleteId(int theId) {

    }
}
