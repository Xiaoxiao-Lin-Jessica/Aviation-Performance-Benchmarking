package org.capstone.controllers;
import org.capstone.LoginCallback;
import org.capstone.model.User;
import org.capstone.repository.UserDAO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.concurrent.CompletableFuture;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    // Handle the user login request.
    @PostMapping(value="/login")//,produces = MediaType.APPLICATION_JSON_VALUE
    public CompletableFuture<ResponseEntity<String>> login(@RequestBody User user) {
        CompletableFuture<ResponseEntity<String>> future = new CompletableFuture<>();
        UserDAO userDAO = new UserDAO();
        userDAO.login(user.getEmail(), user.getPassword(), new LoginCallback() {
            @Override
            public void onLoginResult(boolean success) {
                if (success) {
                    System.out.println("Login success!");
                    future.complete(ResponseEntity.ok("success"));
                } else {
                    System.out.println("Login failed!");
                    future.complete(ResponseEntity.badRequest().body("failed"));
                }
            }
        });
        return future;
    }
}
