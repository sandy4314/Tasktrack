import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import Employeedashboard from './components/Dashboard/Employeedashboard';
import Admindashboard from './components/Dashboard/Admindashboard';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '4314') {
      const adminData={name:"Sandeep"}

      setUser('admin');
      setLoggedInUserData(adminData);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin',data:{name:"Sandeep"} }));
    } else if (userData && userData.length > 0) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <Admindashboard changeUser={setUser} data={loggedInUserData}/> : (user == 'employee' ? <Employeedashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App;