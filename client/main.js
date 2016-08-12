// Any JS in here is automatically ran for us 
console.log("hello");

// Import React library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';


// Create a component
class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = { images: [] };
	}
	
	componentWillMount() {
		// Great place to load data
		axios.get('http://omdbapi.com/?s=california')
			.then(response => this.setState({ images: response.data.Search }));
	}
	render() {
		console.log(this.state.images);
		return(
			<div>
				<ImageList images={this.state.images}/>
			</div>
		);
	}
}


// Render this component to the screen
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));

});
