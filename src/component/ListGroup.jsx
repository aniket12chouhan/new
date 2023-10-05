import React, { useContext } from 'react'
import Listitem from './Listitem'
import TodoContext from '../todoContext/TodoContext'

const ListGroup = () => {
  
    const {todos ,edittodo} = useContext(TodoContext)

    return (
        <ul id="list-container">
{
    todos.map((todo ,id ) =>(
        <Listitem key={id} todo={todo}  edittodo={edittodo}/>
    ))
}
            

        </ul>
    )
}

export default ListGroup