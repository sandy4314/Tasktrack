import React from 'react'

const Header = (props) => {
  const handleLogout = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between sm:items-end sm:justify-between p-4">
      <div className="text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl font-bold">
          Hi <br />
          <span className="font-bold text-2xl sm:text-3xl">{props.data.name} 👋!</span>
        </h1>
      </div>
      <button
        onClick={handleLogout}
        className="mt-4 sm:mt-0 bg-red-600 rounded-lg text-center h-10 w-24 sm:w-20 text-lg sm:text-xl font-semibold"
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
