package com.example.sprmanmade;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class AQIController {

    private final AQIRepository repository;

    public AQIController(AQIRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    public ArrayList<AQI> getAqi() {
        ArrayList<AQI> aqi = new ArrayList<AQI>();
//        AQI aqi1 = new AQI();
//        aqi1.setLevel(50);
//        aqi1.setColor("Green");
//        aqi1.setConcern("Good");
//        aqi1.setDescription("Air quality is satisfactory, and air pollution poses little or no risk.");
//        aqi.add(aqi1);
//        AQI aqi2 = new AQI();
//        aqi2.setLevel(100);
//        aqi2.setColor("Yellow");
//        aqi2.setConcern("Moderate");
//        aqi2.setDescription("Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.");
//        aqi.add(aqi2);
//        AQI aqi3 = new AQI();
//        aqi3.setLevel(150);
//        aqi3.setColor("Orange");
//        aqi3.setConcern("Unhealthy for Sensitive Groups");
//        aqi3.setDescription("Members of sensitive groups may experience health effects. The general public is less likely to be affected.");
//        aqi.add(aqi3);
//        AQI aqi4 = new AQI();
//        aqi4.setLevel(200);
//        aqi4.setColor("Red");
//        aqi4.setConcern("Unhealthy");
//        aqi4.setDescription("Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.");
//        aqi.add(aqi4);
//        AQI aqi5 = new AQI();
//        aqi5.setLevel(300);
//        aqi5.setColor("Purple");
//        aqi5.setConcern("Very Unhealthy");
//        aqi5.setDescription("Health alert: The risk of health effects is increased for everyone.");
//        aqi.add(aqi5);
//        AQI aqi6 = new AQI();
//        aqi6.setLevel(1000);
//        aqi6.setColor("Maroon");
//        aqi6.setConcern("Hazardous");
//        aqi6.setDescription("Health warning of emergency conditions: everyone is more likely to be affected.");
//        aqi.add(aqi6);

        return aqi;
    }
}
