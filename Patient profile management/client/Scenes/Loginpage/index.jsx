import React, { useState } from 'react'
import './index.css'//
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios';
import ProfilePage from '../ProfilePage';
// import { login } from '../../api/auth';

function Loginpage (){
    // const [EmailAddress, setEmailAddress] = useState("");
    // const [Password, setPassword] = useState("");
    // const history = useNavigate();
  
    // function handleSubmit(e) {
    //   e.preventDefault();
  
    //   console.log(EmailAddress,Password);
    //   fetch("http://localhost:3001/login-user", {
    //     method: "POST",
    //     crossDomain: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify({
    //       EmailAddress,
    //       Password,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.status == "ok") {
    //         alert("login successful");
    //         window.location.href('http://localhost:3000/ProfilePage/${EmailAddress}');
  
    //       }
    //     });
    // }

    const [EmailAddress, setEmailAddress] = useState('');
    const [Password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    const [valid, setValid] = useState(false);
  
    const handleSubmit = e => {
      e.preventDefault();
  
      axios.post('http://localhost:3001/login-user', { EmailAddress,Password })
        .then(res => {
          setLoggedIn(true);
          setProfile(res.data);
          alert('login successfull !!');
        })
        .catch(err => {
          setError(err.response.data.message);
          alert('Invalid email or password!');
        });


        

        if (!EmailAddress || !Password) {
            alert('Please fill in all fields');
            return;
          }
      
          if (!isValidEmail(EmailAddress)) {
            alert('Please enter a valid email address');
            return;
          }
    };


      const isValidEmail = (email) => {
        // Email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);

      };
  
    //   const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/;
    // const isValid = regex.test(Password);
    // setValid(isValid);


    return (
        <>
        {loggedIn ? (
        <ProfilePage profile={profile} />
      ) : (
            <div className="limiter" id="login">
                <div className="container-login100"
                    style={{ "backgroundImage": "url(assets/img/slide/slide-1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-5 col-md-offset-1">
                                <div className="login_topimg">
                                </div>
                                <div className="wrap-login100">
                                    <form className="login100-form validate-form" onSubmit={handleSubmit}> <span className="login100-form-title "> Login </span>
                                        <span className="login100-form-subtitle m-b-16"> to your account </span>
                                        <div className="wrap-input100 validate-input m-b-16"
                                            data-validate="Valid email is required: ex@abc.xyz"> <input className="input100" onChange={(e) => setEmailAddress(e.target.value)}
                                            required  type="text" name="Username"  placeholder="E-mail" />
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100"> <span className="glyphicon glyphicon-user"></span> </span>
                                        </div>
                                        <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                            <input className="input100"  onChange={(e) => setPassword(e.target.value)}
            minLength='6'
            required type="password"   name="pass" placeholder="Password" />
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100"> <span className="glyphicon glyphicon-lock"></span> </span>
                                        </div>
                                        <div className="flex-sb-m w-full p-b-30">
                                            <div>
                                                <a href="#" className="txt1">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="container-login100-form-btn p-t-25">
                            
                                            <button className="login100-form-btn" type='submit'> Login </button> </div>
                                    </form>
                                      <p>Don't you have a account ?</p>
                                    <div><Link to={'/RegistrationPage'}>  <button className="login100-form-btn" type='submit'> Register now </button></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      )}
        </>
    );
}

export default Loginpage