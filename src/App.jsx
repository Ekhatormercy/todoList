import './App.css'
import { useReducer, useState } from "react";
import Inputs from './Components/Inputs'




function reducer(state, action) {
  switch (action.type){
      case "addTodo":
          return [...state, {id: state.length, text: action.payload}]
     case  "editTodo":
      return state.map((e)=> {
          if(e.id === action.id){
              e.text = action.payload
              return e
          }else{
              return e
          }   

      });
      case "deleteTodo" :
          return state.filter ((e)=> e.id !== action.id);
         default:
          return state   
          
          }
        
  }

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [inputText, setInputText] = useState(" ");

  const createTodo =()=>{
      dispatch({type: "addTodo", payload: inputText})
      setInputText (" ")
  }
  const deleteTodo =(id)=>{
      dispatch({type: "deleteTodo", id : id})
  }
  const editTodo = (id, value)=>{
      dispatch({type: "editTodo", id: id, payload: value})
  }
 
  return(
    <>
  
        <div className="Box">
            <div className="Card1">
                <div className="cardholder " >
                    <div className="input" >
                        <input placeholder="Write Here.." value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
                        <button onClick={createTodo}>Add</button>


                    </div>
                    <div className="InputHolder">
                        { 
                            state.map((e)=>(
                            <Inputs key={e.id} text={e.text} id={e.id} deleteTodo={deleteTodo} editTodo={editTodo} />
                            
                             ) )
                            }
                        
                       
                       
                    </div>


                </div>
            </div>

        </div>
    
   
   </>
  )
}
export default App
