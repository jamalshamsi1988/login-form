import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useStyles } from './login.style';
import { Btn } from './../common/StyledButton';

const Login = () => {
    const classes = useStyles()
    return (
      <Box className={classes.loginMain}>
        <Container>
          <Box>
            <Typography variant="h3">Game shop</Typography>
            <form>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                color="primary"
              />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                color="primary"
              />
              <Btn variant="contained" color="primary">
               Sign Up
              </Btn>
            </form>
          </Box>
        </Container>
      </Box>
    );
}
 
export default Login;