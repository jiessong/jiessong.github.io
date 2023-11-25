import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
  return (
    <div className = "home">
      <div className="about">
        <h2>Hi, I'm Jess. </h2>
        <div className="prompt">
          <p>
            A data engineer with a compassion for learning and exploring. 
          </p>
            <LinkedInIcon />
            <EmailIcon />
            <GithubIcon />
        </div>
      </div>
      <div className = "skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className = "item">
            <h2>Front-end</h2>
            <span>ReactJS, HTML, CSS, NPM</span>
          </li>
          <li className = "item">
            <h2>Back-end</h2>
            <span>Python, Java, Django, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className = "item">
            <h2>Languages</h2>
            <span>Java, Python, C++, C, Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home