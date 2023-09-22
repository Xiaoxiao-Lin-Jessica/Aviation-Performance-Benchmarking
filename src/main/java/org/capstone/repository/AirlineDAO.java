package org.capstone.repository;

import com.google.firebase.database.*;
import com.google.firebase.auth.*;
import org.capstone.FirebaseCallback;
import org.capstone.LoginCallback;
import org.capstone.model.User;

public class AirlineDAO {

    private final DatabaseReference mDatabase;

    // Reference to the "User" table
    public AirlineDAO() {
        mDatabase = FirebaseDatabase.getInstance().getReference("ROUTE_DATA");
    }

    public void getCancelRate(String dep, String arr, String year, String month, String company, FirebaseCallback callback) {
        DatabaseReference userRef = mDatabase.child(dep).child(arr).child(year).child(month).child(company).child("Cancellations");

        userRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                Double cancelRate = dataSnapshot.getValue(Double.class);
                if (cancelRate != null) {
                    callback.onSuccess(cancelRate);
                } else {
                    callback.onError(null);
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {
                callback.onError(databaseError);
            }
        });
    }

    public void getOnTimeArrival(String dep, String arr, String year, String month, String company, FirebaseCallback callback) {
        DatabaseReference userRef = mDatabase.child(dep).child(arr).child(year).child(month).child(company).child("OnTime Arrivals");

        userRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                Double onTimeArrival = dataSnapshot.getValue(Double.class);
                if (onTimeArrival != null) {
                    callback.onSuccess(onTimeArrival);
                } else {
                    callback.onError(null);
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {
                callback.onError(databaseError);
            }
        });
    }

    public void getOnTimeDeparture(String dep, String arr, String year, String month, String company, FirebaseCallback callback) {
        DatabaseReference userRef = mDatabase.child(dep).child(arr).child(year).child(month).child(company).child("OnTime Departures");

        userRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                Double onTimeDeparture = dataSnapshot.getValue(Double.class);
                if (onTimeDeparture != null) {
                    callback.onSuccess(onTimeDeparture);
                } else {
                    callback.onError(null);
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {
                callback.onError(databaseError);
            }
        });
    }



}
