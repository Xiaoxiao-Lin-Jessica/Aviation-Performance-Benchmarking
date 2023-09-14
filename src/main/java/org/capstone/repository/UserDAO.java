package org.capstone.repository;

import com.google.firebase.database.*;
import com.google.firebase.auth.*;
import org.capstone.LoginCallback;
import org.capstone.model.User;

public class UserDAO {

    // The reference to the Firebase
    private final DatabaseReference mDatabase;

    // Reference to the "User" table
    public UserDAO() {
        mDatabase = FirebaseDatabase.getInstance().getReference("Users");
    }

    // Add a user into Firebase Realtime Database. Use "email" as key, "User" object as value.
    public void addUser(User user) {
        // Using email as key, replacing '.' to ',', since Firebase does not allow key with'.'
        String emailKey = user.getEmail().replace('.', ',');
        mDatabase.child(emailKey).setValueAsync(user);
    }

    // Login check. LoginCallback return true if user exist, false otherwise.
    public void login(String email, String password, LoginCallback callback) {
        // Using email as key, replacing '.' to ',', since Firebase does not allow key with'.'
        String emailKey = email.replace('.', ',');

        // Reference to the "User" -> <email key>
        DatabaseReference userRef = mDatabase.child(emailKey);
        userRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                User user = dataSnapshot.getValue(User.class);
                if (user != null) {
                    // <email key> exist in "User" table.
                    String storedHashedPassword = user.getPassword();
                    if (storedHashedPassword.equals(password)) {
                        // <password> matches "User" -> <email key> -> "password".
//                        System.out.println("Login success!");
                        callback.onLoginResult(true);
                    } else {
                        // <password> does not match "User" -> <email key> -> "password".
//                        System.out.println("Wrong password!");
                        callback.onLoginResult(false);
                    }
                } else {
                    // <email key> not exist in "User" table.
//                    System.out.println("User not Exist");
                    callback.onLoginResult(false);
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {
                callback.onLoginResult(false);
            }
        });
    }
}