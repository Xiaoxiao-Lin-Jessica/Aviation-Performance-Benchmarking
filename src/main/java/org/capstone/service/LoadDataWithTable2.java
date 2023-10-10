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
    private final String CANCEL_DELAY = "B";
    private final DatabaseReference databaseReference;

    public LoadDataWithTable2() {

        databaseReference = FirebaseDatabase.getInstance().getReference();
    }

    public void loadExcel2ToFirebase(String excelFilePath) {
        try {
            FileInputStream excelFile = new FileInputStream(excelFilePath);
            Workbook workbook = new XSSFWorkbook(excelFile);
            Sheet sheet = workbook.getSheetAt(0);
            DatabaseReference canceldelayReference = databaseReference.child(CANCEL_DELAY);
//            int lastRowIndex = sheet.getLastRowNum();
//            int currentRowNum = 1;
//
//            while (currentRowNum <= lastRowIndex) {
//                Row row = sheet.getRow(currentRowNum);


            for (Row row : sheet) {
                if (row.getRowNum() == 0) {
                    continue;
                }
//                if (row.getRowNum() == lastRowIndex) {
//                    break;
//                }
//                if (isCellValueInvalid(row.getCell(11)) || isCellValueInvalid(row.getCell(12)) ||
//                        isCellValueInvalid(row.getCell(14)) || isCellValueInvalid(row.getCell(15))) {
//                    currentRowNum++;
//                    continue;
//                }
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

                canceldelayReference.push().setValue(rowDataOfT2, (databaseError, databaseReference) -> {
                    if (databaseError != null) {
                        System.err.println("Data could not be saved: " + databaseError.getMessage());
                    }
                });
//                currentRowNum++;
            }
            workbook.close();
            excelFile.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
//    private boolean isCellValueInvalid(Cell cell) {
//        return cell != null && (cell.getCellType() == CellType.STRING) &&
//                ("NA".equalsIgnoreCase(cell.getStringCellValue()) || "#VALUE!".equalsIgnoreCase(cell.getStringCellValue()));
//    }
}