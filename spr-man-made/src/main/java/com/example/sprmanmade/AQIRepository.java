package com.example.sprmanmade;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface AQIRepository extends CrudRepository<AQI, Long> {

    @Query(value = "SELECT * FROM aqi_rankings WHERE min_level <= :level AND max_level >= :level", nativeQuery = true)
    AQI getLevel(int level);
}
