package org.capstone.service;

import java.util.concurrent.CountDownLatch;
import com.google.firebase.database.*;
import org.json.JSONObject;
import java.io.FileWriter;
import java.io.IOException;



public class ExportStringJSONdata {
    private final String CANCEL_DELAY = "Cancel_Delay";
    private final String LOAD_FACTOR = "Load_Factor";
    private final DatabaseReference databaseReference;
    public interface JsonDataCallback {
        void onDataLoaded(String cancelDelayJson, String loadFactorJson);
    }

    public ExportStringJSONdata() {
        databaseReference = FirebaseDatabase.getInstance().getReference();
    }

    public void exportDataToJson(final JsonDataCallback callback) {
        DatabaseReference cancelDelayReference = databaseReference.child(CANCEL_DELAY);
        DatabaseReference loadfactorReference = databaseReference.child(LOAD_FACTOR);
        cancelDelayReference.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                String cancelDelayJson = dataSnapshot.getValue().toString();
                loadfactorReference.addListenerForSingleValueEvent(new ValueEventListener() {
                    @Override
                    public void onDataChange(DataSnapshot dataSnapshot) {
                        String loadFactorJson = dataSnapshot.getValue().toString();
                        callback.onDataLoaded(cancelDelayJson, loadFactorJson);
                    }

                    @Override
                    public void onCancelled(DatabaseError databaseError) {
                        System.err.println("Error exporting data to JSON: " + databaseError.getMessage());
                    }
                });
            }

            public void onCancelled(DatabaseError databaseError) {
                System.err.println("Error exporting data to JSON: " + databaseError.getMessage());
            }
        });
    }
}