package com.qa.todo.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.todo.domain.Recipe;

@Repository
public interface TodoRepository extends JpaRepository<Recipe, Long> {
	
}
