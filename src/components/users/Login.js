// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
// import { useContext} from 'react';
import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../Home'
import axios from 'axios';

// import LoginForm from "./LoginForm";


const Login = () => {

    const navigate = useNavigate()
    const [error, setError] = useState(null)
    // const { currentUser, setCurrentUser } = useContext(UserContext)

    const initialState = { email: '',  password: '' }

    const [formState, setFormState] = useState(initialState);


    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        // setCurrentUser({
        //     key: event.target.classList[0],
        //     value: event.target.value 
        // })
        setFormState({...formState, [event.target.id]: event.target.value})

        setUser({...user, [event.target.id]: event.target.value})
    }


    function handleSubmit (event) {
        event.preventDefault()
        if (formState.email !== '' && formState.password !== ''){
            axios.post('http://localhost:8000/users/signin', formState)
            .then(res => {
                // console.log(res.data.token)
                // console.log(res.data.email)
                // console.log(formState.password)
            
                window.localStorage.setItem('token', res.data.token)
                window.localStorage.setItem("Email", formState.email)
            })
            .then(() => {
                setFormState(initialState)
                // console.log(currentUser)
                navigate('/lists')
            })
            .catch(err => {
                setError("Provided email or password is incorrect.")
            })
        } 
    }
 
    // useEffect(() => {
    //     setCurrentUser({ key: 'email', value: formState.email})
    //     formState.token && navigate('/lists')
    // }, [formState.token])

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
        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
        Welcome back to Final List <br></br>
        {/* Please sign in below */}
        </Typography>
        <Box component="form"   noValidate sx={{ mt: 1 }}
        onSubmit={handleSubmit}
        >    
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
            sx={{ mt: 3, mb: 2 }}>
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
    )
}

export default Login;