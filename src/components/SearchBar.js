import React from 'react';

class SearchBar extends React.Component {
    // this is to make sure text is changed on input when called
    // An HTML event can be something the browser does, 
    // or something a user does.
    //Here are some examples of HTML events:
    // An HTML web page has finished loading
    // An HTML input field was changed
    // An HTML button was clicked
    // (e) is event

    onInputChange(e) {
        console.log(e.target.value)

    }
// ---------------------------------------------------------------//
    // The click() method simulates a mouse-click on an element.
    // This method can be used to execute a click on an element 
    // as if the user manually clicked on it.

    // onInputClick() {
    //     console.log("input was clicked")
    // }
    // onClick={this.onInputClick}
// ---------------------------------------------------------------//
    // below, onInputChange is a callback function
    // do not put a set of () at the end. If you do that means 
    // onInputChange will be auto called when component is rendered
    // we dont want it renederd, we want it called at some point in the future
    // leaving () of leaves a reference to the input element to be called
    // in the future
    // onChange must be called which is the property name 
    // the name of the callback doesnt matter
// ---------------------------------------------------------------//
    
    // below in the onChange single line of code. The arrow function 
    // reperents the same thing as prior which is this.onInputChange
    // onChange={(e) => (e.target.value)}

    render() {
        return(
            <div className="ui segment">
                <form className=" ui form">
                    <div className="field">
                        <label>Image Search </label>
                    </div>
                    
                    <input type="text"
                        
                        onChange={this.onInputChange} />
                </form>
            </div>
        )
    }

}

export default SearchBar