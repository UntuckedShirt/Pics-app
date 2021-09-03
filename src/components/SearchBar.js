import React from 'react';

    // inside of our searchBar component we created an uncontrolled form elemt
    // we will turn an uncontrlled element to a controlled element

class SearchBar extends React.Component {
    // this is to make sure text is changed on input when called
    // An HTML event can be something the browser does, 
    // or something a user does.
    //Here are some examples of HTML events:
    // An HTML web page has finished loading
    // An HTML input field was changed
    // An HTML button was clicked
    // (e) is event
    state = { term: '' };

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
    // e.preventDefault() will stop the attemot to submit itself to the browser
    // ---------------------------------------------------------------//

    // TypeError: Cannot read property 'state' of undefined is stating
    // JS for whatever reason thinks that 'this' is not equal to our searchbar class
    // and is equal is equal to undefined
    // 'this' is a refernce back to the class itself
    // the value of 'this' is equal to the left of
    // the dote(.) function that is called. You dont look at the function
    // you look at where the function is called
    // one solution would be: this.example = this.exmaple.bind(this)
    // second solution would be: to ad = (e) => function to the function
    // third solution would be: add => function directly into the onCHange
    // and invoke with ()


    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search </label>
                    
                    <input
                        type="text"
                        value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                        </div>
                </form>
            </div>
        )
    }

}

export default SearchBar