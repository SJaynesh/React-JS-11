import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'

export default function App() {
  return <>
    <center className='text'>
      <AppName />

      <div className="container">

        <AddTodo />


        <TodoItems title="Meeting with Students" date="25/02/2025" />
        <TodoItems title="Took a Flutter Lecture" date="26/02/2025" />
        <TodoItems title="Meeting" />


        {/* <div className="row my-row">
          <div className="col-6">Took a C Language Lecture</div>
          <div className="col-4">25/02/2025</div>
          <div className="col-2"><button type="button" className="btn btn-danger">Delete</button></div>
        </div> */}
      </div>
    </center>
  </>
}
