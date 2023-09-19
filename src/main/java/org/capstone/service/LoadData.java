package org.capstone.service;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class LoadData {
    private final String ROUTE_DATA = "ROUTE_DATA";
    private final DatabaseReference databaseReference;
    private boolean hasData(Object... data) {
        for (Object datum : data) {
            if (datum == null) {
                return false;
            }
        }
        return true;
    }

    public LoadData() {
        // 获取对数据库的引用
        databaseReference = FirebaseDatabase.getInstance().getReference();
    }

    public void loadExcelDataToFirebase(String excelFilePath) {
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

                // Only put the first row
                break;
            }
            System.out.println(tree);
            // 将数据写入 Firebase 数据库
            databaseReference.child(ROUTE_DATA).setValue(tree, (databaseError, databaseReference) -> {
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

}

