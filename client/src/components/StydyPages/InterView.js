import React from 'react'
import "./Matrial.css"
import {interView_latest} from "./InterView_Api"

const InterView = () => {
  return (
<> 
     <div className="container-fluid Matrials">
    <div className="row d-flex justify-content-center mx-auto mt-4 mb-3"> 
       <div className='col-12  col-md-11 '>
        <h2 className='my-2 mb-5 Main_heading'>Most Common Interview Questions and Answers<span className='Hand'>&#128077;</span></h2>
        <p className='max_width'>The largest collection of placement papers with answers and interview pattern of various companies such as TCS, Infosys, Wipro, Accenture, IBM, CTS etc.</p>     
        <div className='PDF_InterView_perspective'>
          <h3 className='mt-5'>All Companies Placement Papers</h3>
             <div className='row justify-content-between'>
               {
              interView_latest.map((curelem)=>{              
                return (
                     <div className='col-11 col-md-6'>
                         <h5 className='my-4 Matrial' key={curelem.id}>👉 <a href={curelem.url}>{curelem.name}</a></h5>
                     </div>   
                   ) })
                }
             </div>
        </div>
       </div>
  </div>
</div>
</>
  )
}

export default InterView