import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { useContext } from 'react';
// import { UserContext } from '../Home'

const LoginForm = ({ handleChange, handleSubmit, formState }) => {
return (
    <Container component="main" maxWidth="xs" >
    <Box
        sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}
    >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Sign in
        </Typography>
        <Box component="form"   noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            htmlFor = 'email'
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formState.email}
            onChange={handleChange}
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            htmlFor = 'password'
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formState.password}
            onChange={handleChange}
        />
        {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
        /> */}
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            
        >
            Sign In
        </Button>
        <Grid container>
            {/* <Grid item xs>
            <Link href="#" variant="body2">
                Forgot password?
            </Link>
            </Grid> */}
            <Grid item>
            <Link href="/users/signup" variant="body2">
                {"Don't have an account yet? Sign Up"}
            </Link>
            </Grid>
        </Grid>
        </Box>
    </Box>

    </Container>
)};

export default LoginForm;