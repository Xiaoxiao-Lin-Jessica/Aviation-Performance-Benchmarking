package org.capstone.service;


import org.json.JSONObject;

public class CustomJsonFormatter {

    public static String convertToValidJson(String input) {
        // Replace '=' with ':'
        String converted = input.replace("=", ":");

        // Add double quotes around keys
        converted = converted.replaceAll("([a-zA-Z0-9_-]+):", "\"$1\":");

        // Add double quotes around string values
        converted = converted.replaceAll(":([a-zA-Z ]+),", ":\"$1\",");

        // Convert the string to a JSONObject to format it
        JSONObject jsonObject = new JSONObject(converted);
        return jsonObject.toString(4);  // 4 spaces indentation for pretty print
    }

}