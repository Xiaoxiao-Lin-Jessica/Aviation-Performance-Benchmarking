package org.capstone.service;
import org.capstone.LoginCallback;
import org.capstone.repository.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Jianan Lu
 * @version 2.0
 */
@Service
public class UserService implements UserServiceInterface{
    @Autowired
    private UserDAO userDao;
    @Override
    public boolean login(String email, String password) {
        //boolean[] ifSuccess = new boolean[0];
        userDao.login(email, password, new LoginCallback() {
            @Override
            public void onLoginResult(boolean success) {
                if (success) {
                 //   ifSuccess[0] = true;
                }
                else{
                   // ifSuccess[0] = false;
                }
            }
        });
       return true;// return ifSuccess[0];
    }
}