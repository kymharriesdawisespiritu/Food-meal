import React from 'react';

function Signin() {
  return (
    <div>
      <h1>Signin</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        <button>Signin</button>
      </form>
    </div>
  );
}

export default Signin;