package com.ems.employee.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.employee.model.Employee;
import com.ems.employee.service.EmployeeService;

@RestController
@CrossOrigin(origins = "*")
public class EmployeeController {

	private final static Logger logger = LoggerFactory.getLogger(EmployeeController.class);

	@Autowired
	private EmployeeService employeeService;

	@PostMapping("/saveemployee")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
		logger.info("Inserting new employee");
		employeeService.createEmployee(employee);
		return new ResponseEntity<Employee>(employee, HttpStatus.CREATED);
	}

	@GetMapping("/fetchemploye/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable String id) {
		logger.info("Getting the employee by Id: " + id);
		Employee emp = employeeService.getEmployeeById(id);
		return new ResponseEntity<>(emp, HttpStatus.OK);
	}

	@GetMapping("/fetchallemployees")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Employee>> getAllEmployee() {
		logger.info("List of all  available employee information");
		List<Employee> emp = employeeService.getAllEmployee();
		System.out.println(emp);
		return new ResponseEntity<>(emp, HttpStatus.OK);
	}

	@PutMapping("/updateemployee/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@RequestBody Employee employee, @PathVariable String id) {
		logger.info("Updating the required information");

		Employee update = employeeService.updateEmployee(employee, id);
		if (update != null) {
			return new ResponseEntity<>(employee, HttpStatus.ACCEPTED);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteemployee/{id}")
	public ResponseEntity<String> deleteEmployeeById(@PathVariable String id) {
		logger.info("Delete the employee field");
		employeeService.deleteEmployee(id);
		return new ResponseEntity<>("employee deleted Successfully", HttpStatus.OK);
	}
}
