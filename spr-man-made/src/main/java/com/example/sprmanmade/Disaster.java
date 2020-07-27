package com.example.sprmanmade;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="disasters")
public class Disaster {

    @Id
    @GeneratedValue
    private long id;
}
