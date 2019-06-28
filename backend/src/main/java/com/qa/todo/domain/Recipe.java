package com.qa.todo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Recipe {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long recipeNo;
	private String nameOfRecipe;
	private String ingredients;
	
	public Recipe() 
	{
		
	}
	
	public Recipe(Long recipeNo, String nameOfRecipe, String ingredients) 
	{
		this.recipeNo = recipeNo;
		this.nameOfRecipe = nameOfRecipe;
		this.ingredients = ingredients;
	}
	
	public Long getRecipeNo() {
		return recipeNo;
	}

	public void setRecipeNo(Long recipeNo) {
		this.recipeNo = recipeNo;
	}

	public String getNameOfRecipe() {
		return nameOfRecipe;
	}

	public void setNameOfRecipe(String nameOfRecipe) {
		this.nameOfRecipe = nameOfRecipe;
	}
	
	public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	@Override
	public String toString() {
		return "[Recipe No.: " + recipeNo + ", Name of Recipe:" + nameOfRecipe + ", Ingredients:" + ingredients + "]";
	}
}
