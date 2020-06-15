import React, { Component } from "react";

export default class Accordion extends Component {
	componentDidMount() {
		this._handleClick();
	}

	_handleClick = () => {
		const acc = this._acc.children;
		for (let i = 0; i < acc.length; i++) {
			let a = acc[i];
			a.onclick = () => {
				a.classList.toggle("is-active");
			};
		}
	};

	render() {
		return (
			<div ref={(a) => (this._acc = a)} onClick={this._handleClick}>
				{this.props.children}
			</div>
		);
	}
}
