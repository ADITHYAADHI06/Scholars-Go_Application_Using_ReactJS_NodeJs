import React , {useState,useEffect} from 'react'
import Card from "./Card"
import DSABanner from "./images/Dsa_banner.jpg"
import JavaScriptBanner from "./images/JavaScript.png"
import PythonBanner from "./images/PYTHON_BANNER.jpg"
import ApptitudeBanner from "./images/APPTITUDE_BANNER.png"
import JavaBanner from "./images/JAVA_BANNER.jpg"
import InterViewBanner from "./images/interview_pic.jpg"

import { useNavigate } from "react-router-dom";


const Study = () => {

  const navigate = useNavigate();

 
  const study_matrials=[
    {
      id:6,
      Name: "Interview Preparetions",
      img:InterViewBanner,
      url:`/study/Interview_special`,
      des:"sfucibFEWBshk kjkdjskcsbdkj cdcbbckjb skjb bsdbjksfbwkejbfkwjebkbdsjc ekwjfbjk mcbmsdbfkewbkfb,c cm e jckbdskfjbekj"
    },
   
    {
      id:2,
      Name: "Apptitude Questions",
      img:ApptitudeBanner,
      url:`/study/Apptitude`,
      des:"sfucibFEWBshk kjkdjskcsbdkj cdcbbckjb skjb bsdbjksfbwkejbfkwjebkbdsjc ekwjfbjk mcbmsdbfkewbkfb,c cm e jckbdskfjbekj"

    },
    {
      id:1,
      Name: "Data Structures",
      img:DSABanner,
      url:`/study/Dsa`,
      des:"sfucibFEWBshk kjkdjskcsbdkj cdcbbckjb skjb bsdbjksfbwkejbfkwjebkbdsjc ekwjfbjk mcbmsdbfkewbkfb,c cm e jckbdskfjbekj"
    },
    {
      id:3,
      Name: "Python Programing",
      img:PythonBanner,
      url:`/study/Python`,
      des:"sfucibFEWBshk kjkdjskcsbdkj cdcbbckjb skjb bsdbjksfbwkejbfkwjebkbdsjc ekwjfbjk mcbmsdbfkewbkfb,c cm e jckbdskfjbekj"

    } ,
    {
      id:5,
      Name: "JavaScript",
      img:JavaScriptBanner,
      url:`/study/JavaScript`,
      des:"sfucibFEWBshk kjkdjskcsbdkj cdcbbckjb skjb bsdbjksfbwkejbfkwjebkbdsjc ekwjfbjk mcbmsdbfkewbkfb,c cm e jckbdskfjbekj"

    },
 
  
    {
      id:4,
      Name: "Java Programing",
      img:JavaBanner,
      url:`/study/Java`,
      des:"sfucibFEWBshk kjkdjskcsbdkj cdcbbckjb skjb bsdbjksfbwkejbfkwjebkbdsjc ekwjfbjk mcbmsdbfkewbkfb,c cm e jckbdskfjbekj"

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
    const {id ,Name,img,url,des}=curelem;

     return( <Card  id={id} Name={Name} img={img} url={url} des={des} /> );
  })

  }
       
  
      </div>
    </div>
    </>
  )
}

export default Study