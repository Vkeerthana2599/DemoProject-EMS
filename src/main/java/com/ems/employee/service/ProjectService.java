package com.ems.employee.service;

import java.util.List;

import com.ems.employee.model.Project;

public interface ProjectService {

	public Project createProject(Project project);

	public List<Project> listAllProjects();

	void deleteProjectById(String id);

}
