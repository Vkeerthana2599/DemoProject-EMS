package com.ems.employee.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Employee")
public class Employee {

	@Id
	private String id;

	private String name;

	private String email;

	public Long phoneNo;

	private String gender;

	private String qualification;

	private String experience;

	private String address;

	private String designation;
	
	private List<Project> project;

	public Employee(String id, String name, String email, Long phoneNo, String gender, String qualification,
			String experience, String address, String designation, List<Project> project) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phoneNo = phoneNo;
		this.gender = gender;
		this.qualification = qualification;
		this.experience = experience;
		this.address = address;
		this.designation = designation;
		this.project = project;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getDesignation() {
		return designation;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<Project> getProject() {
		return project;
	}

	public void setProject(List<Project> project) {
		this.project = project;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", email=" + email + ", phoneNo=" + phoneNo + ", gender="
				+ gender + ", qualification=" + qualification + ", experience=" + experience + ", address=" + address
				+ ", designation=" + designation + ", project="+ project +"]";
	}

	public Long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(Long phoneNo) {
		phoneNo = phoneNo;
	}

}
