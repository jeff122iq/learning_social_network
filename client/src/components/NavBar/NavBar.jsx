import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <ul className="navBar">
      <Link to="/home/my_page">My page</Link>
      <Link to="/home/messages">Messages</Link>
      <Link to="/home/friends">Friends</Link>
      <Link to="/home/posts">Posts</Link>
    </ul>
  );
};

export default NavBar;
