package com.qa.todo.business;

import java.util.List;
import java.util.Optional;

import com.qa.todo.domain.Recipe;

public interface ITodoService {

	List<Recipe> getTodo();

	void deleteTodo(Long id);

	Recipe addTodo(Recipe todo);

	Optional<Recipe> findById(long id);

}