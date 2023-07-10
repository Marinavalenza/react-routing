import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul className="Navbar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contacts">
          <li>Contacts</li>
        </Link>
        <Link to="/locations">
          <li>Locations</li>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
