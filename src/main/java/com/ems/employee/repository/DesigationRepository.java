package com.ems.employee.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ems.employee.model.Designation;

@Repository
public interface DesigationRepository extends MongoRepository<Designation, String> {

}
