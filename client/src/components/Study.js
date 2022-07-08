import React , {useState,useEffect} from 'react'
import Card from "./Card"
import DSABanner from "./images/Dsa_banner.jpg"
import JavaScriptBanner from "./images/JavaScript.png"
import PythonBanner from "./images/PYTHON_BANNER.jpg"
import ApptitudeBanner from "./images/APPTITUDE_BANNER.png"
import JavaBanner from "./images/JAVA_BANNER.jpg"
import InterViewBanner from "./images/interview_pic.jpg"
import "./Home.css";

import { useNavigate } from "react-router-dom";


const Study = () => {

  const navigate = useNavigate();
 
  const study_matrials=[
          {
            id:6,
            Name: "Interview Preparetions",
            img:InterViewBanner,
            url:`/study/Interview_special`,
            des:"There are certain things you can do to properly prepare for an interview. Let's walk through them."
          },
   
          {
            id:2,
            Name: "Apptitude Questions",
            img:ApptitudeBanner,
            url:`/study/Apptitude`,
            des:"Browse for company aptitude questions & answers with result explanation."

          },
          {
            id:1,
            Name: "Data Structures",
            img:DSABanner,
            url:`/study/Dsa`,
            des:"Complete list of Data Structure, Practice Problems, Quizzes, Array, Linked List, Stack, Queue and more.."
          },
          {
            id:3,
            Name: "Python Programing",
            img:PythonBanner,
            url:`/study/Python`,
            des:"Python Programming tutorials from beginner to advanced on a massive variety of topics."

          } ,
          {
            id:5,
            Name: "JavaScript",
            img:JavaScriptBanner,
            url:`/study/JavaScript`,
            des:"The JavaScript language. Here you learn JavaScript, starting from scratch to advanced concepts like OOP."

          },
 
  
          {
            id:4,
            Name: "Java Programing",
            img:JavaBanner,
            url:`/study/Java`,
            des:"This reference will take you through simple and practical approaches while learning Java Programming"

          },

      ]

  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
      try {
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
    <div className='Study'>
      <div className="container">
       <div className="row d-flex justify-content-center   mx-auto mb-2"> 
          {  study_matrials.map((curelem)=>{
             const {id ,Name,img,url,des}=curelem;
               return( <Card  id={id} Name={Name} img={img} url={url} des={des} /> );
          })}
       </div>
      </div>
    </div>
  )
}

export default Study