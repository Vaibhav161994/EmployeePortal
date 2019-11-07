package com.employeeportal.org;

import com.employeeportal.org.model.Employee;
import com.employeeportal.org.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class EmployeePortalApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmployeePortalApplication.class, args);
	}

	@Autowired
	EmployeeRepository repository;

	@Override
	public void run(String... strings) throws Exception {
			
			if(!repository.findByfname("Test1").isPresent()) {
				Employee emp = new Employee();
				emp.setFname("Test1");
				emp.setLname("User1");
				emp.setGender("Female");
				emp.setDob(new Date());
				emp.setDept("Testing");
	     		repository.save(emp);	
			}
			
	
        System.out.println("All Employees =>"+repository.findAll());

	}
}
