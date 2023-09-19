package org.capstone.service;

import com.google.firebase.database.*;


public class FirebaseDelete {
    private final DatabaseReference mDatabase;

    public FirebaseDelete(){
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




