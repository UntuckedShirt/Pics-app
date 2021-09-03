// components folder was created and diffrent compnents
// will be housed here.
// remeber when refactoring to a class based ocmponent
// semi colon at end should be removed

import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// you call axios by using axios.get
// the get function takes 2 seperate function
// the first is the address we wanna make the get request to
// the second is going to be an obj that hasa bunch of options
// to customixe this request
// make sure when using the second function is capitalzied for Authorization
// and for the D in ID
// ---------------------------------------------------------------//
// When making a reuest to endpoint we hae to make a query param
// this query is created by adding params above headers
// params specifies this by adding query string praramts and giving it a request
// we want to set query equal to term passed into the onSearchSubmit => 
// ---------------------------------------------------------------//
// whenever we make a request with axios it creates a promise
// a promise is an object thatll give notification when completed
// we chain a .then is called when a passed a fucntion
// second is using async keyword but putting it infront
// of the function name. It allows us to use async await syntax in this function
// async await is new and shorter
// ---------------------------------------------------------------//

class App extends React.Component { 
    state = { images: [] }
        onSeachSubmit = async (term) => {
            const response = await axios
            .get('/search/photos', {
            params: { query: term },
            
       
       });
        this.setState({ images: response.data.results });
    }


    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSeachSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
    
}

export default App