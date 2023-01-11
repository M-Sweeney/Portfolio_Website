import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai"

export default function contact () {


  return (
    <div className="container">
      <h1 className="pagetitle">Contact Me</h1>
      <div className="contact-info">
        <h3>Matt Sweeney</h3>
        <p>Full Stack Software Engineer</p>
        <p>Chicago, IL</p>
        <p>609-675-6075</p>
        <p>sweeney.matt93@gmail.com</p>
        <div className="socials">
        <a className="linkedin" href="https://www.linkedin.com/in/sweeney-matt/" target="_blank"><AiFillLinkedin/></a>
        <a className="github" href="https://github.com/M-Sweeney" target="_blank"><AiFillGithub/></a>
        </div>
        <a className="email" href="mailto:sweeney.matt93@gmail.com?subject=Hello&body=Hello Matt!">Send Me an Email!</a>
      </div>
    </div>
  );
};