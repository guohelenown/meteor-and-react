// Any JS in here is automatically ran for us 
console.log("hello");

// Import React library
import React from 'react';

// Create a component
const ImageDetail = (props) => {
	return(
		<li className="media list-group-item">
		 <div className="media-left">
			<img src={props.image.Poster} />
		 </div>
		 <div className="media-body">
			<h4 className="media-heading">
			{props.image.Title}
			</h4>
			
		 </div>
		</li>
	);
}

// Export our component
export default ImageDetail;
