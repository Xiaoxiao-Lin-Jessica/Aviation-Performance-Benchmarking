package org.capstone.controllers;
import org.capstone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Jianan Lu
 * @version 2.0
 */
@Controller
public class UserController {
    @Autowired
    public UserService userService = new UserService();

    @RequestMapping("/toLogin")
    public String toLogin(){
        return "toLogin";
    }
    @RequestMapping("/Login")
    public String  login(Model model, String email, String password){
        if(userService.login(email, password) == true){
            model.addAttribute("result","success");
        }
        else{
            model.addAttribute("result","failed");
        }
        return "login";
    }
}