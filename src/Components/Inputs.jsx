import {RiDeleteBin5Line  } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { MdSave } from 'react-icons/md';
import { useState } from 'react';



function Inputs ({text , id, deleteTodo, editTodo}){
    const [isEditing, setIsEditing]= useState(false);
    const [editedText, setEditedText]= useState(text);

    const handleEdit =()=>{
        setIsEditing(true);
    }
    const handleSave =()=>{
        editTodo(id, editedText);
        setIsEditing(false);
    }
    const checkbox =["orange", "green"]
    console.log(checkbox)
    const [newColor, setNewColor]=useState(" ")
    
        const [myColor, setMyColor]= useState (false)
    const Mercy =()=>{
        myColor? setNewColor(checkbox[0]) : setNewColor(checkbox[1])
        setMyColor(!myColor)
      
         }
//    const style= newColor
    return(

        
        <div className="item1" style={{backgroundColor: newColor}}>{isEditing?(<input style={{border: "none"}}
            type='text'  
            value={editedText}
            onChange={(e)=>
                setEditedText(e.target.value)}
                />
                ):(

        
        
        <p>{text}</p> 
    
    )}
     <input type="checkbox" onClick={Mercy} style={{marginLeft: "20px"}} />
        <div className='edit'
      onClick={isEditing ? handleSave: handleEdit} style={{marginRight: "35px"}}>
       
       {isEditing ? ( <MdSave style={{color: "white", fontSize: "35px"}}/>
       ):(
         <CiEdit style={{color: "white", fontSize: "35px"}}/>

       )}

       </div>
      
        <div className="delete" onClick={()=> deleteTodo (id)} >

       < RiDeleteBin5Line style={{color: "white", fontSize: "35px"}}/>
        </div>
       
     </div>
     
    )
}
export default Inputs;