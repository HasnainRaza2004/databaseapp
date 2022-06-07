import { Box } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { sendData, signUpuser } from '../config/firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';





const SignUp = () => {
const [userObj,setuserObj]=useState({});
const navigate = useNavigate()


let signUp =()=>{
  if(!userObj.email){
    alert("Email is Required")
    return;
}
if(!userObj.password || userObj.password.length < 6){
  alert("Password is required and Password must be at least 6 characters")
    return ;
  }
  
console.log(userObj)

  signUpuser(userObj)
  .then((res)=>{
    console.log(res)
    sendData(userObj,"Users",res.user.uid).then(()=>{
      console.log("Succesfully Saved");
    })
navigate("/login")
  }).catch((err)=>{
    console.log(err)
  })
}

  return (
    <div style={{textAlign:"center"}}>
      <h1>Sign Up</h1>
<Box>
<Box  sx={{display:"flex",alignItems: "center",flexDirection:"column"}} >
<TextField onChange={(e)=>setuserObj({...userObj,name:e.target.value})} required={true} sx={{marginBottom:2 ,marginTop:5}} size='medium' label="Enter Name" variant="outlined"></TextField>
<TextField onChange={(e)=>setuserObj({...userObj,email:e.target.value})} required={true} sx={{marginBottom:2}} size='medium' label="Enter Email" variant="outlined"></TextField>
<TextField onChange={(e)=>setuserObj({...userObj,password:e.target.value})} required={true} size='medium' label="Enter Password" variant="outlined"></TextField>
<span><Button onClick={signUp} sx={{marginTop:5}} variant="contained">Sign Up</Button></span>
</Box> 
</Box>
    </div>
  ) 
}

export default SignUp
