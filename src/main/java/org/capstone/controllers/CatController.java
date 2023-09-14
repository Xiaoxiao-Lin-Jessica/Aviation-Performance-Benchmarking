package org.capstone.controllers;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import org.capstone.LoginCallback;
import org.capstone.model.User;
import org.capstone.repository.UserDAO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.google.api.core.ApiFuture;


@Controller
public class CatController {

    @GetMapping("/")
    public String inputPage() {
        return "input";
    }

    @PostMapping("/greet")
    public String greetingPage(@RequestParam String name, Model model) {
        // Uncomment this block of code to try the data insertion.
//        DatabaseReference mDatabase = FirebaseDatabase.getInstance().getReference();
//        ApiFuture<Void> future = mDatabase.child("userNames").push().setValueAsync(name);
//
//        try {
//            future.get();
//            System.out.println("Data successfully written!");
//        } catch (Exception e) {
//            System.out.println("Error writing data: " + e.getMessage());
//        }


        // Uncomment this block of code to add a new user in database.

//        User user = new User("admin", "admin@test.com","admin123");
        UserDAO userDAO = new UserDAO();
//        userDAO.addUser(user);

        // Example of user login check using UserDAO.
        userDAO.login("admin@test.com", "admin123", new LoginCallback(){
            @Override
            public void onLoginResult(boolean success) {
                if (success) {
                    // Login success
                    System.out.println("Login success!");
                } else {
                    // Login failed
                    System.out.println("Wrong password!");
                }
            }
        });
        model.addAttribute("name", name);
        return "greeting";
    }
}
