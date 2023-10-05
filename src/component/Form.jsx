import React, { useContext ,useEffect ,useState} from 'react'
import TodoContext from '../todoContext/TodoContext';


const Form = () => {

   const {saveTodo , edit , updatetodo } = useContext(TodoContext)

    const [text , settext] = useState("")
     

    const sumbithandle = (e) =>{
        e.preventDefault()
   
   if(edit.isedit){
    updatetodo(edit.todo.id , text)
    settext("")
   }
   else{
    saveTodo(text)
    settext("")
   }



    }

    useEffect(()=>{
      settext(edit.todo.text)
      // console.log(edit.todo.text);
    }, [edit])


  return (
   <>
    <form className="todo-app"  onSubmit={sumbithandle}>
    <div className="heading">
      <h2>To-do List</h2> <img src="./public/image/list icon.webp" alt="" />
    </div>
    <div className="row">
      <input type="text" id=" input-box" 
      placeholder="Enter your todo list" 
      onChange={(e) => settext(e.target.value)}
      value={text}
      />
      <button  > ADD </button>
    </div>
  </form>
   
   </>
  )
}

export default Form