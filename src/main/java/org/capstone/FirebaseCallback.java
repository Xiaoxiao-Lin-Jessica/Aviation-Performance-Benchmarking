package org.capstone;

import com.google.firebase.database.DatabaseError;

public interface FirebaseCallback {
    void onSuccess(Double data);
    void onError(DatabaseError error);
}
