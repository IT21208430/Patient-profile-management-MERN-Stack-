import React, { useState,useRef,useEffect } from "react";
import './registration.css';
import Navbar from "../../components/navbar";
import Footer from '../../components/footer';
// import axios from 'axios';
// import _debounce from "lodash/debounce";

//import { Link } from "react-router-dom";
//import {useAlert } from 'react-alert'
//import { useNavigate } from "react-router-dom";
function Registration() {

  const formRef = useRef(null);
  const [FirstName, setFname] = useState("");
  const [LastName, setLname] = useState("");
  const [Nic, setNic] = useState("");
  const [EmailAddress, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Gender, setGender] = useState("");
  const [Dob, setDob] = useState("");
  const [GuardianName, setGname] = useState("");
  const [Password, setPassword] = useState("");
  const[City,setCity]=useState("");
  const[error,setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FirstName: FirstName,
        LastName: LastName,
        Nic: Nic,
        EmailAddress: EmailAddress,
        Address: Address,
        Gender: Gender,
        City: City,
        Dob: Dob,
        GuardianName: GuardianName,
        Password: Password
      })
    })
    .then(response => {
      if (response.ok) {
        alert('Registration successful');
        window.location.href = 'http://localhost:3000/profile+login';
      } else {
        return response.json().then(data => {
          formRef.current.reset()
          throw new Error(data.message);
        });
      }
    })
    .catch(error => {
      setError(error.message);
    });
};






    return(
        <>
  <div id='main'>
        <div><Navbar/></div>
     
            <hr style={{height:'150px'}}></hr>
            {error && <div className="alert alert-danger">{error}</div>}
            <form id="registration"  ref={formRef}  onSubmit={handleSubmit} >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4" style={{backgroundColor:'#3fbbc0'}}>
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block" style={{backgroundColor:'white'}}>

                <img src="assets/img/logoooo.png" style={{marginTop:'150px'}}/>
              
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase"><marquee direction="right"> Patient Registration Form </marquee> </h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" name="fname" className="form-control form-control-lg" onChange={(e)=>{setFname(e.target.value);}} required/>
                      <label className="form-label" htmlFor="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" name="lname"   className="form-control form-control-lg" onChange={(e)=>{setLname(e.target.value);}}   required/>
                      <label className="form-label" htmlFor="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" name="nic" className="form-control form-control-lg" onChange={(e)=>{setNic(e.target.value);}}   required/>
                      <label className="form-label"  htmlFor="form3Example1m1">National ID</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n1" name="email"   className="form-control form-control-lg" onChange={(e)=>{setEmail(e.target.value);}}   required />
                      <label className="form-label" htmlFor="form3Example1n1">E - mail</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" name="address"   className="form-control form-control-lg"onChange={(e)=>{setAddress(e.target.value);}}  required />
                  <label className="form-label" htmlFor="form3Example8">Address</label>
                </div>

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="female" onChange={(e)=>{setGender(e.target.value);}}   required/>
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="male" onChange={(e)=>{setGender(e.target.value);}}   required />
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="other" onChange={(e)=>{setGender(e.target.value);}}  required />
                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                    </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">

                          <select className="select" name="city" style={{backgroundColor:'darkblue',color:'white'}} onChange={(e)=>{setCity(e.target.value);}}  required>
                            <option value="city">city</option>
                            <option value="colombo">colombo</option>
                            <option value="Mathara">Mathara</option>
                            <option value="Anuradhapura">Anuradhapura</option>
                          </select>

                        </div>
                      </div>

                <div className="form-outline mb-4">
                  <input type="date" id="form3Example9" className="form-control form-control-lg"  onChange={(e)=>{setDob(e.target.value);}}  required/>
                  <label className="form-label" htmlFor="form3Example9">DOB</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" onChange={(e)=>{setGname(e.target.value);}} required />
                  <label className="form-label" htmlFor="form3Example99">Guardian name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example91" className="form-control form-control-lg" onChange={(e)=>{setPassword(e.target.value);}} required />
                  <label className="form-label" htmlFor="form3Example91">password</label>
                </div>


                <div className="d-flex justify-content-end pt-3">
                  <button type="submit"  style={{width:'500px',backgroundColor:'darkblue', color:'white'}}>Register</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
  </div>
  
<div>
<Footer/>
</div>
       
        
        </>

    )

}

export default Registration;