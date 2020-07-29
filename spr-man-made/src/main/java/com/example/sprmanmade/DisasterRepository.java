package com.example.sprmanmade;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface DisasterRepository extends CrudRepository<Disaster, Long> {

    @Query(value="SELECT * FROM disasters ORDER BY article_date DESC", nativeQuery = true)
    Iterable<Disaster> getDisastersSortedByDate();

    @Query(value="SELECT * FROM disasters WHERE location = :location", nativeQuery = true)
    Iterable<Disaster> getDisasterByLocation(String location);

    @Query(value="SELECT * FROM disasters WHERE type = :type", nativeQuery = true)
    Iterable<Disaster> getDisasterByType(String type);

}
