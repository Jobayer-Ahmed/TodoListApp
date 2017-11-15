import React, { Component } from 'react';
import Add_task from './Add_task';
import Add_list from './Add_list';
class Todo extends Component {
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    };

    updateList(text){
        var updatedTask = this.state.tasks;
        updatedTask.unshift(text);
        this.setState({tasks: updatedTask});
        this.updateLocalStorage(updatedTask);
    };

    removeTask(text) {
        var updatedTask = this.state.tasks;
        updatedTask.splice(updatedTask.indexOf(text), 1);
        this.setState({tasks: updatedTask});
        this.updateLocalStorage(updatedTask);
    };

    updateLocalStorage(updatedTask) {
        console.log("Save");
        localStorage.setItem('storedTasks', JSON.stringify(updatedTask));
    }

    render() {
        return (
            <div>
                <h1>Todo List App</h1>
                <Add_task updateList={this.updateList} />
                <Add_list tasks={this.state.tasks} remove={this.removeTask} />
            </div>
        );
    };
};

export default Todo;