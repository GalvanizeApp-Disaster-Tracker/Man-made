package com.example.sprmanmade;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationsController {

    private final LocationRepository repository;

    public LocationsController(LocationRepository repository) {
        this.repository = repository;
    }

}
