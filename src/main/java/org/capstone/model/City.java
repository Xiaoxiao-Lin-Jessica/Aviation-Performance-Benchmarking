package org.capstone.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class City {
    public String getName() {
        return name;
    }

    private String name;
    public ArrayList<Route> routeList;

    public City(String name) {
        this.name = name;
    }

    public ArrayList<Route> getDepartureRoutes(){
        return null;
    }

    public ArrayList<Route> getArrivalRoutes(){
        return null;
    }

}
