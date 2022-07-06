import { height } from '@mui/system';
import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
     
useEffect(() => {
    fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      
      }).then((res)=>{
        navigate("/Login",{replace:true});
      }).catch((e)=>{
        console.log(e);
      })
}, []);
   
  return (
    <><center><h4 className='mt-5'>logout</h4></center></>
  )
}

export default Logout