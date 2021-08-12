package com.property.dao;

import org.springframework.data.repository.CrudRepository;

import com.property.entities.Property;
import com.property.entities.User;

public interface UserRepository extends CrudRepository<Property, Integer>{

	public void save(String name);


	

}
