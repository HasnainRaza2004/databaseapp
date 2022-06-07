import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { loginUser } from '../config/firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';


const Login = () => {

const [userObj,setuserObj] = useState({});
const navigate = useNavigate()

const SignIn = () =>{
  if(!userObj.email){
    alert("Email is Required")
    return;
}
if(!userObj.password || userObj.password.length < 6){
  alert("Password is required and Password must be at least 6 characters")
    return ;
  }

console.log(userObj)
loginUser(userObj)
.then((success) =>{
  console.log("Logged In Successfully")
  navigate(`/${success.user.uid}`)

})
.catch((err)=>{
  console.log(err);
})
}
  return (
    <div style={{textAlign:"center"}}>
      <h1>Login</h1>
<Box>
<Box sx={{display:"flex",alignItems: "center",flexDirection:"column"}} >
<TextField onChange={(e)=>setuserObj({...userObj,email:e.target.value})} required={true} sx={{marginBottom:2 ,marginTop:5}} size='medium' label="Enter Email" variant="outlined"></TextField>
<TextField onChange={(e)=>setuserObj({...userObj,password:e.target.value})} required={true} size='medium' label="Enter Password" variant="outlined"></TextField>
<span><Button onClick={SignIn} sx={{marginTop:5}} variant="contained">Login</Button></span>
</Box>
</Box>
    </div>
  )
}

export default Login
