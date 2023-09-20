package org.capstone.controllers;

import org.capstone.LoginCallback;
import org.capstone.repository.UserDAO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

    @GetMapping("/toLoginPage")
    public String toLoginPage() {
        return "loginPage";
    }

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String pwd, Model model) {

        UserDAO userDAO = new UserDAO();
        userDAO.login(email, pwd, new LoginCallback(){//"admin@test.com", "admin123"
            @Override
            public void onLoginResult(boolean success) {
                if (success) {
                    System.out.println("Login success!");
                    model.addAttribute("ifSuccess", true);
                } else {
                    System.out.println("Login failed!");
                    model.addAttribute("ifSuccess", false);
                }
            }
        });
        return "login";
    }
}
