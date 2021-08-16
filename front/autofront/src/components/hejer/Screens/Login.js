import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Login =()=>{
    return(
           <div className="mycard ">
               <div className="card auth-card input-field">
            <h2>S'inscrire</h2>
            <input
              type="text"
              placeholder="Nom"
            
             />
            <input
              type="text"
              placeholder="Prénom"
              
             />
            <input
              type="text"
              placeholder="Date de naissance"
              
             />
             <input
              type="text"
              placeholder="adresse"
             
             />
             <input
              type="text"
              placeholder="email"
              
             />
             <input
              type="text"
              placeholder="password"
           
             />
             <input
              type="text"
              placeholder="numéro de tèléphone"
             
             />
             
             <button className='btn waves-effect waves-light #64b5f6 blue lighten-2'>enregistrer </button>
<p></p>
            <h6>
             <Link to ="/signup">Vous avez déjà un compte ?</Link>
         </h6>
           </div>
      </div>
    )
}

export default Login