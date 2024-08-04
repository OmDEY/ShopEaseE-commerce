import './App.css';
import AuthnewContainer from './LoginSignUpAuthenticator/Authenticator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file


function App() {

  return (
    <>
      <ToastContainer />
      <AuthnewContainer/>
    </>
  )
  
}

export default App;
