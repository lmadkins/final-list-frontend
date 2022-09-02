import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// handle change
// handle submit
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../Home'
import axios from 'axios';
// import SignupForm from './SignupForm';

const Signup = () => {

    const navigate = useNavigate()
    // const [error, setError] = useState(null)
    const initialState = {
        displayname: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    // const { currentUser, setCurrentUser } = useContext(UserContext)

    // const [newUser, setNewUser] = useState(initialState)
    const [formState, setFormState] = useState(initialState);

    // const [loginInfo, setLoginInfo] = useState({ email: '',  password: '' })
    // const [signup]
    // useEffect(() => {
    //     setCurrentUser({ key: 'email', value: loginInfo.email})
    //     currentUser.token && navigate('/')
    // }, [setCurrentUser.token])


    const handleChange = (event) => {
        // setCurrentUser({
        //     key: event.target.classList[0],
        //     value: event.target.value 
        // })
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    function handleSubmit (event) {
        event.preventDefault()
        // if (newUser.email !== '' && newUser.password !== ''){
            formState.password === formState.confirmPassword &&
            axios.post('https://radiant-sierra-50882.herokuapp.com/users/signup', formState)
            .then(res => {
                    // save token to local storage
                    // window.localStorage.setItem("Token", res.data.token)
                    // save email to local storage
                    window.localStorage.setItem("Email", formState.email)
                    setFormState(initialState)
                localStorage.setItem('token', res.data.token)
                    localStorage.setItem('id', res.data.id)
                    // window.localstorage?
            })
            .then(() => {
                navigate('/lists')
            })
            .catch(err => {
                // if (err.response.data.includes("User validation failed: email: Invalid email")) {
                //     setError("Please enter a valid email.")
                // }
                // else {
                //     setError(err.response.data)
                // }
            })
        }


    return (
    <>
        <Container component="main" maxWidth="xs">

        <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FactCheckIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign up
        </Typography>

                {/* add  onSubmit={handleSubmit} to Box */}
        <Box component="form" noValidate  sx={{ mt: 3 }}
        >
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                // autoComplete="given-name"
                name="displayname"
                required
                fullWidth
                id="displayname"
                label="Your Name"
                autoFocus
                value={formState.displayname}
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formState.email}
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formState.password}
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                name="confirmPassword"
                label="ConfirmPassword"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                value={formState.confirmPassword}
                onChange={handleChange}
                />
            </Grid>
            </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            >
            Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
            <Grid item>
                <Link href="/users/login" variant="body2">
                Already have an account? Sign in
                </Link>
            </Grid>
            </Grid>
        </Box>
        </Box>

    </Container>
    </>
    )
}

export default Signup;