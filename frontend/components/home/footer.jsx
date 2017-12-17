import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => (
  <footer className="footer">
    <section className="footer-icons">
      <a href="https://github.com/apark0720" target="_new">
        <img className="icon" src={ window.images.github_icon }/>
      </a>
      <a href="mailto:apark0720@gmail.com" target="_new">
        <img className="icon" src={ window.images.email_icon }/>
      </a>
    </section>
    <p><b>dlish</b> is a web application inspired by <a href="https://lishfood.com">lishfood.com,</a><br/>that delivers delicious chef-prepared meals to your office</p>
  </footer>
);

export default Footer;