

import React from 'react';
import { auth } from '../Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoimg from './assets/img/download.png'

 function Login() {
  const [email, setEmail] = useState('admin123@gmail.com');
  const [password, setPassword] = useState('admin123');
  
 
  
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email,password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      navigate('/Home')
    } catch (error) {
      console.error('Error logging in:', error.message);
    }





     
    

    console.log(email, password);
  }
 

  return (
    <>
    <div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img src={logoimg} alt="Logo" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
        
    
         

    </>
  );
}

export default Login