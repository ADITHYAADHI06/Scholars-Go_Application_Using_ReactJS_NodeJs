import React from 'react'
import "./Card.css"



const Card = ({id ,Name,img,url}) => {
  
  return (
    <>
       <div className='col-md-4 my-5 ' key={id}>
         <div className="card">
              <img className="card-img-top" src={img} alt={Name} />
                <div className="card-body">
                         <h5 className="card-title">{Name}</h5>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <a href={url}  className="btn btn-primary">Go somewhere</a>
               </div>
         </div>
    </div>
    </>
  )
}

export default Card