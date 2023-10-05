import React, { useContext } from 'react'
import TodoContext from '../todoContext/TodoContext'


// import Editbtn from './Editbtn'

const Listitem = ({todo  ,edittodo}) => {
    // console.log(todo)
    
     const {deletetodo} = useContext(TodoContext) 

    return (
        <li className='todotext'>
           {todo.text}
           <button className='btn-red' onClick={() =>deletetodo(todo.id)} >Delete</button>
            <button className='btn-yellow' onClick={()=>edittodo(todo)}>Edit</button>
        </li>
    )
}

export default Listitem