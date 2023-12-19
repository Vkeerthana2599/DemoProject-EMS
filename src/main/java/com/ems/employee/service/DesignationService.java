package com.ems.employee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.ems.employee.model.Designation;

public interface DesignationService {

	public Designation createDesignation(Designation designation);

	public List<Designation> listAllDesignation();

	public Designation updateById(String id, Designation designation);

	public ResponseEntity<String> deleteById(String id);

	public Designation getById(String id);

}
