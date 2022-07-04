import React from 'react'
import "./Matrial.css"

const JavaSyllabus=[{
    id:1,
    url:`https://drive.google.com/drive/folders/1satLafqxU6DuPhQxs91dy9QMChzsGjuh`,
    name:"Complete Python course",
    discription:"Complate Python course for Proffesionals, Developers , Students",
},{
  id:2,
  url:`https://drive.google.com/drive/folders/1satLafqxU6DuPhQxs91dy9QMChzsGjuh`,
  name:"Python for Begginers",
  discription:"Begginers friendly Python course for Students",
},{
  id:3,
  url:`https://drive.google.com/file/d/1V3idJRHqfG7zh1WsWTXDlTpB3N1g9kl3/view?usp=sharing`,
  name:"Python Cheat Sheet Advanced",
  discription:"Begginers friendly Python course for Students",
},{
  id:4,
    url:`https://drive.google.com/drive/folders/1satLafqxU6DuPhQxs91dy9QMChzsGjuh`,
    name:"Questions With Answers",
    discription:"Complate Python Questions With Answers for Students.",
},]

const JavaInterView=[{
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

const Python = () => {
  return (
    <> 
     <div className="container-fluid Matrials">
    <div className="row d-flex justify-content-center mx-auto mt-4 mb-3"> 
       <div className='col-12  col-md-11 '>
        <h2 className='my-2 mb-5 Main_heading'>Java Tutorial for Beginners: Learn Core Java Programming</h2>
        <h3 className='mb-3'>What is Java Language?</h3>
        <p className='max_width'>Java is a class-based object-oriented programming language for building web and desktop applications. It is the most popular programming language and the language of choice for Android programming.</p>
        <h3 className='mb-3 mt-5'>Java Syllabus</h3>

        <div className='PDF_InterView_perspective'>
        <h4 className='mt-5'>Java Programming Interview Questions</h4>
             <div>
             {
              JavaInterView.map((curelem)=>{
              
                return (   <h5 className='my-4' key={curelem.id}>👉 Interview {curelem.id} <a href={curelem.url}>{curelem.name}</a> — {curelem.discription}</h5> );
              })
             }

             </div>
        </div>


        <div className='PDF_BASICS'>
        <h4 className='mt-5'>Java Programming Basics for Beginners</h4>
             <div>

             {
              JavaSyllabus.map((curelem)=>{
              
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

export default Python