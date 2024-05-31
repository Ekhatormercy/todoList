import { useReducer, useState } from "react";
import Inputs from "./Inputs"

// function reducer(state, action) {
//     switch (action, type){
//         case "addTodo":
//             return [...state, {id: state.length, text: action.payload}]
//        case  "editTodo":
//         return state.map((e)=> {
//             if(e.id === action.id){
//                 e.text = action.payload
//                 return e
//             }else{
//                 return e
//             }   

//         });
//         case "deleteTodo" :
//             return state.filter ((e)=> e.id !== action.id);
//            default:
//             return state   
            
//             }
          
//     }
    // function Todolist (){
    // const [state, dispatch] = useReducer(reducer, []);
    // const [inputText, setInputText] = useState(" ");

    // const createTodo =()=>{
    //     dispatch({type: "addTodo", payload: inputText})
    //     setInputText (" ")
    // }
    // const deleteTodo =(id)=>{
    //     dispatch({type: "deleteTodo", id : id})
    // }
    // const editTodo = (id, value)=>{
    //     dispatch({type: "editTodo", id: id, payload: value})
    // }
//     const addTodo=()=>{
//     setTodo((prev)=>[...prev, {id: todos.length, text:inputText}])
//     setInputText("")
// }

//     const deleteTodo =(id)=>{
//         const filteredArray = todos.filter((e)=> e.id !== id);
//         setTodo(filteredArray)
//     }

//     const editTodo = (id, newText)=>{
//         setTodo(
//             todos.map((todo)=> todo.map=== id ?{...todo,text:newText}: todo
//             )
//         )
//     }
    // return (
    //     <div className="Box">
    //         <div className="Card1">
    //             <div className="cardholder">
    //                 <div className="input">
    //                     <input placeholder="Write Here.." value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
    //                     <button onClick={createTodo}>Add</button>


    //                 </div>
    //                 <div className="InputHolder">
    //                     { 
    //                         todos.map((e)=>(
    //                         <Inputs key={e.id} text={e.text} id={e.id} deleteTodo={deleteTodo} editTodo={editTodo} />
                            
    //                          ) )
    //                         }
                        
    //                     {/* <Inputs />
    //                     <Inputs />
    //                     <Inputs />
    //                      */}
                       
    //                 </div>


    //             </div>
    //         </div>

    //     </div>
    // )

export default Todolist