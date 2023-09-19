package org.capstone.service;

import com.google.firebase.database.*;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.io.FileInputStream;
import java.io.IOException;



public class Firebase_Delete {
    private final DatabaseReference mDatabase;

    public Firebase_Delete(){
        mDatabase = FirebaseDatabase.getInstance().getReference();
    }

    public void deleteData(String key) {
        if (key.strip().length() == 0) {
            return; // Return early if the key is null
        }
        DatabaseReference refToDelete;
        if (key.equals("All")) {
            refToDelete = mDatabase; // This will delete all data in the database
        } else {
            refToDelete = mDatabase.child(key); // This will delete data under the specified key
        }

        refToDelete.removeValue((databaseError, databaseReference) -> {
            if (databaseError != null) {
                System.out.println("Data could not be deleted: " + databaseError.getMessage());
            } else {
                System.out.println("Data deleted successfully.");
            }
        });
    }


}




