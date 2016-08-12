// Any JS in here is automatically ran for us 
console.log("hello");

// Import React library
import React from 'react';

import ImageDetail from './image_detail';

const images = [
	{title: 'Pen', link: 'http://dummyimage.com/600x400'},
	{title: 'Pen1', link: 'http://dummyimage.com/600x400'},
	{title: 'Pen2', link: 'http://dummyimage.com/600x400'}
];

// Create a component
const ImageList = () => {
	
	const RenderedImages = images.map(image => 
		<ImageDetail key={image.title} image={image} />
	
	);
	
	return(
	   <ul className="media-list list-group">{RenderedImages}</ul>
	);
}

// Export our component
export default ImageList;
