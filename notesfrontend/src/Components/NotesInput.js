import React, {useState} from 'react';

import axios from 'axios';
import Notes from './Notes';



export default function NotesInput(){
    //set up states
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [response,setResponse] = useState([]);
    
  
    const handleSubmit = e => {
       
        //make a post request to api
        axios.post('http://127.0.0.1:8000/notes/', { title, body })
          .then(res => {
            // Handle the response data
            setResponse(res.statusText)
           // console.log(res)
           
          })
          .catch(err => {
            setResponse(err.response.data.title)
            // Handle any error that occurred
          });
          
      };



    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <p style={{color:"red"}}>{response}</p>
          <label>
            Title:
            <input
              type="text"
              name="title"
              className='form-control'
              value={title}
              onChange={e => setTitle(e.target.value.toUpperCase())}
            />
          </label>
          </div>
          <div className='form-group'>
          <label>
            Body:
            <textarea
              name="body"
              className='form-control'
              value={body}
              onChange={e => setBody(e.target.value)}
            />
          </label>
          
          <button className="btn btn-primary" type="submit">Save Note</button>
          </div>
        </form>

        <Notes/>


        </div>
      );

}



 
 
 
