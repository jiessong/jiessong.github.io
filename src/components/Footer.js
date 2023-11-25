import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className = "socialMedia">
            <InstagramIcon />
            <GitHubIcon />
            <LinkedInIcon />
        </div>
        <p> &copy; 2023 jiessong.github.io</p>
    </div>
  );
}

export default Footer;