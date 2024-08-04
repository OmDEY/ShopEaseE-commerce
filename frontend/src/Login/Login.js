import React, { useState } from 'react';
import '../LoginSignUp.css'
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = ({ toggle }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  }

  const handleLogin = async () => {
    
    await axios.post('http://localhost:5000/login', {
      username,
      password
    }).then(function(response){
      if(response.status === 200){
        toast.success("Login successful")
      }
    }).catch(function(error){
      toast.error(error?.response?.data?.message)
    })


    // await axios.post('http://localhost:5000/login', {
    //   username,
    //   password
    // }).then((response) => {
    //   console.log(response, '<<<< response')
    //   if (response.status === 200) {
    //     // console.log("Login successful");
    //     toast.success("Login successful");
    //   }
    // }).catch((error) => {
    //   setError('Login failed. Please try again.');
    //   toast.error(error?.response?.data?.message)
    //   // console.error('Error during login:', error);
    // })
  }

  return (
    <div className="col align-items-center flex-col sign-in">
      <div className="form-wrapper align-items-center">
        <div className="form sign-in">
          <div className="input-group">
            <i className='bx bxs-user'></i>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-group">
            <i className='bx bxs-lock-alt'></i>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleLogin}>
            Sign in
          </button>
          <button onClick={handleGoogleLogin}>Sign In With Google</button>
          <p>
            <b>
              Forgot password?
            </b>
          </p>
          <p>
            <span>
              Don't have an account?
            </span>
            <b onClick={toggle} className="pointer">
              Sign up here
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
