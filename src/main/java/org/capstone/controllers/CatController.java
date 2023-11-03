package org.capstone.controllers;

import org.capstone.LoginCallback;
import org.capstone.model.User;
import org.capstone.repository.UserDAO;
import org.capstone.service.*;
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
//        User user = new User("admin@test.com","admin123");
//        UserDAO userDAO = new UserDAO();
//        userDAO.addUser(user);

        // Example of user login check using UserDAO.
//        userDAO.login("admin@test.com", "admin123", new LoginCallback(){
//            @Override
//            public void onLoginResult(boolean success) {
//                if (success) {
//                    // Login success
//                    System.out.println("Login success!");
//                } else {
//                    // Login failed
//                    System.out.println("Wrong password!");
//                }
//            }
//        });

//         Uncomment this code to delete the database attributes.
//        FirebaseDelete dataDelete = new FirebaseDelete();
//        dataDelete.deleteData("Load_Factor");

//         Store two excel
//        String excelPath_1 = "src/main/resources/static/18-23load_factor.xlsx";
//        LoadDataWithTable1 loadDataT1 = new LoadDataWithTable1();
//        loadDataT1.loadExcelToFirebase(excelPath_1);
//        String excelPath_2 = "src/main/resources/static/delay_cancel.xlsx";
//        LoadDataWithTable2 loadDataT2 = new LoadDataWithTable2();
//        loadDataT2.loadExcel2ToFirebase(excelPath_2);

//        ExportStringJSONdata exporter = new ExportStringJSONdata();
//        exporter.exportDataToJson((cancelDelayJson, loadFactorJson) -> {
////            System.out.println("cancelDelayJson: " + cancelDelayJson);
////            System.out.println("loadFactorJson: " + loadFactorJson);
//        });



        model.addAttribute("name", name);
        return "greeting";
    }
}
