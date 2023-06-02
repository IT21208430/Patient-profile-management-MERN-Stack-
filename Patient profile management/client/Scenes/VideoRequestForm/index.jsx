import React,{useState} from 'react'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './index.css'
import axios, * as others from 'axios';

function VideoRequestForm(){
    const [FirstName,setFname] = useState(""); // initializing values for the form 
    const [LastName,setLname] = useState("");
    const [Email,setEmail] = useState("");
    const [Pid,setPid] = useState("");
    const [Purpose,setPurpose] = useState("");


    const submit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3001/form/insert', {
            FirstName:FirstName,
            LastName:LastName,
            Email:Email,
            Pid:Pid,
            Purpose:Purpose
          
        })


    }

  

      return(
         <>
         <div><Navbar/></div>
         <div className='form-body'>
         <div className="container-fluid px-1 py-5 mx-auto">
    <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Request a Video Conference</h3>
            <p className="blue-text">Just answer a few questions so that we can personalize the right experience for you.</p>
            <div className="card">
                <h5 className="text-center mb-4">Request a Video Conference</h5>
                <form className="form-card"  onSubmit={submit}>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onChange={(e)=>{setFname(e.target.value)}} /> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name"  onChange={(e)=>{setLname(e.target.value)}} /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">E -mail<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onChange={(e)=>{setEmail(e.target.value)}} /> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Patient ID<span className="text-danger"> *</span></label> <input type="text" id="pid" name="pid" placeholder="" onChange={(e)=>{setPid(e.target.value)}} /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Purpose<span className="text-danger"> *</span></label> <input type="text" id="purpose" name="purpose" placeholder="" onChange={(e)=>{setPurpose(e.target.value)}} /> </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="form-group col-sm-6"> <button type="submit"  className="btn-block btn-primary">Request Now</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

         </div>
         <div><Footer/></div>
         
         </>

      )

}

export default VideoRequestForm;