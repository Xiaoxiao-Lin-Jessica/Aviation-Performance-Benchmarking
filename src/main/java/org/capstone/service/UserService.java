package org.capstone.service;
import org.capstone.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * @author Jianan Lu
 * @version 1.0
 */
@Service
public class UserService implements UserServiceInterface{
    @Autowired
    private UserMapper userMapper;


    @Override
    public int add(User user) {
        return userMapper.add(user);
    }

    @Override
    public List<User> queryAll() {
        return userMapper.queryAll();
    }
}