// To communicate list of images to the imageList
// we do that using a prop system
// use images={this.state.images} in the app file


import React from 'react'

const ImageList = (props) => {
    console.log(props.images)
    return <div> ImageList</div>;

}

export default ImageList;