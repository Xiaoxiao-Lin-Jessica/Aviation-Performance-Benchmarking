package org.capstone.controllers;

import org.capstone.entity.User;
import org.capstone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Jianan Lu
 * @version 1.0
 */
@Controller
public class UserController {
    @Autowired
    public UserService userService;

    @RequestMapping("/toLogin")
    public String toLogin(){
        return "login";
    }
    @RequestMapping("/LoginSuccess")
    public String  LoginSuccess(Model model, User user){
        if(user.getUsername()!=null){
            model.addAttribute("kkk",user.getUsername());
            return "success";
        }
        else {
            model.addAttribute("data","input your password");
            return "login";
        }

    }
    @RequestMapping("/toShow")
    public String showAll(Model model){
        model.addAttribute("users",userService.queryAll());
        return "showAll";

    }
    @RequestMapping("/toRegister")
    public String toRegister(){
        return "register";
    }

    @RequestMapping("/RegisterSuccess")
    public String RegisterSuccess(User user){

        int add = userService.add(user);
        return "login";

    }
    @RequestMapping("/toMessage")
    public String toMessage(Model model){
        model.addAttribute("users",userService.queryAll());
        return "showAll";
    }

}