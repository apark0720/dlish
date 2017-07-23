import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => (
  <footer className="footer">
    <section className="foot-left">
      <h1>About</h1>
      <p>dlish is a web application inspired by lishfood.com, <br/> that delivers delicious chef-prepared meals to your office. </p>
    </section>
    <section className="foot-right">
      <img className="icon" src={ window.images.github_icon }/>
      <img className="icon" src={ window.images.linkedin_icon }/>
      <img className="email-icon" src={ window.images.email_icon }/>
    </section>
  </footer>
);

export default Footer;
