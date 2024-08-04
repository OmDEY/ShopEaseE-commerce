import React, { useEffect } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import '../LoginSignUp.css'
import { toast } from 'react-toastify';
const AuthnewContainer = () => {
  const toggle = () => {
    const newContainer = document.getElementById('newContainer');
    newContainer.classList.toggle('sign-in');
    newContainer.classList.toggle('sign-up');
  }

  useEffect(() => {
    const newContainer = document.getElementById('newContainer');
    setTimeout(() => {
      newContainer.classList.add('sign-in');
    }, 200);
  }, []);

  return (
    <div id="newContainer" className="newContainer">
      <div className="row">
        <SignUp toggle={toggle}/>
        <Login toggle={toggle} />
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome</h2>
          </div>
          <div className="img sign-in"></div>
        </div>
        <div className="col align-items-center flex-col">
          <div className="img sign-up"></div>
          <div className="text sign-up">
            <h2>Join with us</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthnewContainer;
