package com.example.sprmanmade;


import javax.persistence.*;

@Entity
@Table(name="aqi_rankings")
public class AQI {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private int minLevel;
    private int maxLevel;
    private String color;
    private String concern;
    private String description;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getMinLevel() {
        return minLevel;
    }

    public void setMinLevel(int level) {
        this.minLevel = level;
    }

    public int getMaxLevel() {
        return maxLevel;
    }

    public void setMaxLevel(int level) {
        this.maxLevel = level;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getConcern() {
        return concern;
    }

    public void setConcern(String concern) {
        this.concern = concern;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
