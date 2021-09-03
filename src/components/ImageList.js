// To communicate list of images to the imageList
// we do that using a prop system
// use images={this.state.images} in the app file
// how to fix this error; Each child in a list should have a unique "key" prop.
// the list of items are being rendered through images child and ImageList parent
// image is mentioned multi times. we can refactor and condense that
// find image arguement. then delete it and put () and {}

import React from 'react'

const ImageList = props => {
    const images = props.images.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular} />
    });

    return <div>{images}</div>;

}

export default ImageList;