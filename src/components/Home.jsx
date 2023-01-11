import AboutMe from "../assets/AboutMe.jpeg"
import Projects from './Projects'


export default function Home () {

  return(

<div className="container">
  <div>
  <h1 className="pagetitle">Matt Sweeney</h1>
  <h2 className="role">Software Engineer</h2>
  <div className="aboutMeContent">
    <img className="aboutMeImg" src={AboutMe}/>
    <p className="brandStatement">I am a highly motivated Software Engineer with a passion for problem-solving, I excel in developing creative solutions to complex challenges. In my free time, I enjoy sharing my knowledge with others and helping them achieve their goals. I am always seeking new opportunities for learning and growth, particularly in the field of front-end development. Through hands-on experience and practical examples, I am continuously striving to improve my skills and advance my career as a Software Engineer.</p>
  </div>
</div>
  <h1 className="pagetitle">Skills</h1>
<div className="skills">
  <div className="skillcard">
    <h1 className="subtitle">Languages</h1>
    <br/>
    <h2 className="skillcontent">JavaScript, HTML/CSS, SQL, Python</h2>
  </div>
  <div className="skillcard">
    <h1 className="subtitle">Frameworks & Libraries</h1>
    <br/>
      <h2 className="skillcontent">React, Express,
Sequelize, Django</h2>
  </div>
  <div className="skillcard">
    <h1 className="subtitle">Developer Tools & Systems</h1>
    <br/>
      <h2 className="skillcontent">Node.js, Git, Trello, Figma, PostgresSQL, VSCode, Jira, Linear</h2>
  </div>
</div>
<div>
  <h1 className="pagetitle">Projects</h1>
<Projects />
</div>
</div>

  )
}