import React from 'react'
import {Link} from 'react-router-dom'

const Signup =()=>{     
    return(
        <div className="mycard2  ">
               <div className="card auth-card2 input-field">
            <h2>Se connecter </h2> 
            <p>  </p>
            <p>  </p>
            <form>
              <label>
              <input
              type="text"
              placeholder="email"
             />
             <input
              type="text"
              placeholder="password"
             /> 
                
              </label>
            </form>
            
          
            <Link to="./oumaima">
              <button type="button" class="btn btn-outline-primary #64b5f6 blue lighten-2" >Entrer</button>
               </Link> 
     <p></p>
         <h>
             <Link to ="/login">Créer mon compte</Link>
         </h>
           </div>
      </div>
    )
}
export default Signup