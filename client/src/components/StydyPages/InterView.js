import React from 'react'
import "./Matrial.css"
import interView_latest from "./InterView_latest"





const InterView = () => {
  return (
    <> 
     <div className="container-fluid Matrials">
    <div className="row d-flex justify-content-center mx-auto mt-4 mb-3"> 
       <div className='col-12  col-md-11 '>
        <h2 className='my-2 mb-5'>Most Common Interview Questions and Answers</h2>
        {/* <h3 className='mb-3'></h3> */}
        <p className='max_width'>We have added Placements Pappers of many various companys. those contains most frequently asked InterView Questions in Placements drives.
           like TCS,Wipro,Capgemini,Deloitte,Zoho etc
          </p>
        <h3 className='mb-3 mt-5'>Python Syllabus</h3>

        <div className='PDF_InterView_perspective'>
        <h4 className='mt-5'> Interview Questions</h4>
             <div className='row justify-content-between'>
             {
              interView_latest.map((curelem)=>{
              
                return (<div className='col-11 col-md-6'>
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