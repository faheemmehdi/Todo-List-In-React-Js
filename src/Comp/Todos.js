import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
    return (
        <div className="container my-3">
            <h4 className="text-center">Todos List</h4>
           {props.todoList.length===0? 
           <h4>No List</h4>:
            props.todoList.map((List)=>{
                return  <Todo List={List} key={List.no} onDelete={props.onDelete}/>
            })
            }
        </div>
    )
}
