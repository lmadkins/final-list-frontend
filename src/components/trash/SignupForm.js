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

const SignupForm = ({ handleChange, handleSubmit, formState }) => {
    return (
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
            <LockOutlinedIcon />
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
    )
}

export default SignupForm;