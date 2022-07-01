import React from 'react'
import "./Matrial.css"



const DataInterView=[{
  id:1,
  url:`https://drive.google.com/drive/folders/1satLafqxU6DuPhQxs91dy9QMChzsGjuh`,
  name:"Most Importent Interview Questions",
  discription:"Top most 40 importent questions",
},{
id:2,
url:`https://www.python-faq.com/2016/11/50-python-interview-questions-answers.html`,
name:"Most Importent Interview Questions-2",
discription:"Importent questions for Python Programming",
},{
id:3,
url:`https://drive.google.com/drive/folders/1satLafqxU6DuPhQxs91dy9QMChzsGjuh`,
name:"Python Basic to Advanced ",
discription:"Python course Zero to Master",
},{
id:4,
  url:`https://drive.google.com/drive/folders/1satLafqxU6DuPhQxs91dy9QMChzsGjuh`,
  name:"Most Importent Interview Questions-3",
  discription:"Complate Python Questions With Answers",
},]

const Data = () => {
  return (
    <> 
     <div className="container-fluid Matrials">
    <div className="row d-flex justify-content-center mx-auto mt-4 mb-3"> 
       <div className='col-12  col-md-11 '>
        <h2 className='my-2 mb-5'>Python Tutorial for Beginners: Learn Programming Basics</h2>
        <h3 className='mb-3'>What is Python Programming Language?</h3>
        <p className='max_width'>Python is an object-oriented programming language created by Guido Rossum in 1989. It is ideally designed for rapid prototyping of complex applications. It has interfaces to many OS system calls and libraries and is extensible to C or C++. Many large companies use the Python programming language, including NASA, Google, YouTube, BitTorrent, etc.</p>
        <h3 className='mb-3 mt-5'>Python Syllabus</h3>

        <div className='PDF_InterView_perspective'>
        <h4 className='mt-5'>Python Programming Interview Questions</h4>
             <div>
             {
              DataInterView.map((curelem)=>{
              
                return (   <h5 className='my-4' key={curelem.id}>👉 Lesson {curelem.id} <a href={curelem.url}>{curelem.name}</a> — {curelem.discription}</h5> );
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

export default Data