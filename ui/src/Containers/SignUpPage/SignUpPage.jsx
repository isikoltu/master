import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../Style/Containers/SignUpPage.css"
import googlelogo from "../../Assets/icons8-google-48.png"
import applelogo from "../../Assets/png-apple-logo-9711 1.png"


function SignUpPage() {

  const [inputValue, setInputValue] = useState({
      email:"",
      password:"",
    });
    const [tempEmail, setTempEmail]=useState("");
    const [tempPassword, setTempPassword]=useState("");

  console.log("input",inputValue);
  console.log("email",tempEmail);
  console.log("password",tempPassword);
  const handleEmail=(e)=>{
    setTempEmail(e.target.value);
  }
  const handlePassword=(e)=>{
    setTempPassword(e.target.value);
  }
  const onSubmit= () =>{
    setInputValue({email:tempEmail});
    setInputValue({password:tempPassword});
  }
  const validation =(tempPassword=="password" && tempEmail=="test@gmail.com")?true:false;
  
    return (
        <div className="login-page">
            <div className='left-section'>
                <div className="login-logo"><span>=</span><span>ISIKOLTU</span></div>
            </div>
            <div className='signup-section'>
                <span className="text-1">Be a bugger today !</span>
                <span className="text-2">Sign Up</span>
                <Link className="link-text">By continuing, you agree to our User Agreement and Privacy Policy.</Link>
                <div className="with-google-bar"><img className="g-icon"src={googlelogo} alt="google logo" /> <span className='g-text'>CONTINUE WITH GOOGLE</span></div>
                <div className="with-google-bar" style={{marginBottom:'52px'}}><img className="g-icon"src={applelogo} alt="apple logo" /> <span className='g-text'>CONTINUE WITH APPLE</span></div>
                <div style={{width: "75%", height: "20px",borderBottom: "1px solid rgba(29, 31, 38, 0.43)", textAlign:"center",  alignItems:'center', marginBottom:'40px'}}>
                    <span style={{fontSize: "25px" ,backgroundColor: "white", padding: "0 5px" , color:'rgba(29, 31, 38, 0.43)' , marginBottom:'20px'}}>
                        OR
                    </span>
                </div>

            <Form className='form'>
                <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                <Form.Control className="form-email-control" type="email" 
                    placeholder="Email" 
                    value={tempEmail}
                    onChange={e => handleEmail(e)}
                  />
                </Form.Group>

                <Link to="/profile"><Button className="continue-button" variant="primary" type="submit" onClick={()=>onSubmit()}>
                    Continue
                </Button></Link>

            </Form>
            <div style={{display:'flex', flexDirection:'row' , alignItems:'center' , marginTop:'30px'}}>
                <div><span className='text-3'>Already a bugger?</span></div>
                <div><Link style={{color:'black' , marginLeft:'5px'}} to="/login">LOG IN</Link></div>
            </div>
            
            </div>
            </div>
        
    )
}

export default SignUpPage