package com.qa.todo.business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.todo.domain.Recipe;
import com.qa.todo.persistence.TodoRepository;

@Service
public class TodoService implements ITodoService {
	
	@Autowired
	private TodoRepository todoRepository;
	
	public List<Recipe> getTodo() {
		return todoRepository.findAll();
	}

	public void deleteTodo(Long id) {
		todoRepository.deleteById(id);
		
	}

	public Recipe addTodo(Recipe todo) {
		return todoRepository.save(todo);
	}

	public Optional<Recipe> findById(long id) {
		return todoRepository.findById(id);
	}
}
