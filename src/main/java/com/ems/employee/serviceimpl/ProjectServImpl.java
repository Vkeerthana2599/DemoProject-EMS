package com.ems.employee.serviceimpl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Service;

import com.ems.employee.model.Project;
import com.ems.employee.repository.ProjectRepository;
import com.ems.employee.service.ProjectService;

@Service
public class ProjectServImpl implements ProjectService {

	private static final Logger logger = LoggerFactory.getLogger(ProjectServImpl.class);

	@Autowired
	private ProjectRepository projectRepo;

	@Override
	public Project createProject(Project project) {
		logger.info("Service project record created");
		Project newProject = projectRepo.insert(project);
		return newProject;
	}

	@Override
	public List<Project> listAllProjects() {
		List<Project> project = projectRepo.findAll();
		logger.info("Service projects list all jobs");
		return project;
	}

	@Override
	public void deleteProjectById(String id) {
		logger.info("deleted the project field");
		projectRepo.deleteById(id);
	}

}
