package org.capstone.service;
import org.capstone.entity.User;
import java.util.List;
/**
 * @author Jianan Lu
 * @version 1.0
 */
public interface UserServiceInterface {
    int add(User user);
    List<User> queryAll();
}
