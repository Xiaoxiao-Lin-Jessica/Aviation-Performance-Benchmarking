package org.capstone;

import com.google.firebase.database.DatabaseError;

// Used to be call as callback for firebase.
public interface FirebaseCallback {
    void onSuccess(Double data);
    void onError(DatabaseError error);
}
