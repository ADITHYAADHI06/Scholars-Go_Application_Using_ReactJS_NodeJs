import React from 'react'
import "./Card.css"
import { NavLink } from "react-router-dom";



const Card = ({id ,Name,img,url}) => {
  
  return (
    <>
       <div className='col-md-4 my-5 ' key={id}>
         <div className="card ">
              <img className="card-img-top" src={img} alt={Name} />

                <div className="card-body">
                           <div>
                           <h5 className="card-title">{Name}</h5>
                           {/* <span class="badge rounded-pill bg-success">latest</span> */}
                           </div>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <NavLink to={url}  className="btn rounded-3 btn-outline-dark">Explore More</NavLink>
               </div>
         </div>
    </div>
    </>
  )
}

export default Card