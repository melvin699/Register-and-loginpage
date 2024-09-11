import React, { useState } from 'react'
import './LoginRegister.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const LoginRegister = () => {

    const [showLogin, setShowLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
        setShowLogin(!showLogin);

    };
    const toggleVisibility = ()=>{
          setShowPassword(!showPassword);
    }
  return (
    <div>
        {showLogin ?(
<div className='login-container'>
    <h2>Login</h2>
    
        <input className='form' type="text" placeholder='email or username' />
        <div className= 'pass-form'>
        <input  type= {showPassword ? "text " : 'password' } placeholder='password'/> <button onClick={toggleVisibility}>{showPassword ? <FaEyeSlash/> : <FaEye />}</button> 
        </div>
        <buttons className= " btn">Login</buttons>
        <h1>Don't have an account? Click  <span onClick={handleToggle} style={{ cursor: 'pointer', color: 'blue' }}> here</span></h1>
    </div>
  ):(

<div className="register">
<h2>Register</h2>
    <input className='form' type="text" placeholder='Username' /> 
    <input className='form' type="text" placeholder='Email' />
    <div className= 'pass-form'>
    <input  type={showPassword ? "text " : 'password' } placeholder='Password'/> <button onClick={toggleVisibility} >{showPassword ? <FaEyeSlash/> : <FaEye />}</button>
    </div>
    <p>By clicking Register, you accept the terms and policies</p>
    <buttons className = "btn">Register</buttons>
    <h1>Already have an account? Click  <span onClick={handleToggle} style={{ cursor: 'pointer', color: 'blue' }}> here</span></h1>
</div>
)}
</div>
  )
}

export default LoginRegister
