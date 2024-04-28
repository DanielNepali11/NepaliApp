package com.nepaliwebsite.NepaliWebsite.exception;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Object> handleIllegalArgumentException(IllegalArgumentException ex) {
        // Create a custom error response body
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.BAD_REQUEST, ex.getMessage());
        // Return ResponseEntity with the custom error response body and HTTP status code
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<String> handleConstraintViolationException(ConstraintViolationException ex) {
        // Extract the first constraint violation from the exception
        ConstraintViolation<?> violation = ex.getConstraintViolations().iterator().next();

        // Get the property path and message of the violation
        String propertyPath = violation.getPropertyPath().toString();
        String errorMessage = violation.getMessage();

        // Create a dynamic error message indicating the violated constraint
        String dynamicErrorMessage = "Validation failed for property '" + propertyPath + "': " + errorMessage;

        // Return a ResponseEntity with the dynamic error message and HTTP status code 400 (Bad Request)
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(dynamicErrorMessage);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleResourceNotFoundException(ResourceNotFoundException ex) {
        // Extract the error message from the exception
        String errorMessage = ex.getMessage();

        // Return a ResponseEntity with the error message and HTTP status code 404 (Not Found)
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }

    // Add more exception handlers as needed for different types of exceptions

    // Define a custom ErrorResponse class to represent error responses
    private static class ErrorResponse {
        private final int status;
        private final String message;

        public ErrorResponse(HttpStatus status, String message) {
            this.status = status.value();
            this.message = message;
        }

        public int getStatus() {
            return status;
        }

        public String getMessage() {
            return message;
        }
    }
}

