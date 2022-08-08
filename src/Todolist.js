import React, {Component} from "react";

class Todolist extends Component{
    constructor(props){
        super(props)
        this.state = {
            newItem:"",
            toDoList:[
                {item:'Room Cleaning',isCompleted:false},
                {item:'Physics Record Work',isCompleted:false},
                {item:'Online Meet',isCompleted:false},
            ],
        }
    }

    handleChange=(e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newToDoList = 
            {item:this.state.newItem,isCompleted:false}
        
        this.setState({
            toDoList:[...this.state.toDoList,newToDoList],
            newItem:''
        })
    }

    handleIsCompletedToggle = (e)=>{
        const target = e.target;
        const itemIndex = target.attributes.itemindex.value;
        const newToDoList = [...this.state.toDoList];
        newToDoList[itemIndex].isCompleted = target.checked
        target.checked? target.classList.add('checked'):target.classList.remove('checked')
        this.setState({
            toDoList:newToDoList
        })
    }
    handleDelete = (e) => {
        const target = e.target;
        const index = target.attributes.itemindex.value;
        const newToDoList = [...this.state.toDoList]
        newToDoList.splice(index,1)
        this.setState({
            toDoList:newToDoList
        })
    }
    render(){
        const toDoList = this.state.toDoList
        return(
            <React.Fragment>
                <h1>ToDo List</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="todo-container">
                            <ul>
                                {
                                    toDoList.map((todo,index) => {
                                        return(
                                        <li key={index}>
                                            <input type={"checkbox"} 
                                            value={todo.item} itemindex={index}
                                            onChange={this.handleIsCompletedToggle}/>
                                            <span>{todo.item}</span>
                                            <p onClick={this.handleDelete}itemindex={index}>Delete</p>
                                        </li> 
                                        )
                                    })
                                }
                            </ul>
                            <input type={'text'} name='newItem' value={this.state.newItem} placeholder='Enter New Todo' onChange={this.handleChange}/>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                
            </React.Fragment>
        )
    }
}

export default Todolist;