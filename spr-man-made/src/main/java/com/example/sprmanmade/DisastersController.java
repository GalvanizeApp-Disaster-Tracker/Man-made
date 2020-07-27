package com.example.sprmanmade;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class DisastersController {

    private final DisasterRepository repository;

    public DisastersController(DisasterRepository repository) {
        this.repository = repository;
    }

}
