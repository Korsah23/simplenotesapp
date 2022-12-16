import {Link} from "react-router-dom";

export default function UpdateButton(props) {
  return (
    
    <Link to ={`update/${props.title}/${props.id}`}>
      <button>
        Update
        </button>
        </Link>
   

        
 );
}
