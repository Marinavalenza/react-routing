import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul className="Navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
