import React,{useState ,useRef} from "react";

function Credentials(){
    const [user,setUser]=useState({
        UserName:'',
        Password:''
    });
    const UserNameRef=useRef(null)
const PasswordRef=useRef(null)

    const handleChange=(e)=>{
        const {name,value}=e.target;
  setUser({
    ...user,[name]:value,
    }
  )
return(
    <>
    <div>
    <label for='UserName'>UserName</label>
    <input type='text' id='UserName' name='UserName' value={user.UserName}
    onChange={handleChange} ref={UserNameRef} />
    
  </div>
  <div>
    <label for='Password'>Password</label>
    <input type='text' id='Password' name='Password' value={user.Password}
    onChange={handleChange} ref={PasswordRef} />
    
  </div>
  <button type='submit'>Submit</button>
  </>
)
}
}
export default Credentials;