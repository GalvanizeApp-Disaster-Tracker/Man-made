package com.example.sprmanmade;


import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

@RestController
public class AQIController {

    private final AQIRepository repository;

    public AQIController(AQIRepository repository) {
        this.repository = repository;
    }

    // displays the 6 different air quality index levels
    @GetMapping("/levels")
    public Iterable<AQI> getAqiLevels() {
        return this.repository.findAll();
    }

    // displays corresponding air quality index level based on input int
    @GetMapping("/levels/{level}")
    public AQI getAQIByLevel(@PathVariable("level") int level) {
        return this.repository.getLevel(level);
    }
}
