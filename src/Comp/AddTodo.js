
import React, { useState } from 'react';


export const  AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const submit = (e)=>{
        e.preventDefault(); //page no reload
        if(!title || !des){
            alert('title on des empty')
        }else{
            addTodo(title,des);
            setTitle('');
            setDes('');
        }
    }
    return (
        <div className="container">
            <h3>Add Todo list</h3>
            <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="title">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"  placeholder="title"/>
            </div>
            <div className="form-group">
                <label htmlFor="des">Todo des</label>
                <input type="text" value={des} onChange={(e)=>{setDes(e.target.value)}}  className="form-control" id="des" placeholder="des"/>
            </div>
            <button type="submit" className="btn btn-primary my-3">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo;
