package com.example.sprmanmade;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface DisasterRepository extends CrudRepository<Disaster, Long> {



}
