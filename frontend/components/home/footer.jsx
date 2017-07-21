import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => (
  <footer className="nav-footer">
    <menu className="row">
      <ul className="row">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            About
          </a>
        </li>
        <li><a href="mailto:apark0720@gmail.com">Contact</a></li>
      </ul>
    </menu>
    <menu>
      <p className="row">
        <small>
          this is dlish footer <br />© 2017 Alex Park
        </small>
      </p>
    </menu>
  </footer>
);

export default Footer;
