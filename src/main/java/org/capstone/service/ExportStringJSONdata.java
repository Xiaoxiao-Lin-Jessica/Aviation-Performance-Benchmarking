package org.capstone.service;

import java.util.concurrent.CountDownLatch;
import com.google.firebase.database.*;
import org.json.JSONObject;
import java.io.FileWriter;
import java.io.IOException;



public class ExportStringJSONdata {
    // Declare two constant strings for referencing different data in the database
    private final String CANCEL_DELAY = "Cancel_Delay";
    private final String LOAD_FACTOR = "Load_Factor";
    // Reference to the root node of the Firebase database
    private final DatabaseReference databaseReference;
    // Define a callback interface for notifying the caller when data is loaded
    public interface JsonDataCallback {
        void onDataLoaded(String cancelDelayJson, String loadFactorJson);
    }
    // Constructor to initialize the database reference
    public ExportStringJSONdata() {
        databaseReference = FirebaseDatabase.getInstance().getReference();
    }
    // Method to export data to JSON format, accepting a callback parameter to notify when data is loaded
    public void exportDataToJson(final JsonDataCallback callback) {
        // Get a reference to the "Cancel_Delay" node
        DatabaseReference cancelDelayReference = databaseReference.child(CANCEL_DELAY);
        // Get a reference to the "Load_Factor" node
        DatabaseReference loadfactorReference = databaseReference.child(LOAD_FACTOR);
        // Add a data listener to the "Cancel_Delay" node
        cancelDelayReference.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                // Retrieve the "Cancel_Delay" data from the data snapshot and convert it to a JSON string
                String cancelDelayJson = dataSnapshot.getValue().toString();
                // Add a data listener to the "Load_Factor" node
                loadfactorReference.addListenerForSingleValueEvent(new ValueEventListener() {
                    @Override
                    public void onDataChange(DataSnapshot dataSnapshot) {
                        // Retrieve the "Load_Factor" data from the data snapshot and convert it to a JSON string
                        String loadFactorJson = dataSnapshot.getValue().toString();
                        // Call the callback to notify data loading is complete and pass the two JSON strings
                        callback.onDataLoaded(cancelDelayJson, loadFactorJson);
                    }

                    @Override
                    public void onCancelled(DatabaseError databaseError) {
                        // Handling in case of an error during data loading
                        System.err.println("Error exporting data to JSON: " + databaseError.getMessage());
                    }
                });
            }
            public void onCancelled(DatabaseError databaseError) {
                // Handling in case of an error during data loading
                System.err.println("Error exporting data to JSON: " + databaseError.getMessage());
            }
        });
    }
}