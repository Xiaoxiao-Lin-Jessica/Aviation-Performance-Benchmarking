package org.capstone.model;

import java.util.ArrayList;
import java.util.HashMap;

public class Map {
    public HashMap<String, ArrayList<Route>> routeMap;
    public ArrayList<City> CityList;


    public Map() {}

    public ArrayList<Route> getRoutesByTime(String time){
        return null;
    }

    public ArrayList<Route> getRoutesByDeparture(String departure){
        return null;
    }

    public ArrayList<Route> getRoutesByArrival(String arrival){
        return null;
    }

    public ArrayList<Route> getRoutesByAirline(String airline){
        return null;
    }
}
