package org.capstone.controllers;

import com.google.firebase.database.DatabaseError;
import org.capstone.FirebaseCallback;
import org.capstone.LoginCallback;
import org.capstone.model.User;
import org.capstone.repository.AirlineDAO;
import org.capstone.repository.UserDAO;
import org.capstone.service.LoadData;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


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

        // Uncomment this code to delete the database attributes.
//        FirebaseDelete dataDelete = new FirebaseDelete();
//        dataDelete.deleteData("All");

        // Uncomment this code to load the data to firebase
//        String excelPath = "src/main/resources/static/10-23_delay_cancel.xlsx";
//        LoadData loadData = new LoadData();
//        loadData.loadExcelDataToFirebase(excelPath);

        AirlineDAO airlineDAO = new AirlineDAO();

        // Get cancel rate.
        airlineDAO.getCancelRate("Adelaide", "Sydney", "2010", "1", "Qantas", new FirebaseCallback() {
            @Override
            public void onSuccess(Double cancelRate) {
                System.out.println("Cancel rate: " + cancelRate);
            }

            @Override
            public void onError(DatabaseError error) {
                if (error != null) {
                    System.out.println("Failed: " + error.getCode());
                } else {
                    System.out.println("No such data!");
                }
            }
        });

        airlineDAO.getOnTimeArrival("Adelaide", "Sydney", "2010", "1", "Qantas", new FirebaseCallback() {
            @Override
            public void onSuccess(Double data) {
                System.out.println("On time arrival rate: " + data);
            }

            @Override
            public void onError(DatabaseError error) {
                if (error != null) {
                    System.out.println("Failed: " + error.getCode());
                } else {
                    System.out.println("No such data!");
                }
            }
        });


        model.addAttribute("name", name);
        return "greeting";
    }
}
