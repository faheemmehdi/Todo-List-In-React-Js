import React from 'react'

export default function Todo({List,onDelete}) {
    return (
        <div >
            <h4>Title: {List.title}</h4>
            <h4>Description: {List.des}</h4>
            <button className="btn btn-danger" onClick={ ()=>{onDelete(List)}}>Delete</button>
            <hr/>
        </div>
    )
}
