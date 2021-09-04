// To communicate list of images to the imageList
// we do that using a prop system
// use images={this.state.images} in the app file
// how to fix this error; Each child in a list should have a unique "key" prop.
// the list of items are being rendered through images child and ImageList parent
// image is mentioned multi times. we can refactor and condense that
// find image arguement. then delete it and put () and {}
// when adding ImageCard you no longer need to destructer with
// description id and url. all you need is the image.id

import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;