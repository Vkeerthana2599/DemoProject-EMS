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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.employee.model.Employee;
import com.ems.employee.model.Project;
import com.ems.employee.service.ProjectService;

@CrossOrigin(origins = "*")
@RestController
public class ProjectController {

	private final static Logger logger = LoggerFactory.getLogger(ProjectController.class);

	@Autowired
	private ProjectService projectService;

	@PostMapping("/saveProject")
	public ResponseEntity<Project> addProject(@RequestBody Project project) {
		logger.info("Inserting new project");
		projectService.createProject(project);
		return new ResponseEntity<Project>(project, HttpStatus.CREATED);
	}	

	@GetMapping("/fetchAllProjects")
	public ResponseEntity<List<Project>> getAllProjects() {
		logger.info("List of all  available login information");
		List<Project> project = projectService.listAllProjects();
		return new ResponseEntity<>(project, HttpStatus.OK);
	}

	@DeleteMapping("/deleteproject/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id) {
		logger.info("Delete the login field");
		projectService.deleteProjectById(id);
		return new ResponseEntity<>("Project Successfully deleted", HttpStatus.OK);
	}

}
