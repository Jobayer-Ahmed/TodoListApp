import React, { Component } from 'react';

class add_list extends Component {
	constructor() {
		super();
		this.remove = this.remove.bind(this);
	};

	remove(elem) {
		var value = elem.target.parentNode.querySelector('span').innerText;
		this.props.remove(value);
	};

	render() {
		var items = this.props.tasks.map((elem, i)=> {
			return <li key={i}><span>{elem}</span> <button onClick={this.remove}>X</button></li>
		});
		return (
			<ol>
				{items}
			</ol>
		)
	};
};

export default add_list;