import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [mail, setmail] = useState('');
  const [password, setpassword] = useState('');

  const formhandling = (e) => {
    e.preventDefault();
    handleLogin(mail, password);
    setmail('');
    setpassword('');
  };

  return (
    <div className='h-[100vh] w-screen flex flex-col items-center justify-center'>
      <h3 className='font-extrabold text-green-600 mb-10 text-3xl'>Login</h3>
      <div className='mt-10 border-2 border-green-300 rounded-xl h-[400px] w-[90%] sm:w-[450px] p-5'>
        <form
          onSubmit={(e) => {
            formhandling(e);
          }}
          className='mt-10 flex flex-col items-center justify-center'
        >
          <input
            onChange={(e) => {
              setmail(e.target.value);
            }}
            value={mail}
            required
            type='email'
            placeholder='Enter your Email'
            className='bg-transparent outline-none border-2 border-green-300 rounded-full p-5 m-6 placeholder:text-slate-200 text-center text-2xl h-12 w-full'
          />

          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            value={password}
            required
            type='password'
            placeholder='Enter your Password'
            className='bg-transparent outline-none border-2 border-green-300 rounded-full p-5 m-6 placeholder:text-slate-200 text-center text-2xl h-12 w-full'
          />

          <button className='text-xl rounded-full h-12 bg-green-600 font-bold text-white border-2 border-green-600 w-40 m-5'>
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
