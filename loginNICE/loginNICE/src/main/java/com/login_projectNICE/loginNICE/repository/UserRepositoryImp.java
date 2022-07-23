package com.login_projectNICE.loginNICE.repository;

import com.login_projectNICE.loginNICE.models.User;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

//Se comunica  con la BD, se realizan los querys
@Repository
@Transactional
public class UserRepositoryImp implements UserRepository {
    @PersistenceContext
    EntityManager em;

    @Override
    public List<User> getAll() {
        String query = "SELECT u FROM User u";
        return em.createQuery(query).getResultList();
    }

    @Override
    public Optional<User> create(User user) {
        return Optional.of(em.merge(user));
    }
    
    @Override
    public boolean delete(Long user_id) {
        em.remove(findUser(user_id));
        return true;
    }

    @Override
    public User findUser(Long user_id) {
        User findUser = em.find(User.class, user_id);
        if(findUser == null){
            return null;
        }
        return findUser;
    }
    @Override
    public User validateUser(String email, String password){
        String query = "SELECT u FROM User u WHERE u.email = :email ";
        List<User> userList = em.createQuery(query)
                .setParameter("email", email)
                .getResultList();
        if (userList.isEmpty()){
            return null;
        }
        String passwordCompare = userList.get(0).getPassword();

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);

        if(argon2.verify(passwordCompare, password)){
            return userList.get(0);
        }else{
            return null;
        }
    }
}
