package org.capstone.model;

import java.util.ArrayList;
import java.util.HashMap;

public class Route {
    private String departure;
    private String arrival;
    public HashMap<String, Integer> numberTripsMap;
    public HashMap<String, ArrayList<Airline>> airlineTotalMap;
    public HashMap<String, Double> loadFactorMap;


    public Route(String departure, String arrival) {
        this.departure = departure;
        this.arrival = arrival;
    }

    public String getDeparture() {
        return departure;
    }

    public String getArrival() {
        return arrival;
    }
}
