package com.employeeportal.org.Controller;

import com.employeeportal.org.model.Employee;
import com.employeeportal.org.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Admin on 11/6/2019.
 */
@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class Controller {

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/list")
    public Iterable<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody Employee emp){
        employeeRepository.save(emp);
        return new ResponseEntity("Employee Added Successfully",
                HttpStatus.OK);
    }

}
