import { Link } from 'react-router-dom'

export default function Nav () {

  return(
    <div className='nav'>
      <Link to ='/'>Home</Link>
      <a className="email" href="mailto:hello@themattsweeney.com?subject=Hello&body=Hello Matt!">Contact</a>
      <Link to ='/portfolio'>Portfolio</Link>
      <a href="https://docs.google.com/document/d/1FDwhAdkIKd_CgDNU9bTa1UNcIHTv6HKqGn8LYFRKQJM/edit?usp=sharing" target="_blank">Resume</a>
      <a href="https://www.linkedin.com/in/sweeney-matt/" target="_blank">LinkedIn</a>
      <a href="https://github.com/M-Sweeney" target="_blank">Github</a>
    </div>
  )
}