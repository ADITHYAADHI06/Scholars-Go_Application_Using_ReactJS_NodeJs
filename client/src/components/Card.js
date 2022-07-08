import React from 'react'
import "./Card.css"
import { NavLink } from "react-router-dom";

const Card = ({id ,Name,img,url,des}) => {
  
  return (
    <>
       <div className='col-md-4 my-5 ' key={id}>
         <div className="card ">
              <img className="card-img-top" src={img} alt={Name} />

                <div className="card-body">
                           <div>
                              <h5 className="card-title">{Name}</h5>
                           </div>
                           <p className="card-text">{des}</p>
                          <NavLink to={url}  className="btn rounded-3 btn-outline-dark">Explore More</NavLink>
               </div>
         </div>
    </div>
    </>
  )
}

export default Card