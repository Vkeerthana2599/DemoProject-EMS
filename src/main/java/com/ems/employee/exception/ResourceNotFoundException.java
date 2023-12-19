package com.ems.employee.exception;

public class ResourceNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 7642429739767201842L;

	public ResourceNotFoundException() {

	}

	public ResourceNotFoundException(String message) {
		super(message);
	}
}
