import React, {useState,useEffect} from 'react';
import './ambulancedetails.css';

//getting the values from the local storage
const getAmbulanceinfo=()=>{
    const data=localStorage.getItem("details");
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }
}

function Ambulancedetails(){

    const[name,setName]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
    const[address,setAddress]=useState('');
    const[number,setNumber]=useState('');

    //details array of objects
    const[details,setDetails]=useState(getAmbulanceinfo());

    //submit event of the form
    const submitHandler=(e)=>{
        e.preventDefault();
    //creating an object
    console.log(details);
     let ambulancedata={
        number,
        name,
       phoneNumber,
      address
     }
     //We need to push the details into details object
     setDetails([...details,ambulancedata]);

     //to empty the  fields  with default value after submitting
     setNumber('');
     setName('');
     setPhoneNumber('');
     setAddress('');
    }

    //delete amulance details from list
    const deleteAmbulance=(number)=>{
        console.log(number);
        const filterAmbulance=details.filter((ele,index)=>{
            return ele.number !== number;
        })
        setDetails(filterAmbulance);
    }

    //saving data in the local storage
    useEffect(()=>{
        localStorage.setItem('details', JSON.stringify(details));
    },[details])







    return(
        <div>
        <div className="demo2">
          <h1 id="demos">Ambulance Details</h1>
        </div>
        <div>
        <form onSubmit={submitHandler}>
          <div className="styling">
        <div >
            <label htmlFor="id" className="form-label">Number</label>
            <input type="text" id="number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Number" />
          </div>


          <div >
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
          </div>

          <div >
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="number" id="phoneNumber" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter Phone Number" />
          </div>

          <div >
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" id="address" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
          </div>

          <br />
          <div >
            <button type="submit" className="btn btn-primary">Add Details</button>
          </div>
          </div>
        </form>
        </div>
        <br/>
        <div className='view-container'>
            {details.length>0 &&<>
                   <table className="table-responsive">
                    <div className="table">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {details.map((ambulancedata) => (
        <tr key={ambulancedata.number}>
        <td>{ambulancedata.number}</td>
        <td>{ambulancedata.name}</td>
        <td>{ambulancedata.phoneNumber}</td>
        
        <td>{ambulancedata.address}</td>

        <td><button type="button" class="btn btn-danger" onClick={()=>deleteAmbulance(ambulancedata.number)}>Delete</button> </td>
        </tr>
      ))};
                        </tbody>
                    </div>
                   </table>
                </>}
            {details.length<1 && <div>No details are yet </div>}
         
        </div>
      </div>

      
    )
  }
  
  export default Ambulancedetails;