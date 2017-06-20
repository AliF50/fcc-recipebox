/*TODO:
Get rid of console.logs
add an add button
add bootstrap
add comments*/

import React, { Component } from 'react';             
import logo from './logo.svg';
import './App.css';
import stockRecipes from './data/recipeObject.js';
import Recipe from './components/recipe.js';

class App extends Component {
  constructor(props){
    super(props);

    /*if(!localStorage.getItem('recipes')){ //if exists in local storage, get from there
        localStorage.setItem('recipes', JSON.stringify(stockRecipes));*/
        this.state = {
          recipes: stockRecipes
        };
    /*}else{
        this.state = {
          recipes: JSON.parse(localStorage.getItem('recipes'))
        };
    }*/
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
  }

  deleteRecipe(recipeToDelete){
    this.setState({
      recipes: this.state.recipes.filter((recipe) => {
        return recipe.name !== recipeToDelete;
      })
    });
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
  }

  editRecipe(recipeName, recipeIngredients, recipeNameBefore, recipeIngredientsBefore){
    console.log(recipeName, recipeIngredients, recipeNameBefore, recipeIngredientsBefore);
    console.log(this.state.recipes);
    let newRecipes = [];
    for(let i = 0; i < this.state.recipes.length; i++){
      if(this.state.recipes[i].name === recipeNameBefore || this.state.recipes[i].ingredients.toString() === recipeIngredientsBefore.toString()){
          newRecipes.push({name: recipeName, ingredients: recipeIngredients.split(',')});
          console.log(this.state.recipes[i].name, " ", recipeName, recipeNameBefore);
          
      }else{
          newRecipes.push({name: this.state.recipes[i].name, ingredients: this.state.recipes[i].ingredients});
          console.log('same');
      }
      console.log(newRecipes);
    }
    this.setState({
      recipes: newRecipes
    });
    console.log(this.state.recipes);
    console.log('editRecipe fired');
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.recipes.map((recipe, i) => {
            console.log(this.state.recipes);
            return <Recipe key = {i} name = {recipe.name} ingredients = {recipe.ingredients}
            deleteRecipe = {this.deleteRecipe} editRecipe = {this.editRecipe}/>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
