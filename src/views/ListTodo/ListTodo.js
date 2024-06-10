import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo 1', title: 'a' },
            { id: 'todo 2', title: 'b' },
            { id: 'todo 3', title: 'c' }
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success('Wow so easy!')
    }
    handleOnClickDelete = (todo) => {
        let currenTodos = this.state.listTodos
        currenTodos = currenTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currenTodos
        })
        toast.success('Delete Success!')
    }
    handleOnClickEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let newListTodo = [...listTodos]
            let objIndex = newListTodo.findIndex((item => item.id === todo.id));

            newListTodo[objIndex].title = editTodo.title;

            this.setState({
                listTodos: newListTodo,
                editTodo: {}
            })
            toast.success("Update todo succeed!")
            return;
        }
        this.setState({
            editTodo: todo
        })
    }
    handleOnchangeEditTodo = (event) => {
        let newEditTodo = { ...this.state.editTodo };
        newEditTodo.title = event.target.value;
        this.setState({
            editTodo: newEditTodo
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log('test', isEmptyObj)
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleOnClickEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'save' : 'edit'
                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleOnClickDelete(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ListTodo