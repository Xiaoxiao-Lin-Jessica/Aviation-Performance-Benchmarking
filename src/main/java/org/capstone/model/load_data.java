package org.capstone.model;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.lang.Integer;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class load_data {
    private FirebaseDatabase database;
    private DatabaseReference databaseReference;
    private boolean hasData(Object... data) {
        for (Object datum : data) {
            if (datum == null) {
                return false;
            }
        }
        return true;
    }

    public load_data() {
        // 获取Firebase数据库实例
        database = FirebaseDatabase.getInstance();
        // 获取对数据库的引用
        databaseReference = database.getReference();
    }

    public void loadExcelDataToFirebase(String excelFilePath) {
//        VERSION 1

//        try {
//            FileInputStream excelFile = new FileInputStream(excelFilePath);
//            Workbook workbook = new XSSFWorkbook(excelFile);
//            Sheet sheet = workbook.getSheetAt(0); // 假设表在第一个工作表
//            Map<String, Object> tree = new HashMap<>();
//            for (Row row : sheet) {
//                // 忽略表头行
//                if (row.getRowNum() == 0) {
//                    continue;
//                }
////                for (int i = 0; i < row.getRowNum(); i++) {
////                    row.getCell(i+1).setCellStyle();
////                }
//                String departing_port = row.getCell(1).getStringCellValue();
//                String arriving_port = row.getCell(2).getStringCellValue();
//                String airline = row.getCell(3).getStringCellValue();
//                double on_time_departures = row.getCell(11).getNumericCellValue();
//                double on_time_arrivals = row.getCell(12).getNumericCellValue();
//                double cancellations = row.getCell(13).getNumericCellValue();
//                double year = row.getCell(14).getNumericCellValue();
//                double month = row.getCell(15).getNumericCellValue();
//
//
//                String[] companies = {"Jetstar", "Qantas", "QantasLink", "Regional Express", "Rex Airlines", "Skywest", "Tigerair Australia", "Virgin Australia", "Virgin Australia - ATR-F100 Operations", "Virgin Australia Regional Airlines"};
//                DatabaseReference dataReference = database.getReference(departing_port)
//                        .child(arriving_port)
//                        .child(String.valueOf((int) year))
//                        .child(String.valueOf((int) month));
//                Map<String, Object> data = new HashMap<>();
//                Map<String, Object> monthData = new HashMap<>();
//                Map<String, Object> airlineData = new HashMap<>();
//                Map<String, Object> lfData = new HashMap<>();
//                for (String company : companies) {
//                    // 检查公司的数据是否存在，只导入有数据的公司
//                    if (hasData(on_time_departures, on_time_arrivals, cancellations)) {
//                        Map<String, Object> companyData = new HashMap<>();
//                        companyData.put("onTimeDepartures", on_time_departures);
//                        companyData.put("onTimeArrivals", on_time_arrivals);
//                        companyData.put("cancellations", cancellations);
//                        airlineData.put(company, companyData);
//                    }
//                }
//                monthData.put("airlineData", airlineData);
//                monthData.put("LFData", lfData);
//                data.put("month", monthData);
//                databaseReference.setValue(data,(databaseError, databaseReference1) -> {
//                    if (dataError == null) {
//                        System.out.println("Data saved");
//                    }else{
//                        System.err.println("Data could not be saved: "+ databaseError.getMessage());
//                    }
//                });



//        VERSION 2

        try {
            FileInputStream excelFile = new FileInputStream(excelFilePath);
            Workbook workbook = new XSSFWorkbook(excelFile);
            Sheet sheet = workbook.getSheetAt(0); // 假设表在第一个工作表
            Map<String, Object> tree = new HashMap<>();
            for (Row row : sheet) {
                // 忽略表头行
                if (row.getRowNum() == 0) {
                    continue;
                }
                String departing_port = row.getCell(1).getStringCellValue();
                String arriving_port = row.getCell(2).getStringCellValue();
                String airline = row.getCell(3).getStringCellValue();
                Double on_time_departures = row.getCell(11).getNumericCellValue();
                Double on_time_arrivals = row.getCell(12).getNumericCellValue();
                Double cancellations = row.getCell(13).getNumericCellValue();
                Double year = row.getCell(14).getNumericCellValue();
                Double month = row.getCell(15).getNumericCellValue();

                Map<String, Object> arrivingPortMap = (Map<String, Object>) tree.getOrDefault(departing_port, new HashMap<>());
//                Map<Integer, Object> yearMap = (Map<Integer, Object>) arrivingPortMap.getOrDefault(arriving_port, new HashMap<>());
//                Map<String, Object> monthMap = (Map<String, Object>) yearMap.getOrDefault(year, new HashMap<>());
                Map<String, Object> yearMap = (Map<String, Object>) arrivingPortMap.getOrDefault(String.valueOf(year.intValue()), new HashMap<>());
                Map<String, Object> monthMap = (Map<String, Object>) yearMap.getOrDefault(String.valueOf(month.intValue()), new HashMap<>());
                Map<String, Object> airlineMap = (Map<String, Object>) monthMap.getOrDefault(month, new HashMap<>());

                airlineMap.put("Cancellations", cancellations);
                airlineMap.put("OnTime Arrivals",on_time_arrivals);
                airlineMap.put("OnTime Departures", on_time_departures);

//                monthMap.put(airline, airlineMap);
//                yearMap.put(month.intValue(), monthMap);
                yearMap.put(String.valueOf(year.intValue()), monthMap);
                monthMap.put(String.valueOf(month.intValue()), airlineMap);
                arrivingPortMap.put(arriving_port, yearMap);
                tree.put(departing_port, arrivingPortMap);
            }
            System.out.println(tree);
            // 获取到对应的Firebase数据库引用
            DatabaseReference dataReference = database.getReference();

            // 将数据写入 Firebase 数据库
            dataReference.setValue(tree, (databaseError, databaseReference) -> {
                if (databaseError == null) {
                    System.out.println("Data saved successfully.");
                } else {
                    System.err.println("Data could not be saved: " + databaseError.getMessage());
                }
            });


            workbook.close();
            excelFile.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws IOException {
        FileInputStream serviceAccount = new FileInputStream("src/main/resources/firebase_key.json");
        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://capstone-3267f-default-rtdb.firebaseio.com/")
                .build();

        FirebaseApp.initializeApp(options);
        load_data dataLoader = new load_data();
        dataLoader.loadExcelDataToFirebase("C:/Users/陈梦妮/Desktop/5703/datasets/cleaningdatafinal/cleaning data/10-23_delay_cancel.xlsx");
    }
}

