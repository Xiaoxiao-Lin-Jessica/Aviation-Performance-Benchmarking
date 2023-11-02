package org.capstone.controllers;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.capstone.service.CustomJsonFormatter;
import org.capstone.service.ExportStringJSONdata;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.nio.file.Files;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.FileOutputStream;
import com.fasterxml.jackson.core.type.TypeReference;


@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PowerBIController {

        // Correct the string to json string and save it to json file
        @GetMapping("/api/get-cancel-delay-json")
        public CompletableFuture<String> getCancelDelayJson() {
            CompletableFuture<String> future = new CompletableFuture<>();

            // Read json
            ExportStringJSONdata exporter = new ExportStringJSONdata();
            exporter.exportDataToJson((cancelDelayJson, loadFactorJson) -> {
                System.out.println("Fetch success!");

                // Use the CustomJsonFormatter to convert the content to valid JSON format
                String validJson = CustomJsonFormatter.convertToValidJson(cancelDelayJson);

                try {
                    // Define the path where you want to save the file
                    String filePath = "src/main/resources/static/cancelDelayData.json";  // Replace with your desired path

                    // Save the formatted JSON to a local file
                    Files.write(Paths.get(filePath), validJson.getBytes());

                    future.complete("File saved successfully at: " + filePath);
                } catch (Exception e) {
                    e.printStackTrace();
                    future.completeExceptionally(e);
                }
            });

            return future;
        }


    // Correct the string to json string and save it to Excel file
    @GetMapping("/api/get-cancel-delay-excel")
    public CompletableFuture<String> getCancelDelayExcel() {
        CompletableFuture<String> future = new CompletableFuture<>();

        // Read json
        ExportStringJSONdata exporter = new ExportStringJSONdata();
        exporter.exportDataToJson((cancelDelayJson, loadFactorJson) -> {
            System.out.println("Fetch success!");

            // Use the CustomJsonFormatter to convert the content to valid JSON format
            String validJson = CustomJsonFormatter.convertToValidJson(cancelDelayJson);
            System.out.println("validJson");

            try {
                // Convert JSON string to Map
//                List<Map<String, Object>> dataList = new ObjectMapper().readValue(validJson, new TypeReference<List<Map<String, Object>>>() {});
                // Convert JSON string to Map
                Map<String, Map<String, Object>> outerMap = new ObjectMapper().readValue(validJson, new TypeReference<Map<String, Map<String, Object>>>() {});

                // Flatten the structure to a list
                List<Map<String, Object>> dataList = new ArrayList<>(outerMap.values());
                System.out.println("Converted JSON to List<Map<String, Object>>");

                // Create a new Excel workbook
                Workbook workbook = new XSSFWorkbook();

                // Initialize sheet and column counters
                int sheetNumber = 1;
                Sheet sheet = workbook.createSheet("cancelDelayData" + sheetNumber);
                int colNum = 0;

                // Write header row
                Row headerRow = sheet.createRow(0);
                if (!dataList.isEmpty()) {
                    for (String key : dataList.get(0).keySet()) {
                        if (colNum >= 16384) {
                            sheetNumber++;
                            sheet = workbook.createSheet("cancelDelayData" + sheetNumber);
                            headerRow = sheet.createRow(0);
                            colNum = 0;
                        }
                        Cell cell = headerRow.createCell(colNum++);
                        cell.setCellValue(key);
                    }
                }

                // Write data rows
                int rowNum = 1;
                for (Map<String, Object> data : dataList) {
                    Row row = sheet.createRow(rowNum++);
                    colNum = 0;
                    for (Object value : data.values()) {
                        if (colNum >= 16384) {
                            rowNum = 1; // Reset row number for new sheet
                            sheetNumber++;
                            sheet = workbook.createSheet("cancelDelayData" + sheetNumber);
                            row = sheet.createRow(rowNum++);
                            colNum = 0;
                        }
                        Cell cell = row.createCell(colNum++);
                        if (value instanceof Number) {
                            cell.setCellValue(((Number) value).doubleValue());
                        } else {
                            cell.setCellValue(String.valueOf(value));
                        }
                    }
                }

                // Define the path where you want to save the Excel file
                String filePath = "src/main/resources/static/cancelDelayData.xlsx";

                // Save the Excel workbook to a local file
                try (FileOutputStream outputStream = new FileOutputStream(filePath)) {
                    workbook.write(outputStream);
                }

                future.complete("Excel file saved successfully at: " + filePath);
            } catch (Exception e) {
                System.err.println("Error occurred while processing data and saving to Excel " + e);
                future.completeExceptionally(e);
            }
        });

        return future;
    }

    // Correct the string to json string and save it to Excel file
    @GetMapping("/api/get-load-factor-excel")
    public CompletableFuture<String> getLoadFactorExcel() {
        CompletableFuture<String> future = new CompletableFuture<>();

        // Read json
        ExportStringJSONdata exporter = new ExportStringJSONdata();
        exporter.exportDataToJson((cancelDelayJson, loadFactorJson) -> {
            System.out.println("Fetch success!");

            // Use the CustomJsonFormatter to convert the content to valid JSON format
            String validJson = CustomJsonFormatter.convertToValidJson(loadFactorJson);
            System.out.println("validJson");

            try {
                // Convert JSON string to Map
//                List<Map<String, Object>> dataList = new ObjectMapper().readValue(validJson, new TypeReference<List<Map<String, Object>>>() {});
                // Convert JSON string to Map
                Map<String, Map<String, Object>> outerMap = new ObjectMapper().readValue(validJson, new TypeReference<Map<String, Map<String, Object>>>() {});

                // Flatten the structure to a list
                List<Map<String, Object>> dataList = new ArrayList<>(outerMap.values());
                System.out.println("Converted JSON to List<Map<String, Object>>");

                // Create a new Excel workbook
                Workbook workbook = new XSSFWorkbook();

                // Initialize sheet and column counters
                int sheetNumber = 1;
                Sheet sheet = workbook.createSheet("loadFactorData" + sheetNumber);
                int colNum = 0;

                // Write header row
                Row headerRow = sheet.createRow(0);
                if (!dataList.isEmpty()) {
                    for (String key : dataList.get(0).keySet()) {
                        if (colNum >= 16384) {
                            sheetNumber++;
                            sheet = workbook.createSheet("loadFactorData" + sheetNumber);
                            headerRow = sheet.createRow(0);
                            colNum = 0;
                        }
                        Cell cell = headerRow.createCell(colNum++);
                        cell.setCellValue(key);
                    }
                }

                // Write data rows
                int rowNum = 1;
                for (Map<String, Object> data : dataList) {
                    Row row = sheet.createRow(rowNum++);
                    colNum = 0;
                    for (Object value : data.values()) {
                        if (colNum >= 16384) {
                            rowNum = 1; // Reset row number for new sheet
                            sheetNumber++;
                            sheet = workbook.createSheet("loadFactorData" + sheetNumber);
                            row = sheet.createRow(rowNum++);
                            colNum = 0;
                        }
                        Cell cell = row.createCell(colNum++);
                        if (value instanceof Number) {
                            cell.setCellValue(((Number) value).doubleValue());
                        } else {
                            cell.setCellValue(String.valueOf(value));
                        }
                    }
                }

                // Define the path where you want to save the Excel file
                String filePath = "src/main/resources/static/loadFactorData.xlsx";

                // Save the Excel workbook to a local file
                try (FileOutputStream outputStream = new FileOutputStream(filePath)) {
                    workbook.write(outputStream);
                }

                future.complete("Excel file saved successfully at: " + filePath);
            } catch (Exception e) {
                System.err.println("Error occurred while processing data and saving to Excel " + e);
                future.completeExceptionally(e);
            }
        });

        return future;
    }

    @GetMapping("/api/get-data")
    public CompletableFuture<ResponseEntity<byte[]>> getData() {
        CompletableFuture<ResponseEntity<byte[]>> future = new CompletableFuture<>();

        try {
            // Read the content of the file "data.json"
            String content = new String(Files.readAllBytes(new ClassPathResource("static/cancelDelay.json").getFile().toPath()));

            // Use the CustomJsonFormatter to convert the content to valid JSON format
            String validJson = CustomJsonFormatter.convertToValidJson(content);

            byte[] jsonData = validJson.getBytes();

            future.complete(ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .header("Content-Disposition", "attachment; filename=cancelDelay.json")
                    .body(jsonData));
        } catch (Exception e) {
            e.printStackTrace();
            future.complete(ResponseEntity.badRequest().body(("Error processing the file: " + e.getMessage()).getBytes()));
        }

        return future;
    }





}