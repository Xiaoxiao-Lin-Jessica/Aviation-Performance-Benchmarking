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

public class LoadDataWithTable2 {
    // Define a constant string for referencing the "Cancel_Delay" node in the database
    private final String CANCEL_DELAY = "Cancel_Delay";
    // Reference to the Firebase database
    private final DatabaseReference databaseReference;
    // Constructor to initialize the database reference
    public LoadDataWithTable2() {

        databaseReference = FirebaseDatabase.getInstance().getReference();
    }
    // Method to load data from an Excel file and store it in Firebase
    public void loadExcel2ToFirebase(String excelFilePath) {
        try {
            // Open and read the Excel file
            FileInputStream excelFile = new FileInputStream(excelFilePath);
            Workbook workbook = new XSSFWorkbook(excelFile);
            Sheet sheet = workbook.getSheetAt(0);
            // Reference to the "Load_Factor" node in the database
            DatabaseReference canceldelayReference = databaseReference.child(CANCEL_DELAY);
            // Loop through the rows in the Excel sheet
            for (Row row : sheet) {
                if (row.getRowNum() == 0) {
                    continue;
                }
                // Extract data from each cell in the row
                String route = row.getCell(0).getStringCellValue();
                String departing_port = row.getCell(1).getStringCellValue();
                String arriving_port = row.getCell(2).getStringCellValue();
                String airline = row.getCell(3).getStringCellValue();
                Double sectors_scheduled = row.getCell(4).getNumericCellValue();
                Double sectors_flown = row.getCell(5).getNumericCellValue();
                Double cancellations = row.getCell(6).getNumericCellValue();
                Double on_time_departures = row.getCell(7).getNumericCellValue();
                Double on_time_arrivals = row.getCell(8).getNumericCellValue();
                Double departures_delay = row.getCell(9).getNumericCellValue();
                Double arrivals_delay = row.getCell(10).getNumericCellValue();
                Double on_time_d_rate = row.getCell(11).getNumericCellValue();
                Double on_time_a_rate = row.getCell(12).getNumericCellValue();
                Double cancellations_rate = row.getCell(13).getNumericCellValue();
                Double departures_delay_rate = row.getCell(14).getNumericCellValue();
                Double arrivals_delay_rate = row.getCell(15).getNumericCellValue();
                String date = row.getCell(16).getStringCellValue();
                Double year = row.getCell(17).getNumericCellValue();
                String month = row.getCell(18).getStringCellValue();
                // Create a map to store the extracted data
                Map<String, Object> rowDataOfT2 = new HashMap<>();
                rowDataOfT2.put("Route", route);
                rowDataOfT2.put("DepartingPort", departing_port);
                rowDataOfT2.put("ArrivingPort", arriving_port);
                rowDataOfT2.put("Airline", airline);
                rowDataOfT2.put("Sectors_Scheduled", sectors_scheduled);
                rowDataOfT2.put("Sectors_Flown", sectors_flown);
                rowDataOfT2.put("Cancellations", cancellations);
                rowDataOfT2.put("OnTimeDepartures", on_time_departures);
                rowDataOfT2.put("OnTimeArrivals", on_time_arrivals);
                rowDataOfT2.put("departures_delay", departures_delay);
                rowDataOfT2.put("arrivals_delay", arrivals_delay);
                rowDataOfT2.put("OnTimeDepartures%", on_time_d_rate);
                rowDataOfT2.put("OnTimeArrivals%", on_time_a_rate);
                rowDataOfT2.put("Cancellations%", cancellations_rate);
                rowDataOfT2.put("departures_delay%", departures_delay_rate);
                rowDataOfT2.put("arrivals_delay%", arrivals_delay_rate);
                rowDataOfT2.put("Date", date);
                rowDataOfT2.put("Year", year);
                rowDataOfT2.put("Month", month);
                // Push the data to the "Cancel_Delay" node in the database and handle any errors
                canceldelayReference.push().setValue(rowDataOfT2, (databaseError, databaseReference) -> {
                    if (databaseError != null) {
                        System.err.println("Data could not be saved: " + databaseError.getMessage());
                    }
                });
            }
            // Close the workbook and Excel file
            workbook.close();
            excelFile.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}