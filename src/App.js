
import React, { Component } from 'react';          //Import required modules    
import './App.css';
import stockRecipes from './data/recipeObject.js';
import Recipe from './components/recipe.js';
import AddRecipe from './components/addRecipe.js';


class App extends Component { //Main Application
  constructor(props){
    super(props);

    if(!localStorage.getItem('recipes')){ //if exists in local storage, get from there
        localStorage.setItem('recipes', JSON.stringify(stockRecipes));
        this.state = {
          recipes: stockRecipes
        };
    }else{
        this.state = {
          recipes: JSON.parse(localStorage.getItem('recipes'))
        };
    }
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
  }

  deleteRecipe(recipeToDelete){ //handles delete of recipes
    this.setState({
      recipes: this.state.recipes.filter((recipe) => {
        return recipe.name !== recipeToDelete;
      })
    }, () => {
      localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
    });
  }

  editRecipe(recipeName, recipeIngredients, recipeNameBefore, recipeIngredientsBefore){
    let newRecipes = [];
    for(let i = 0; i < this.state.recipes.length; i++){
      if(this.state.recipes[i].name === recipeNameBefore || this.state.recipes[i].ingredients === recipeIngredientsBefore){ //check to see if the recipe changed
          newRecipes.push({name: recipeName, ingredients: recipeIngredients});
      }else{
          newRecipes.push({name: this.state.recipes[i].name, ingredients: this.state.recipes[i].ingredients});
      }
    }
    this.setState({
        recipes: newRecipes
        }, () => {
         localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
      });
  }

  addRecipe(recipeName, recipeIngredients){
      let newRecipes = this.state.recipes;
      newRecipes.push({name: recipeName, ingredients: recipeIngredients}); //add new recipe
      this.setState({
        recipes: newRecipes
        }, () => {
         localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
      });
  }
  componentWillUnmount(){
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes)); //store into local storage
  }

  render() {
    return (
      <div className = "recipes">
          <h1 className = "text-center">Recipes</h1>
          <p className = "text-center">Feel free to add your own and edit these recipes!</p>
          <hr />
          {
            this.state.recipes.map((recipe, i) => {
              return <Recipe key = {i} name = {recipe.name} ingredients = {recipe.ingredients}
              deleteRecipe = {this.deleteRecipe} editRecipe = {this.editRecipe}/>
          })}
        <AddRecipe addRecipe = {this.addRecipe}/>
      </div>
    );
  }
}

export default App;
