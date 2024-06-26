import { link } from 'fs'
import './navbar.scss'
import {Link} from "react-router-dom"


const links=[
{href:"/",label:"Home" },
{href:"/companies",label:"Companies" },
{href:"/Jobs",label:"Jobs" },
{href:"/candidates",label:"Candidates" },

]

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="brand">
        <span>Resume Management </span>
      </div>
      <div className="menu">
        <ul>
          {links.map((item)=>(

            <li>
            <Link to ={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hamburger"></div>
      <div className="toggle"></div>
    


    </div>
  )
}

export default Navbar