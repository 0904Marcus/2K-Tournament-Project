package com.matthi_marcus._2k_tournament_project;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("teams/api")
public class Controller {

    @GetMapping("/test")
    public String test() {
        return "Hello World";
    }
}
