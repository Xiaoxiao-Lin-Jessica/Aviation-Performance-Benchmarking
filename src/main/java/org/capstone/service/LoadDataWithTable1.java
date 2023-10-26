package org.capstone.service;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class LoadDataWithTable1 {
    private final String LOAD_FACTOR = "Load_Factor";
    private final DatabaseReference databaseReference;


    public LoadDataWithTable1() {
        databaseReference = FirebaseDatabase.getInstance().getReference();
    }

    public void loadExcelToFirebase(String excelFilePath) {
        try {
            FileInputStream excelFile = new FileInputStream(excelFilePath);
            Workbook workbook = new XSSFWorkbook(excelFile);
            Sheet sheet = workbook.getSheetAt(0);
            DatabaseReference loadFactorReference = databaseReference.child(LOAD_FACTOR);

            for (Row row : sheet) {
                if (row.getRowNum() == 0) {
                    continue;
                }
                String route = row.getCell(0).getStringCellValue();
                String departing_port = row.getCell(1).getStringCellValue();
                String arriving_port = row.getCell(2).getStringCellValue();
                String airline = row.getCell(3).getStringCellValue();
                Double passengers = row.getCell(4).getNumericCellValue();
                Double total_rpks = row.getCell(5).getNumericCellValue();
                Double available_seats = row.getCell(6).getNumericCellValue();
                Double total_asks = row.getCell(7).getNumericCellValue();
                Double lf_rate = row.getCell(8).getNumericCellValue();
                Double trips = row.getCell(9).getNumericCellValue();
                Double year = row.getCell(10).getNumericCellValue();
                String month = row.getCell(11).getStringCellValue();
                String date = row.getCell(12).getStringCellValue();


                Map<String, Object> rowData = new HashMap<>();
                rowData.put("Route", route);
                rowData.put("DepartingPort", departing_port);
                rowData.put("ArrivingPort", arriving_port);
                rowData.put("Airline", airline);
                rowData.put("Passengers", passengers);
                rowData.put("Total_rpks", total_rpks);
                rowData.put("Available_seats", available_seats);
                rowData.put("Total_asks", total_asks);
                rowData.put("LF%", lf_rate);
                rowData.put("Trips", trips);
                rowData.put("Year", year);
                rowData.put("Month", month);
                rowData.put("Date", date);

                loadFactorReference.push().setValue(rowData, (databaseError, databaseReference) -> {
                    if (databaseError != null) {
                        System.err.println("Data could not be saved: " + databaseError.getMessage());
                    }
                });
            }

            workbook.close();
            excelFile.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
