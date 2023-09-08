package org.capstone.controllers;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
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

        model.addAttribute("name", name);
        return "greeting";
    }
}
