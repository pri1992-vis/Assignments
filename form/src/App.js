import React ,{useState ,useRef} from 'react'
import './App.css';
function Form (){
const [char,setChar] =useState({
  FirstName:'',
  MiddleName:'',
  LastName:'',
  Email:'',
  Phone:'',
  Address:'',
  City:'',
  State:'',
  Zip:'',
  Country:'',
  UserName:'',
  Password:''

})
const UserNameRef=useRef(null)
const PasswordRef=useRef(null)

const handleChange =(e)=>{
  const {name,value}=e.target;
  setChar({
    ...char,[name]:value,

  })
}
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log('application submitted',char);
  UserNameRef.current.focus();
}

return(
  <>
  <form onSubmit={handleSubmit}>
  <div>
    <center>
      <h1>PLEASE FILL THIS FORM TO PROCEED FURTHER</h1>
    </center>
  </div>
  <center>
  <div>
    
    <label For='FirstName'>FirstName</label> 
    <input type='text' id='FirstName' name='FirstName' value={char.FirstName}onChange={handleChange} />

  </div>
  <div>
    <label For='MiddleName'>MiddleName</label>
    <input type='text' id='MiddleName' name='MiddleName' value={char.MiddleName}onChange={handleChange} />
    
  </div>
  <div>
    <label For='LastName'>LastName</label>
    <input type='text' id='LastName' name='LastName' value={char.LastName}onChange={handleChange} />
    
  </div>
  <div>
    <label for ='Email'>Email</label>
    <input type='text' id='Email' name='Email' value={char.Email}onChange={handleChange} />
    
  </div>
  <div>
    <label for ='Phone'>Phone</label> 
    <input type='text' id='Phone' name='Phone' value={char.Phone}onChange={handleChange} />
    
  </div>
  <div>
    <label for='Address'>Address</label> 
    <input type='text' id='Address' name='Address' value={char.Address}onChange={handleChange} />
    
  </div>
  <div>
    <label for='City'>City</label> 
    <input type='text' id='City' name='City' value={char.City}onChange={handleChange} />
    
  </div>
  <div>
    <label for ='State'>State</label> 
    <input type='text' id='State' name='State' value={char.State}onChange={handleChange} />
    
  </div>
  <div>
  
   <label for='Zip'>Zip</label> 
    <input type='text' id='Zip' name='Zip' value={char.Zip}onChange={handleChange} />
    
  </div>
  <div>
    <label for ='Country'>Country</label> 
    <input type='text' id='Country' name='Country' value={char.Country}onChange={handleChange} />
    
  </div>
  <div>
    <label for='UserName'>UserName</label>
    <input type='text' id='UserName' name='UserName' value={char.UserName}
    onChange={handleChange} ref={UserNameRef} />
    
  </div>
  <div>
    <label for='Password'>Password</label>
    <input type='text' id='Password' name='Password' value={char.Password}
    onChange={handleChange} ref={PasswordRef} />
    
  </div>
  <button type='submit'>Submit</button>
  </center>
  

  

  </form>
  <a href='./User.js'> click here </a>
  
  </>
)
};

export default Form;