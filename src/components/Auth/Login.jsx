import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const formHandling = (e) => {
    e.preventDefault();
    handleLogin(mail, password);
    setMail('');
    setPassword('');
  };

  // Function to auto-fill demo credentials
  const demoLogin = (role) => {
    if (role === 'admin') {
      setMail('admin@example.com');
      setPassword('4314');
    } else {
      setMail('sandy@gmail.com');
      setPassword('4314');
    }
  };

  return (
    <div className='h-[100vh] w-screen flex flex-col items-center justify-center'>
      <h3 className='font-extrabold text-green-600 mb-10 text-3xl'>Login</h3>
      <div className='mt-10 border-2 border-green-300 rounded-xl h-auto w-[90%] sm:w-[450px] p-5'>
        <form onSubmit={formHandling} className='mt-10 flex flex-col items-center justify-center'>
          <input
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            required
            type='email'
            placeholder='Enter your Email'
            className='bg-transparent outline-none border-2 border-green-300 rounded-full p-5 m-6 placeholder:text-slate-200 text-center text-2xl h-12 w-full'
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            type='password'
            placeholder='Enter your Password'
            className='bg-transparent outline-none border-2 border-green-300 rounded-full p-5 m-6 placeholder:text-slate-200 text-center text-2xl h-12 w-full'
          />

          <button className='text-xl rounded-full h-12 bg-green-600 font-bold text-white border-2 border-green-600 w-40 m-5'>
            Log In
          </button>
        </form>

        {/* Demo Section */}
        <h4 className='text-lg font-semibold text-center mb-4'>Demo</h4>
        <div className='flex m-5 justify-between'>
          <button
            onClick={() => demoLogin('admin')}
            className='text-lg rounded-full h-10 bg-blue-500 font-semibold text-white border-2 border-blue-500 w-48'
          >
            Login as Admin
          </button>
          <button
            onClick={() => demoLogin('user')}
            className='text-lg rounded-full h-10 bg-gray-500 font-semibold text-white border-2 border-gray-500 w-48'
          >
            Login as User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
