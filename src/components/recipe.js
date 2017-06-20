import React, { Component } from 'react';
import IndividualRecipe from './individualRecipe.js';

class Recipe extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			showDetails: false
		}
		this.handleEdit = this.handleEdit.bind(this);
		this.toggleDetails = this.toggleDetails.bind(this);
	}

	handleEdit(event){

	}

	toggleDetails(e){
		this.setState({
			showDetails: !this.state.showDetails
		});
	}


	render(){
		if(this.state.showDetails){
			return(
				<li>
					<a href = "#" onClick = {this.toggleDetails}>{this.props.name}
					</a>
					<IndividualRecipe ingredients = {this.props.ingredients} editRecipe = {this.props.editRecipe} 
					deleteRecipe = {this.props.deleteRecipe}
					name = {this.props.name}/>
				</li>
			);
		}else{
			return(
				<li>
					<a href = "#" onClick = {this.toggleDetails}>{this.props.name}
					</a>
				</li>
			);
		}

	}
}

export default Recipe;