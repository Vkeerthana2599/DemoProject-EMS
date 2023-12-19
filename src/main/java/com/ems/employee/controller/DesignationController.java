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
import com.ems.employee.model.Designation;
import com.ems.employee.service.DesignationService;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class DesignationController {

	private final static Logger logger = LoggerFactory.getLogger(DesignationController.class);

	@Autowired
	private DesignationService designationService;

	@PostMapping("/saveDesignation")
	public ResponseEntity<Designation> addDesignation(@RequestBody Designation designation) {
		logger.info("Inserting Designation field");
		designationService.createDesignation(designation);
		return new ResponseEntity<Designation>(designation, HttpStatus.CREATED);
	}

	@GetMapping("/fetch")
	public ResponseEntity<List<Designation>> getAllDesignation() {
		logger.info("List all designation information available");
		List<Designation> designation = designationService.listAllDesignation();
		return new ResponseEntity<>(designation, HttpStatus.OK);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Designation> updateById(@PathVariable String id, @RequestBody Designation designation) {
		logger.info("Updating the designation information by id");
		Designation updateById = designationService.updateById(id, designation);
		return new ResponseEntity<>(updateById, HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/deleteDes/{id}")
	public ResponseEntity<String> deleteDesignationById(@PathVariable String id) {
		logger.info("Delete the designation field");
		designationService.deleteById(id);
		return new ResponseEntity<>("Designation Successfully deleted", HttpStatus.OK);
	}

	@GetMapping("/fetchById/{id}")
	public ResponseEntity<Designation> getDesignationById(@PathVariable String id) {
		logger.info("find designation by id");
		designationService.getById(id);
		return new ResponseEntity<Designation>(HttpStatus.OK);
	}

}
