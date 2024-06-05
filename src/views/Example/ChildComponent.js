import React from "react";
class ChildComponent extends React.Component {
state = {
    firstName: '',
    lastName: ''
}
    render() {
        console.log('Check props: ', this.props)
        let {name, age} = this.props
        return (
            <>
               <div>ChildComponent {name} - {age}</div>
            </>
        )
    }
}

export default ChildComponent;