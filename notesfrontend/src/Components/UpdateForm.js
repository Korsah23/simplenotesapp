import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";


export default function UpdateForm(){
    //get id and title from the link with useparams
    const { title,id } = useParams()
    
    //set state for updated title,body and response
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");
    const [response, setResponse] = useState([]);
    const navigate = useNavigate();

    //get the notes data from the api using the id
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/notes/${id}/`)
        .then(res=>{
            setNewTitle(res.data.title)
            setNewBody(res.data.body)
        } )
    },[] )
   
    
    //function to handle updates
    function handleUpdate(e){
        
        //makes a put request to backend with updated data
        axios.put(`http://127.0.0.1:8000/notes/${id}/`, {title:newTitle,body:newBody})
  .then(response => {
    console.log(response.data);
  })
  .catch(err => {
    setResponse(err.response.data.title)
    console.log(err);
  });
  navigate("/")
    }


    return (
        <>
        <p>{response}</p>
        <form onSubmit={handleUpdate}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input 
    type="text" 
    className="form-control" 
    id="exampleFormControlInput1"
     value={newTitle} 
     onChange={e => setNewTitle(e.target.value.toUpperCase())}
     />
  </div>
 
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Body</label>
    <textarea 
    className="form-control" 
    id="exampleFormControlTextarea1" 
    rows="4" value={newBody} 
    onChange={e => setNewBody(e.target.value)}
    />
    
  </div>
  
  
  <button type="submit" className="btn btn-primary">Update Notes</button>

  
</form>
</>

    );
}
