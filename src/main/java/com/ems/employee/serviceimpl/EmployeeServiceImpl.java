package com.ems.employee.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ems.employee.exception.ResourceNotFoundException;
import com.ems.employee.model.Designation;
import com.ems.employee.model.Employee;
import com.ems.employee.model.Project;
import com.ems.employee.repository.DesigationRepository;
import com.ems.employee.repository.EmployeeRepository;
import com.ems.employee.repository.ProjectRepository;
import com.ems.employee.service.EmployeeService;
import com.ems.employee.service.ProjectService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private static final Logger logger = LoggerFactory.getLogger(EmployeeServiceImpl.class);

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private ProjectService projectService;

	@Override
	public Employee createEmployee(Employee employee) {
		logger.info("Service new record created");
		Employee newEmployee = employeeRepository.insert(employee);
		return newEmployee;
	}

	@Override
	public Employee getEmployeeById(String id) {
		logger.info("Got the required field");
		Optional<Employee> employee = employeeRepository.findById(id);
		return employee.orElseThrow(() -> new ResourceNotFoundException("Employee not found with id : " + id));
	}

	@Override
	public List<Employee> getAllEmployee() {
		logger.info("Service list all jobs");
		List<Employee> list = employeeRepository.findAll();
		return list;
	}

	@Override
	public Employee updateEmployee(Employee employee, String id) {
		Optional<Employee> optionalEmployee = employeeRepository.findById(id);
		logger.info("Service list all jobs");

		if (optionalEmployee.isPresent()) {
			Employee updateEmployee = optionalEmployee.get();

			updateEmployee.setName(employee.getName());
			updateEmployee.setEmail(employee.getEmail());
			updateEmployee.setPhoneNo(employee.getPhoneNo());
			updateEmployee.setQualification(employee.getQualification());
			updateEmployee.setExperience(employee.getExperience());
			updateEmployee.setDesignation(employee.getDesignation());
			updateEmployee.setAddress(employee.getAddress());
			updateEmployee.setGender(employee.getGender());
			List<Project> project = employee.getProject();
			if (project != null) {
				Optional<Project> optionalProject = projectRepository.findById(id);
				if (optionalProject.isPresent()) {
					updateEmployee.setProject(project);
				} else {
					throw new ResourceNotFoundException("Project not found");
				}

			}
		}
		return employeeRepository.save(employee);
	}

	@Override
	public ResponseEntity<String> deleteEmployee(String id) {
		Optional<Employee> optionalEmployee = employeeRepository.findById(id);
		if (optionalEmployee.isPresent()) {
			employeeRepository.deleteById(id);
			return ResponseEntity.ok().body("Employee Deleted Successfully");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee with id " + id + " not found");
		}
	}

}
