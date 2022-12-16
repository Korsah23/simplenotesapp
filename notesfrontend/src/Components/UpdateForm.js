import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";


export default function UpdateForm(){
    const { title,body,id } = useParams()
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");
    const [response, setResponse] = useState([]);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/notes/${id}/`)
        .then(res=>{
            setNewTitle(res.data.title)
            setNewBody(res.data.body)
        } )
    },[] )
   
    const navigate = useNavigate();

    function handleUpdate(e){
        
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