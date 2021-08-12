import './App.css';
import React, { useState , useEffect} from 'react';
import Header from './Comp/Header';
import AddTodo from './Comp/AddTodo';
import Footer from './Comp/Footer';
import Todos from './Comp/Todos';
import { About } from './Comp/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todoList")===null) {
    initTodo=[];
  }else{
    initTodo= JSON.parse(localStorage.getItem("todoList"));
  }
  const onDelete=(List)=>{
     console.log('ok',List); 

     setList(todoList.filter((e)=>{
       return e!==List;
     }))
     localStorage.setItem("todoList",JSON.stringify(todoList));
    }
    const addTodo = (title,des)=>{
      console.log('add todo',title, des);
      let no;
      if(todoList.length==0){
        no = 0;
      }else{
        no = todoList[todoList.length-1].no+1;
      }
      const myTodo={
        no:no,
        title:title,
        des:des 
      }
      setList([...todoList, myTodo]);
      console.log(myTodo);
    
    }
    const [todoList, setList] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todoList",JSON.stringify(todoList));
    }, [todoList])  
  return (
    <>
    <Router>
      <Header title="Todos List" search={true} />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todoList={todoList} onDelete={onDelete}/>
            </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
