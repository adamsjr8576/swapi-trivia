import React from 'react';
import './Error.scss';
import { Link } from 'react-router-dom';


const Error = () => {
  return(
    <section>  
      <h3>Error</h3>
      <Link to='/'>
        <button>Back To Login</button>
      </Link>
    </section> 
  )
}

export default Error;