// Any JS in here is automatically ran for us 
console.log("hello");

// Import React library
import React from 'react';
import ImageDetail from './image_detail';

// Create a component
const ImageList = (props) => {
	
	console.log(props);
	const RenderedImages = props.images.map(image => 
		<ImageDetail key={image.Title} image={image} />
	
	);
	
	return(
	   <ul className="media-list list-group">{RenderedImages}</ul>
	);
}

// Export our component
export default ImageList;
