package com.example.sprmanmade;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.squareup.okhttp.OkHttpClient;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="disasters")
public class Disaster {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String location;
    private String image;
    private String headline;
    private String articleLink;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date articleDate;
    private String type;
    private String summary;

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

    public void setArticleLink(String articleLink) { this.articleLink = articleLink; }

    public Date getArticleDate() {
        return articleDate;
    }

    public void setArticleDate(Date articleDate) {
        this.articleDate = articleDate;
    }

    public String getType() { return type; }

    public void setType(String type) { this.type = type; }

    public String getSummary() { return summary; }

    public void setSummary(String summary) { this.summary = summary; }
}
