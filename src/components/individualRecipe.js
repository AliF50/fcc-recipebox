import React, { Component } from 'react';
import {Button, ButtonToolbar, FormGroup, ControlLabel, FormControl, Form, Col} from 'react-bootstrap';

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
		this.props.toggleDetails();
	}

	handleEdit(event){
		this.props.editRecipe(this.state.name, this.state.ingredients, this.props.name, this.props.ingredients);
		this.props.toggleDetails(); //Call to hide the details
	}

	handleNameChange(event){
		this.setState({
			name: event.target.value,
			ingredients: this.state.ingredients
		});
	}

	handleIngredientsChange(event){
		this.setState({
			name: this.state.name,
			ingredients: event.target.value
		});
	}
	render(){
		return(
			<div>
				<Form horizontal>
					<FormGroup controlId = "formBasicText">
						<Col componentClass = {ControlLabel} sm = {2}>
							Name:
						</Col>
						<Col sm = {10}>
							<FormControl
								type = "text"
								value = {this.state.name}
								onChange = {this.handleNameChange}
							/>
						</Col>
					</FormGroup>

					<FormGroup controlId = "formControlsTextarea">
						<Col componentClass = {ControlLabel} sm = {2}>
							Ingredients:
						</Col>
						<Col sm = {10}>
							<FormControl
								componentClass = "textarea"
								value = {this.state.ingredients}
								onChange = {this.handleIngredientsChange}
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset = {2} sm = {10}>
							<ButtonToolbar>
								<Button bsStyle = "danger" onClick = {this.handleDelete}>Delete Recipe</Button>
								<Button bsStyle = "success" onClick = {this.handleEdit}>Save Recipe</Button>
							</ButtonToolbar>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default IndividualRecipe;