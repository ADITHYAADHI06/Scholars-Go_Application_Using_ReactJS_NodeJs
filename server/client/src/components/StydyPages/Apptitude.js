import React from 'react'
import "./Matrial.css"
import {Apptitude_Questions} from "./InterView_Api"

const Apptitude = () => {
  return (
<> 
  <div className="container-fluid Matrials">
    <div className="row d-flex justify-content-center mx-auto mt-4 mb-3"> 
       <div className='col-12  col-md-11 '>
               <h2 className='my-2 mb-2 Main_heading'>Apptitude for Beginners: Learn Apptitude Easily</h2>
               <hr className="mb-5"></hr>
               <h3 className='mb-3'>Why Apptitude?</h3>
               <p className='max_width'>The placement session for any company generally has 3 – 4 rounds. The first round is the written test, consisting of quantitative aptitude, reasoning (logical ability), English (verbal ability) and computer science subjects (C, C++, Data Structures, Algorithms, DBMS, OS, Networks, etc.).</p>

               <div className='PDF_InterView_perspective'>
               <h4 className='mt-5'>Interview Apptitude Questions</h4>
                   <div>
                    <div className='row justify-content-between'>
                      {
                      Apptitude_Questions.map((curelem)=>{
                         return ( 
                            <div className='col-11 col-md-6'>
                             <h5 className='my-4' key={curelem.id}><span className='d-block d-md-inline'>👉 Apptitude {curelem.id} </span><a href={curelem.url} className="ms-1 ms-md-1" target="_newtab">{curelem.name}</a></h5> 
                             </div> )})
                       }
                    </div>
                  </div>
               </div>
       </div>
      </div>
     </div>
    </>
  )
}

export default Apptitude