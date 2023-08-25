import { Box } from "@mui/material";
import { Description } from "./Description";
import { Features } from "./Features";
import { Header } from "./Header";


export function Content(){
    return  <Box>
    <Header/>
    <Description/>
    <Features/>
    </Box>
   
}