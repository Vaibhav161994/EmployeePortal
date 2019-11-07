package com.employeeportal.org.repositories;

import com.employeeportal.org.model.Employee;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by Admin on 11/6/2019.
 */
public interface EmployeeRepository extends CrudRepository<Employee,String> {
	
	Optional<Employee> findByfname(String firstname);
	
}
