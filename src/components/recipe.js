import React from 'react';
import IndividualRecipe from './individualRecipe.js';

class Recipe extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			showDetails: false
		}
		this.toggleDetails = this.toggleDetails.bind(this);
	}

	toggleDetails(e){
		this.setState({
			showDetails: !this.state.showDetails
		});
	}


	render(){
		if(this.state.showDetails){
			return(
				<div>
					<a href = "#" onClick = {this.toggleDetails}>{this.props.name}
					</a>
					<IndividualRecipe ingredients = {this.props.ingredients} editRecipe = {this.props.editRecipe} //if clicked, show the individual recipes
					deleteRecipe = {this.props.deleteRecipe}
					name = {this.props.name}
					toggleDetails = {this.toggleDetails}/>
				</div>
			);
		}else{
			return(
				<div>
					<a href = "#" onClick = {this.toggleDetails}>{this.props.name}
					</a>
				</div>
			);
		}

	}
}

export default Recipe;