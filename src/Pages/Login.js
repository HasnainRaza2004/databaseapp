import React from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';


const Login = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Login</h1>
<Box>
<Box sx={{display:"flex",alignItems: "center",flexDirection:"column"}} >
<TextField required={true} sx={{marginBottom:2 ,marginTop:5}} size='medium' label="Enter Email" variant="outlined"></TextField>
<TextField required={true} size='medium' label="Enter Password" variant="outlined"></TextField>
<span><Button sx={{marginTop:5}} variant="contained">Login</Button></span>
</Box>
</Box>
    </div>
  )
}

export default Login
