package org.capstone.service;

import com.google.firebase.database.*;


public class FirebaseDelete {
    // Reference to the Firebase database
    private final DatabaseReference mDatabase;
    // Constructor to initialize the database reference
    public FirebaseDelete(){
        mDatabase = FirebaseDatabase.getInstance().getReference();
    }
    // Method to delete data based on the provided key
    public void deleteData(String key) {
        // Check if the key is empty or null, and return early if it is
        if (key.strip().length() == 0) {
            return; // Return early if the key is null
        }
        DatabaseReference refToDelete;
        if (key.equals("All")) {
            // If the key is "All", set the reference to the root database to delete all data
            refToDelete = mDatabase; // This will delete all data in the database
        } else {
            // Otherwise, set the reference to the specified key for deleting data under that key
            refToDelete = mDatabase.child(key); // This will delete data under the specified key
        }
        // Remove the data at the specified reference and handle the result using a callback
        refToDelete.removeValue((databaseError, databaseReference) -> {
            if (databaseError != null) {
                // Handle the case where data deletion encounters an error
                System.out.println("Data could not be deleted: " + databaseError.getMessage());
            } else {
                // Handle the case where data is deleted successfully
                System.out.println("Data deleted successfully.");
            }
        });
    }
}




