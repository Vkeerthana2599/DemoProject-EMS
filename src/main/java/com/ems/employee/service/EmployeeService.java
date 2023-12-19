package com.ems.employee.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.ems.employee.model.Employee;

public interface EmployeeService {

	public Employee createEmployee(Employee employee);
	
	public Employee getEmployeeById(String id);
	
	public List<Employee> getAllEmployee();
	
	public Employee updateEmployee(Employee employee,String id);
	
	public ResponseEntity<String> deleteEmployee(String id);
	
		
	
}
