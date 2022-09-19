import { makeStyles } from "@mui/material";
import { theme } from './../theme/index';

const primary=theme.palette.primary.main
const secondery = theme.palette.secondary.main
export const useStyles= makeStyles({

root:{
    backgroundColor:primary,
    "& h1":{
color:secondery,
    }
},
loginMain:{
    background: "linear-gradient(171.33deg,#FFFFFF 6.12% ,#E6E6E6 93.91%)",
    high:"60vh"
}




}) ;