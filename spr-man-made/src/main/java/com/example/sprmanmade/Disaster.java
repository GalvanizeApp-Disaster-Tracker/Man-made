package com.example.sprmanmade;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="disasters")
public class Disaster {

    @Id
    @GeneratedValue
    private long id;
    private String location;
    private String image;
    private String headline;
    private String articleLink;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date articleDate;
    private int severityLevel;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getMessage() {
        return headline;
    }

    public void setMessage(String message) {
        this.headline = message;
    }

    public String getArticleLink() { return articleLink; }

    public void setArticleLink(String articleLink) { this.articleLink = articleLink}

    public Date getArticleDate() {
        return articleDate;
    }

    public void setArticleDate(Date articleDate) {
        this.articleDate = articleDate;
    }

    public int getSeverityLevel() {
        return severityLevel;
    }

    public void setSeverityLevel(int severityLevel) {
        this.severityLevel = severityLevel;
    }
}
