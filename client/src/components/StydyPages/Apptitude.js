import React from 'react'
import "./Matrial.css"

const Apptitude_Questions=[
  {
    id:1,
    name:"INTERVIEW Tips To Keep In Mind",
    url:"https://drive.google.com/file/d/1CrCNAcSDpaDEDoQha_bueikBcTFpdIZG/view?usp=sharing",
    description:"dj,b"
},
{
  id:8,
  name:"Verbal Ability Placement Paper",
  url:"https://drive.google.com/file/d/1WYSkQDo7gROjBsabmy8gxF5l10-dVUFB/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"REASONING, APTITUDE Shortnotes",
  url:"https://drive.google.com/file/d/1f9zOfwSayzs78VjaKyVQj8oTva8iFLbq/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"Reasoning Ability Placement Paper",
  url:"https://drive.google.com/file/d/1jsObap-4gFv6Zgqrn7mS0BpKYao2U9v2/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"Aptitude Placement Paper",
  url:"https://drive.google.com/file/d/13Rebdh6Jm6s2BpIL468EgD447JeRF97Y/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"TCS NQT Solved Paper-1",
  url:"https://drive.google.com/file/d/1JdtEVIubvDCd3HeSz5TUvxa7YFrIEjv0/view?usp=sharing",
  description:"dj,b"
},   {
  id:1,
  name:"TCS NQT Solved Paper-2",
  url:"https://drive.google.com/file/d/1D0BMC8Et_q5Mav1Mw7duCU9J5p0sRY14/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"TCS Previous Year Interview",
  url:"https://drive.google.com/file/d/1Xd2j2tQeOQwTtHsZE1UJ3fuaZ57tPWli/view?usp=sharing",
  description:"dj,b"
}, {
  id:1,
  name:"Infosys Placement Paper",
  url:"https://drive.google.com/file/d/1tq48rmrHVX6hBOUFC8GYiGsgaJhD5ppI/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"Important MCQ Placement Materials",
  url:"https://drive.google.com/file/d/1FfrPHeQyOA5NVfBY2JHyuPhtkAWyfuJ5/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"Infytq Java MCQ Placement paper",
  url:"https://drive.google.com/file/d/11R6OnWVl_ImCUoOV7WfA5NS83ggyng4O/view?usp=sharing",
  description:"dj,b"
}, 
{
  id:3,
  name:"TCS Digital - 7th August Day 1 Slot 1",
  url:"https://drive.google.com/file/d/1EzNtN66ZToHnol9COlVUmaxuQUGsJPOy/view?usp=sharing",
  description:"dj,b"
},

{
  id:4,
  name:"Wipro Model Placement Paper",
  url:"https://drive.google.com/file/d/1X5sFNGcZoYoA3sXCluybQ5KwhlQUCd59/view?usp=sharing",
  description:"dj,b"
},
{
  id:1,
  name:"WIPRO ELITE NTH",
  url:"https://drive.google.com/file/d/1GxzQMxjy9bY8jEQoMdWvqMffPDDCmSxD/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"Wipro Placement Paper-2022",
  url:"https://drive.google.com/file/d/16De7QyBAIL9jjngpS6KAyulKx-_eu71a/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"Wipro material Basics",
  url:"https://drive.google.com/file/d/1YTXFARa2-Y-Yg7i5myhm4PyD19k_MyXl/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"Wipro NLTH Previous Year-2020",
  url:"https://drive.google.com/file/d/10Vc3XhS10YCVCM8kdCcIdxTaPpYtJ2Rv/view?usp=sharing",
  description:"dj,b"
}, 
{
  id:1,
  name:"Wipro Placement paper-3",
  url:"https://drive.google.com/file/d/1raSMJJOhhrV9CS0-J9PN6eNO67HH9A2X/view?usp=sharing",
  description:"dj,b"
},  {
  id:1,
  name:"Wipro_Elite_2020 Slot-5",
  url:"https://drive.google.com/file/d/1JwureOOyMSrlHkot7lVEX4TO4H3_NTAB/view?usp=sharing",
  description:"dj,b"
},]



const Apptitude = () => {
  return (
    <> 
     <div className="container-fluid Matrials">
    <div className="row d-flex justify-content-center mx-auto mt-4 mb-3"> 
       <div className='col-12  col-md-11 '>
        <h2 className='my-2 mb-5'>Apptitude for Beginners: Learn Apptitude Easily</h2>
        <h3 className='mb-3'>Why Apptitude?</h3>
        <p className='max_width'>The placement session for any company generally has 3 – 4 rounds. The first round is the written test, consisting of quantitative aptitude, reasoning (logical ability), English (verbal ability) and computer science subjects (C, C++, Data Structures, Algorithms, DBMS, OS, Networks, etc.).</p>

        <div className='PDF_InterView_perspective'>
        <h4 className='mt-5'>Interview Apptitude Questions</h4>
             <div>
             <div className='row justify-content-between'>

             {
              Apptitude_Questions.map((curelem)=>{
              
                return (  <div className='col-11 col-md-6'>
                   <h5 className='my-4' key={curelem.id}>👉 Apptitude {curelem.id} <a href={curelem.url}>{curelem.name}</a></h5> 
                      </div>
                      
              )})
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