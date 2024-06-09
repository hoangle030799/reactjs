import React from "react";
import {toast} from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeAddTodo = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddNewTodo = () => {
        if (!this.state.title) {
            toast.error("Missing Title's Todo!")
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <div className="addTodo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeAddTodo(event)} />
                <button className="add" onClick={() => this.handleAddNewTodo()}>Add</button>
            </div>
        )
    }
}
export default AddTodo