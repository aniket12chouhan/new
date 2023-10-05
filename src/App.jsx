import React, { useState } from 'react'
import Form from './component/Form'
import ListGroup from './component/ListGroup'
import { TodoProvider } from './todoContext/TodoContext'
// import { TodoProvider } from './todoContext/TodoContext'

const App = () => {

  return (
   <TodoProvider>
   <div className="container">
    <Form  />
    <ListGroup />
  </div>
   </TodoProvider>
  )
}

export default App