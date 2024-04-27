import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar ">
    <div className="navbar-logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <ul className="navbar-links">
      <li>
        <a href="#">Movies</a>
      </li>
      <li>
        <a href="#">Series</a>
      </li>
    </ul>
  </nav>
  )
}
