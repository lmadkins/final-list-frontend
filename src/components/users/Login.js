
// use navigate - use navigate
// to navigate after signup

// use effect dispatchUser, when token changes, navigate to /
// handle change
// dispatch
// handle submit
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Home'
import axios from 'axios';

import LoginForm from "./LoginForm";


const Login = () => {

    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const initialState = { email: '',  password: '' }

    const [formState, setFormState] = useState(initialState);

    // useEffect(() => {
    //     setCurrentUser({ key: 'email', value: currentUser.email})
    //     currentUser.token && navigate('/')
    // }, [currentUser.token, setCurrentUser])


    const handleChange = (event) => {
        // setCurrentUser({
        //     key: event.target.classList[0],
        //     value: event.target.value 
        // })
        setFormState({...formState, [event.target.id]: event.target.value})
        // setCurrentUser({...currentUser, [event.target.id]: event.target.value})
    }

    function handleSubmit (event) {
        event.preventDefault()
        if (formState.email !== '' && formState.password !== ''){
            axios.post('http://localhost8000/users/login', setCurrentUser)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                    localStorage.setItem('id', res.data.id)
                    // window.localstorage?
            })
            .then(() => {
                console.log('submitted')
                navigate('/lists')
            })
            .catch(err => {
                setError("Provided email or password is incorrect.")
            })
        } 
    }

    return (
    <>

        <LoginForm 
        onChange= {handleChange}
        onSubmit = {handleSubmit}
        // loginInfo = { loginInfo }
        formState = {formState}
        />
    </>
    )
}

export default Login;