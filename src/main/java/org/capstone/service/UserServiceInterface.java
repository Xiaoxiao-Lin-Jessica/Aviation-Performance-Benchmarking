package org.capstone.service;
import org.capstone.model.User;
import java.util.List;
/**
 * @author Jianan Lu
 * @version 2.0
 */
public interface UserServiceInterface {
    boolean login(String email, String password);
}
