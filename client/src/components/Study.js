import React , {useState,useEffect} from 'react'
import Card from "./Card"
import DataBanner from "./images/DATA_BANNER.jpg"
import CssBanner from "./images/CSS_BANNER.jpg"
import PythonBanner from "./images/PYTHON_BANNER.jpg"
import ApptitudeBanner from "./images/APPTITUDE_BANNER.png"
import JavaBanner from "./images/JAVA_BANNER.jpg"
import InterViewBanner from "./images/WEB3.0_BANNER.avif"

import { useNavigate } from "react-router-dom";


const Study = () => {

  const navigate = useNavigate();

 
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
      img:InterViewBanner,
      url:`/Interview_special`
    },
   
  ]


  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      // console.log(interView_latest[0].name);

      const res = await fetch("/study", {
        method: "GET",
        headers: {
          // to set that application should accept json
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        // we are writing include because the cookie has to send to backend
        //  properly so that we are using that
      });
      //  we get the res

      const data = await res.json();
            // console.log(res);
      setUserData(data);
    } catch (e) {
      // console.log(e);
      navigate("/Login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);


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