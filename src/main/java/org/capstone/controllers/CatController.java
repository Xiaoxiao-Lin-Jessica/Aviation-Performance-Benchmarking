package org.capstone.controllers;

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
        model.addAttribute("name", name);
        return "greeting";
    }
}
