import React from 'react';
import {Button, Modal, Form, Col, FormGroup, ButtonToolbar, ControlLabel, FormControl} from 'react-bootstrap';     

class AddRecipe extends React.Component{
	constructor(){
		super();
		this.state = {
			show: false,
			name: '',
			ingredients: ''
		};

		this.handleAdd = this.handleAdd.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
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

	handleAdd(event){		//handle adding of recipes
		this.props.addRecipe(this.state.name, this.state.ingredients);
		this.setState({ 
			show: false,
			name: '',
			ingredients: '' 
		});
	}

	render(){
		let close = () => this.setState({ show: false });
		return (
			<div>
				<Button bsStyle = "success" onClick = {() => this.setState({ show: true})}>Add Recipe</Button>
					<Modal
			          show={this.state.show}
			          onHide={close}
			          container={this}
			          aria-labelledby="contained-modal-title"
			        >
		          <Modal.Header closeButton>
		            <Modal.Title id="contained-modal-title">Add Recipe</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
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
					</Form>
		          </Modal.Body>
		          <Modal.Footer>
		            <ButtonToolbar>
						<Button bsStyle = "danger" onClick = {close}>Close Recipe</Button>
						<Button bsStyle = "success" onClick = {this.handleAdd}>Add Recipe</Button>
					</ButtonToolbar>
		          </Modal.Footer>
		        </Modal>
			</div>
		)
	}
}

export default AddRecipe;