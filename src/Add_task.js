import React, { Component } from 'react';

class add_task extends Component {
	constructor() {
		super();
		this.submited = this.submited.bind(this);
	};

	submited(e) {
		e.preventDefault();
		var input = e.target.querySelector('input');
		var value = input.value;
		input.value = '';
		this.props.updateList(value);
	};

	render() {
		return (
			<form onSubmit = {this.submited}>
				<input type="text"/>
			</form>
		)
	};
}

export default add_task;