import React, { useState } from 'react';
import axios from 'axios';
import '../LoginSignUp.css';
import { toast } from 'react-toastify';

const SignUp = ({ toggle }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      toast.error('Password and Confirm Password do not match');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/signup`, {
        username,
        email,
        password
      });
      console.log(response, '<< response')
      if (response.status === 201) {
        // console.log("Sign-up successful");
        toast.success("Sign-up successful");
      }
    } catch (error) {
      setError('Sign-up failed. Please try again.');
      toast.error(error.response.data.message)
      // console.error('Error during sign-up:', error);
    }
  };

  return (
    <div className="col align-items-center flex-col sign-up">
      <div className="form-wrapper align-items-center">
        <div className="form sign-up">
          <div className="input-group">
            <i className='bx bxs-user'></i>
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <i className='bx bx-mail-send'></i>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <i className='bx bxs-lock-alt'></i>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <i className='bx bxs-lock-alt'></i>
            <input 
              type="password" 
              placeholder="Confirm password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSignUp}>
            Sign up
          </button>
          <p>
            <span>
              Already have an account?
            </span>
            <b onClick={toggle} className="pointer">
              Sign in here
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
