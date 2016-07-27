/**
 * Created by dchetian on 7/26/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

	// boilerplate constructor
	constructor(props){
		super(props);

		this.state = ({term:''});

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		// vanilla js - event.target.value
		console.log(event.target.value);

		// when using setState weneed to bind THIS
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		// vanilla js - event.target.value
		event.preventDefault();

		this.props.fetchWeather(this.state.term);

		// when using setState we need to bind THIS
		this.setState({ term: '' });
	}

	render() {
		return (
				<form className="input-group" onSubmit={this.onFormSubmit}>
					<input placeholder="Get a five-day forecast in your favorite cities"
							className="form-control"
							value={this.state.term}
							onChange={this.onInputChange} />
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Submit</button>
					</span>
				</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);