import React, { Component } from 'react';

class IndividualRecipe extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: this.props.name,
			ingredients: this.props.ingredients
		}
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
	}

	handleDelete(event){
		this.props.deleteRecipe(this.props.name);
	}

	handleEdit(event){
		this.props.editRecipe(this.state.name, this.state.ingredients, this.props.name, this.props.ingredients);
		console.log('handleEdit fired');
	}

	handleNameChange(event){
		this.setState({
			name: event.target.value,
			ingredients: this.state.ingredients.toString()
		});
	}

	handleIngredientsChange(event){
		this.setState({
			name: this.state.name.toString(),
			ingredients: event.target.value
		});
	}
	render(){
		return(
			<div>
				<form>
					<label>
						Name:
						<input type = "text" value = {this.state.name} onChange = {this.handleNameChange}/>
					</label>
					<label>
						Ingredients:
						<textarea value = {this.state.ingredients} onChange = {this.handleIngredientsChange}/>
					</label>
					
					<button onClick = {this.handleDelete}>Delete Recipe</button>
					<button onClick = {this.handleEdit}>Save Recipe</button>
				</form>
			</div>
		);
	}
}

export default IndividualRecipe;