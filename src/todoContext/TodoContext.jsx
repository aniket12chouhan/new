import { createContext,  useState } from "react";



const TodoContext = createContext()

export const TodoProvider = ({children}) => {

    



    const [ todos ,settodos] = useState([
       
    ])

    const saveTodo = (text) =>{
   
        const  addTodo ={
       
         id : crypto.randomUUID(),
         text: text,
        }
        settodos([addTodo ,...todos])
   
      }

    const deletetodo = (id)=>{
        settodos(
          todos.filter((todo) =>{
            if(todo.id !== id){
              return 1
             }
           })
           )
           // console.log(settodos);
      }


      const [ edit , setedit ] =useState({
        todo :{},
        isedit : false, 
   
        
      }) 
   
      const edittodo = (todo) =>{
       console.log("edit done");
       setedit({
         todo : todo,
         isedit :true
       })
   
      }


      const updatetodo = (( id , text ) =>{

        console.log( id , text);
         settodos(todos.map((todo)=>{
          if(todo.id === id){
            return{
              ...todo,
              text : text,
            }
          }
          else{
            return todo
          }
         }))
      
         setedit(
          {
          todo:{},
          isedit :false,
        })
    
       })

    return (
        <TodoContext.Provider value={{todos ,deletetodo ,saveTodo ,
        edit ,updatetodo ,edittodo }}>
            {children}
        </TodoContext.Provider>
    )
} 
export default TodoContext


