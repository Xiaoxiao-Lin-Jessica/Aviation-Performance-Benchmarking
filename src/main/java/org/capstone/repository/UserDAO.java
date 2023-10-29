package org.capstone.repository;

import com.google.firebase.database.*;
import com.google.firebase.auth.*;
import org.capstone.LoginCallback;
import org.capstone.model.User;
import org.mindrot.jbcrypt.BCrypt;

public class UserDAO {

    // The reference to the Firebase
    private final DatabaseReference mDatabase;

    // Reference to the "User" table
    public UserDAO() {
        mDatabase = FirebaseDatabase.getInstance().getReference("Users");
    }

    // Add a user into Firebase Realtime Database. Use "email" as key, "User" object as value.
    public void addUser(User user) {
        // Hash the user's password
        String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPassword);

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
                    // <password> hash code matches "User" -> "password" hash code.
                    callback.onLoginResult(BCrypt.checkpw(password, user.getPassword()));
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