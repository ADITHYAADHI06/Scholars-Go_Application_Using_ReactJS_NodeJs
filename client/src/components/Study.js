import React from 'react'
import Card from "./Card"
import DataBanner from "./images/DATA_BANNER.jpg"
import CssBanner from "./images/CSS_BANNER.jpg"
import PythonBanner from "./images/PYTHON_BANNER.jpg"
import ApptitudeBanner from "./images/APPTITUDE_BANNER.png"
import JavaBanner from "./images/JAVA_BANNER.jpg"
import WEB3Banner from "./images/WEB3.0_BANNER.avif"


const Study = () => {
 
  const study_matrials=[
    {
      id:1,
      Name: "Data Structures And Alogorithum",
      img:DataBanner,
      url:`/Data`
    },
    {
      id:2,
      Name: "Apptitude Questions",
      img:ApptitudeBanner,
      url:`/Apptitude`

    },
    {
      id:3,
      Name: "Python Programing",
      img:PythonBanner,
      url:`/Python`

    } ,
    {
      id:4,
      Name: "Java Programing",
      img:JavaBanner,
      url:`/Java`

    },
    {
      id:5,
      Name: "Cascading Style Sheets",
      img:CssBanner,
      url:`/Css`

    },
    {
      id:6,
      Name: "Future Web 3.0",
      img:WEB3Banner,
      url:`/Web3`
    },
   
  ]


  return (
    <>
    <div className="container">
    <div className="row d-flex justify-content-center   mx-auto mb-2"> 
  {  study_matrials.map((curelem)=>{
    const {id ,Name,img,url}=curelem;

     return( <Card  id={id} Name={Name} img={img} url={url} /> );
  })

  }
       
    

    
      </div>
    </div>
    </>
  )
}

export default Study