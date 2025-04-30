package fr.simplon.brief20.controller;

import fr.simplon.brief20.model.User;
import fr.simplon.brief20.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String listUsers(Model model) {
        List<User> users = userService.findAll();
        model.addAttribute("users", users);
        return "pages/users/list";
    }

    @GetMapping("/create")
    public String showCreateForm(Model model) {
        model.addAttribute("user", User.builder().build());
        return "pages/users/create";
    }

    @PostMapping
    public String createUser(@ModelAttribute User user) {
        userService.saveUser(user);
        return "redirect:/users";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        userService.findById(id)
            .ifPresent(u -> model.addAttribute("user", u));
        return "pages/users/edit";
    }

    @PostMapping("/edit/{id}")
    public String updateUser(@PathVariable Long id, @ModelAttribute User user) {
        user.setId(id);
        userService.saveUser(user);
        return "redirect:/users";
    }

    @PostMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "redirect:/users";
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("Logout successful");
    }
}
