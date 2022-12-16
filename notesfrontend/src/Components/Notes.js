import React, { useState,useEffect} from 'react';
import axios from 'axios';
import UpdateButton from './UpdateButton';


export default function Notes(props){
    const [notes,setNotes] = useState([])
    
console.log(props)
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/notes/")
        .then(res=>{
            setNotes(res.data)
        } )
    },[] )
    
  
    function handleDelete(id){
        axios.delete(`http://127.0.0.1:8000/notes/${id}/`)
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle any error that occurred
    console.error(error);
  });
  window.location.reload(false);
    }

    return(
        <div>
            
            { notes.map(note=>(
     <div className="card" key={note.id}>
     <div className="card-header">
        Title:{note.title}
    </div>
     <div className="card-body">
        <p className="card-text">{note.body}.</p>
        <p className="card-text">{note.timeCreatedOrUpdated}.</p>
        <UpdateButton 
        id={note.id}
        title ={note.title}
        body={note.body}
        />
        <button onClick={() => handleDelete(note.id)}>Delete</button>
     
    </div>
</div>
            )
            
            )
              
            }
        </div>
    )

}