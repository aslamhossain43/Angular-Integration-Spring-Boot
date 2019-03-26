package com.renu.boot_angular.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renu.boot_angular.model.College;
import com.renu.boot_angular.repository.CollegeRepository;

@RestController
@RequestMapping(value="/college")
public class CollegeController {
@Autowired
CollegeRepository collegeRepository;

@RequestMapping(value="/add")
public ResponseEntity<?>addCollege(@RequestBody College college){
	collegeRepository.save(college);
	return ResponseEntity.ok().body("success");
}
}
