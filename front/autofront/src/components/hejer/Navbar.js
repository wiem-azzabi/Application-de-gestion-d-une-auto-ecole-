import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = ()=>{
    return(
        <nav>
    <div className="nav-wrapper white" >
      <Link to ="/" className="brand-logo left">Auto-école </Link>
      <ul id="nav-mobile" className="right">
        <li><Link to ="/login"><button className='btn waves-effect waves-light'> Inscription </ button></Link></li>
        <li><Link to="/signup"><button className='btn waves-effect waves-light'>Connexion</ button></Link></li>
        <li><Link to="/more">Plus d'information</Link></li>
      </ul>
    </div>
  </nav>
    )
}
export default NavBar;