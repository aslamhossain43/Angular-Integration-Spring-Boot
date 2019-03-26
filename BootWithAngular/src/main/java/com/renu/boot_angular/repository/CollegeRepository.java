package com.renu.boot_angular.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.renu.boot_angular.model.College;


public interface CollegeRepository extends JpaRepository<College,Long>,JpaSpecificationExecutor<College> {
	College getById(Long id);
	// GET ALL
	static final String getAllColleges ="FROM College";
	@Query(getAllColleges)
	public List<College>getAllColleges();
}

