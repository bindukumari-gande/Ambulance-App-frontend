import React,{useState} from 'react';
import './Registration.css';
function Registration(){

    const[firstName, setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[cpassword,setCPassword]=useState('');
    const[role,setRole]=useState('');
    

    
    const submitHandler = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("firstName", firstName);
        console.log("lastName:", lastName, "email:", email, "cpassword:", cpassword,"role",role );
      
        
    };
    
    






    return (
        <form onSubmit={submitHandler}>
            <div className="register">
                <h1 id="demo">Registration Form</h1>
           <br/>
        <div  class=" w-25 ">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  <input type="fname" class="form-control" value={firstName}  onChange={(e)=>{setFirstName(e.target.value)}}
  placeholder="Enter First Name"/>
        </div>

        <div class=" w-25 ">
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
  <input type="lname" class="form-control" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}
  placeholder="Enter Last Name"/>

        </div>


        <div class=" w-25 ">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}
  placeholder="Enter Email"/>
  
        </div>

        <div class=" w-25 ">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" class="form-control"  value={password}  onChange={(e)=>{setPassword(e.target.value)}}
   placeholder="Enter Password"/>

        </div>



        <div class=" w-25 ">
  <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
  <input type="password" class="form-control" value={cpassword} onChange={(e)=>{setCPassword(e.target.value) }}
  placeholder="Enter Confirm Password"/>
        </div>
        <br/>

        <select class="form-select w-25 mb-100" aria-label="Default select example">
  <option selected >Select Role</option>
  <option value="1">Admin</option>
  <option value="2">User</option>
 
   </select>

        <br/>

        <div class="btn">
        <button type="submit" class="btn btn-primary ms-auto" >Register</button>
        </div>
        </div>



</form>
    )
}

export default Registration;