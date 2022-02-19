import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../Style/Containers/LoginPage.css"

function LoginPage() {

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
            <div className='right-section'>
            <span className="text-2">Log in</span>
                <Link className="link-text">By continuing, you agree to our User Agreement and Privacy Policy.</Link>
                <div className="login-form">
            <Form className='form'>
                <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control className="form-control" type="email" 
                    placeholder="Enter email" 
                    value={tempEmail}
                    onChange={e => handleEmail(e)}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control className="form-control" type="password" placeholder="Password" 
                    value={tempPassword}
                    onChange={e => handlePassword(e)}
                    />
                </Form.Group>

                
                <Link to={validation? "/" : null }><Button className="submit-button" variant="primary" type="submit" onClick={()=>onSubmit()}>
                    Login
                </Button></Link>

            </Form>
            
            </div>
            </div>
        </div>
    )
}

export default LoginPage