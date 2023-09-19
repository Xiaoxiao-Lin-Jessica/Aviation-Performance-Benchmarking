package org.capstone.model;

import com.google.firebase.database.*;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.*;

import java.io.FileInputStream;
import java.io.IOException;



public class Firebase_Delete {

    public Firebase_Delete() {
        // 初始化 Firebase 应用
        try {
            FileInputStream serviceAccount = new FileInputStream("src/main/resources/firebase_key.json");

            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://capstone-3267f-default-rtdb.firebaseio.com/")
                    .build();

            FirebaseApp.initializeApp(options);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void deleteAllData() {
        DatabaseReference databaseReference = FirebaseDatabase.getInstance().getReference();

        // 使用 removeValue() 方法删除所有数据
        databaseReference.removeValue(new DatabaseReference.CompletionListener() {
            @Override
            public void onComplete(DatabaseError databaseError, DatabaseReference databaseReference) {
                if (databaseError != null) {
                    System.out.println("删除失败：" + databaseError.getMessage());
                } else {
                    System.out.println("所有数据已成功删除。");
                }
            }
        });
    }

    public static void main(String[] args) {
        Firebase_Delete dataDeleter = new Firebase_Delete();
        dataDeleter.deleteAllData();
    }
}




