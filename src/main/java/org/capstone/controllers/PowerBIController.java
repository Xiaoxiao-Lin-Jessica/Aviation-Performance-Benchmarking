package org.capstone.controllers;


import org.capstone.service.ExportStringJSONdata;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.concurrent.CompletableFuture;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.concurrent.CompletableFuture;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PowerBIController {

    @GetMapping("/api/get-cancel-delay")
    public CompletableFuture<ResponseEntity<String>> getCancelDelay() {
        CompletableFuture<ResponseEntity<String>> future = new CompletableFuture<>();
        // Read json
        ExportStringJSONdata exporter = new ExportStringJSONdata();
        exporter.exportDataToJson((cancelDelayJson, loadFactorJson) -> {
            System.out.println("Fetch success!");
            future.complete(ResponseEntity.ok(cancelDelayJson));
        });

        return future;
    }

    @GetMapping("/api/get-load-factor")
    public CompletableFuture<ResponseEntity<String>> getLoadFactor() {
        CompletableFuture<ResponseEntity<String>> future = new CompletableFuture<>();
        // Read json
        ExportStringJSONdata exporter = new ExportStringJSONdata();
        exporter.exportDataToJson((cancelDelayJson, loadFactorJson) -> {
            System.out.println("Fetch success!");
            future.complete(ResponseEntity.ok(loadFactorJson));
        });

        return future;
    }



}