package org.capstone.model;

import java.util.HashMap;

public class Airline {
    private String name;
    private String departure;
    private String arrival;
    public HashMap<String, Double> delayRateMap;
    public HashMap<String, Double> cancelRateMap;

    public Airline(String name, String departure, String arrival) {
        this.name = name;
        this.departure = departure;
        this.arrival = arrival;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getArrival() {
        return arrival;
    }

    public void setArrival(String arrival) {
        this.arrival = arrival;
    }

    @Override
    public String toString() {
        return "Airline{" +
                "name='" + name + '\'' +
                ", departure='" + departure + '\'' +
                ", arrival='" + arrival + '\'' +
                ", delayRateMap=" + delayRateMap +
                ", cancelRateMap=" + cancelRateMap +
                '}';
    }
}
