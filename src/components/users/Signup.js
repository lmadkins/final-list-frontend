// imports
// react, usereducer from react
// usenavigate from <r-r-dom 
// axios all, axios reducer


// initial state empty form
// signup info/dispatch, use reducer 
// use navigate - use navigate
// to navigate after signpu

// handle change
// handle submit
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Home'
import axios from 'axios';
import SignupForm from './SignupForm';

const Signup = () => {

    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const initialState = {
        displayname: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const { currentUser, setCurrentUser } = useContext(UserContext)

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
            axios.post('http://localhost8000/users/signup', currentUser)
            .then(res => {
                    // save token to local storage
                    window.localStorage.setItem("Token", res.data.token)
                    // save email to local storage
                    window.localStorage.setItem("Email", formState.email)
                    setFormState(initialState)
                // localStorage.setItem('token', res.data.token)
                //     localStorage.setItem('id', res.data.id)
                    // window.localstorage?
            })
            .then(() => {
                navigate('/')
            })
            .catch(err => {
                // if (err.response.data.includes("User validation failed: email: Invalid email")) {
                //     setError("Please enter a valid email.")
                // }
                // else {
                    setError(err.response.data)
                // }
   
            })
    }

    return (
    <>
        <SignupForm 
        onChange= {handleChange}
        onSubmit = {handleSubmit}
        formState = {formState}
        />
    </>
    )
}

export default Signup;