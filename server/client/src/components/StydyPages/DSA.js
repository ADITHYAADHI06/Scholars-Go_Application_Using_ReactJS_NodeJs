import React from 'react'
import "./Matrial.css"
import {DSA_concepts_wise, DSA_full_pdfs} from "./InterView_Api"

const DSA = () => {
  return (
    <> 
     <div className="container-fluid Matrials">
    <div className="row d-flex justify-content-center mx-auto mt-4 mb-3"> 
       <div className='col-12  col-md-11 '>
        <h2 className='my-2 mb-2 Main_heading'>Data structures and Algorithms: Zero to Master<span className='Hand'>&#128077;</span></h2>
        <hr className="mb-5"></hr>
        <h3 className='mb-3'>What is Data Structure and Algorithms ?</h3>
        <p className='max_width'>Data Structures are the programmatic way of storing data so that data can be used efficiently. Almost every enterprise application uses various types of data structures in one or the other way. This tutorial will give you a great understanding on Data Structures needed to understand the complexity of enterprise level applications and need of algorithms, and data structures.</p>

        <div className='PDF_InterView_perspective'>
        <h3 className='mt-5 mb-4'>Data structures and Algorithms Concepts [PDF]</h3>
        <div className='row justify-content-between mx-0  mx-md-3'>
             {
              DSA_concepts_wise.map((curelem)=>{
                return (<div className='col-11 col-md-5 px-0'>
                   <h5 className='my-4' key={curelem.id}><span className='d-block d-sm-inline'>👉 Lesson {curelem.id} </span><a href={curelem.url} target="_newtab">{curelem.name}</a></h5>
                   </div>
                    );
                    })
             }
             </div>
        </div>

        <div className='PDF_Full_course'>
        <h3 className='mt-5 mb-4'>Data structures and Algorithms Full Course [PDF]</h3>
             <div>
                {
                  DSA_full_pdfs.map((curelem)=>{       
                      return (   <h5 className='my-4' key={curelem.id}><span className='d-block d-sm-inline'>👉 DSA {curelem.id} </span><a href={curelem.url} target="_newtab">{curelem.name}</a></h5> 
                      );
                        })
                 }
        </div>
       </div>  
      </div>
  </div>
</div>
</>
  )
}

export default DSA