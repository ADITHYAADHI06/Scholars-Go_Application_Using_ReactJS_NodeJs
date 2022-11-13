import React from 'react'
import "./Card.css"
import { NavLink } from "react-router-dom";

const Card = ({id ,Name,img,url,des}) => {
  
  return (
    <>
       <div className='col-11 col-md-4 px-0 px-md-3 ' key={id}>
         <NavLink to={url} className="card  mt-5  my-md-5">
              <img className="card-img-top card-img" src={img} alt={Name} />

                <div className="card-body">
                           <div>
                              <h5 className="card-title">{Name}</h5>
                           </div>
                           <p className="card-text">{des}</p>
                          <NavLink to={url} className="btn rounded-3 btn-outline-dark">Explore More</NavLink>
               </div>
         </NavLink>
    </div>
    </>
  )
}

export default Card