package com.ems.employee.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ems.employee.model.Designation;
import com.ems.employee.model.Employee;
import com.ems.employee.repository.DesigationRepository;
import com.ems.employee.service.DesignationService;

@Service
public class DesignationServiceImpl implements DesignationService {

	@Autowired
	private DesigationRepository designationRepo;

	private static final Logger logger = LoggerFactory.getLogger(DesignationServiceImpl.class);

	@Override
	public Designation createDesignation(Designation designation) {
		Designation newDesination = designationRepo.insert(designation);
		logger.info("Service designation record created");
		return newDesination;
	}

	@Override
	public List<Designation> listAllDesignation() {
		List<Designation> designation = designationRepo.findAll();
		logger.info("Service list all designations");
		return designation;
	}

	@Override
	public Designation updateById(String id, Designation designation) {
		logger.info("Got the required field by " + id);
		try {
			Optional<Designation> desig = designationRepo.findById(id);
			if (desig.isPresent()) {
				Designation exsisted = desig.get();
				exsisted.setName(designation.getName());
				Designation update = designationRepo.save(exsisted);
				logger.info(" updated designation with ID: {}", id);
				return update;
			} else {
				logger.warn("Designation with id not found", id);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			logger.error("Error updating designation with ID: {}", id, ex);

			return null;
		}
		return designation;
	}

	@Override
	public ResponseEntity<String> deleteById(String id) {
		Optional<Designation> optionalDes = designationRepo.findById(id);
		if (optionalDes.isPresent()) {
			designationRepo.deleteById(id);
			return ResponseEntity.ok().body("Employee Deleted Successfully");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee with id " + id + " not found");
		}
	}

	@Override
	public Designation getById(String id) {
		logger.info("Got the required field");
		Optional<Designation> des= designationRepo.findById(id);
		return des.orElse(null);
	}
}