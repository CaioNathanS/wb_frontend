import {  Typography } from "@mui/material";
import pretoLogo from '../../assets/pretoLogo.png'


export function Title(){
    return  <Typography
      component="h1"
      variant="h2"
      align="center"
      color="text.primary"
      gutterBottom
    >
      <img alt="img" src={pretoLogo} style={{maxWidth:'400px'}} />
    </Typography>

   
}