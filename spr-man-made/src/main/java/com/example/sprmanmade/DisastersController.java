package com.example.sprmanmade;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DisastersController {

    private final DisasterRepository repository;

    public DisastersController(DisasterRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/disasters")
    public Iterable<Disaster> getDisasters() {
        return this.repository.getDisastersSortedByDate();
    }

    @GetMapping("/disasters/loc/{location}")
    public Iterable<Disaster> getDisasterByLocation(@PathVariable("location") String location) {
        return this.repository.getDisasterByLocation(location);
    }

    @GetMapping("/disasters/typ/{type}")
    public Iterable<Disaster> getDisasterByType(@PathVariable("type") String type) {
        return this.repository.getDisasterByType(type);
    }

}
