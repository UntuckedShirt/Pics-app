// purpose of this component is to show 1 image by itself
// creating a component expects to be passed a prop of the image obj

import React from 'react'

class ImageCard extends React.Component {
    render() {
        return (
            <div>
                <img alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                />
            </div>

        );

    }

}

export default ImageCard;
