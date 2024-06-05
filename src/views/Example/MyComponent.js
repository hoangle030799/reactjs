import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
state = {
    firstName: '',
    lastName: ''
}
handleChangeFirstName = (event) => {
    this.setState({
        firstName: event.target.value
    })
}
handleChangeLastName = (event) => {
    this.setState({
        lastName: event.target.value
    })
}
handleOnClick = (event) => {
    event.preventDefault()
    console.log('Check input: ', this.state)
    
}
    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" 
                    value= {this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" 
                    value= {this.state.lastName} 
                    onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <br />
                    <input 
                    type="submit"
                    onClick={(event) => this.handleOnClick(event)}
                    />
                </form>
                <ChildComponent
                name = {'Hoàng'}
                age = {'24'}
                />
            </>
        )
    }
}


export default MyComponent;