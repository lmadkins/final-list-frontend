import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Signup from './users/Signup';
import Login from './users/Login';

import { UserContext } from './Home'

const Navbar = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    
    return (
    <>
        {/* if no user right now, show these links */}
    {currentUser == '' &&
        <nav>
        <Link to='/users/signup'>Get Started</Link>

        <Link to='/users/signin'>Login</Link> 
        </nav>
    }
    <Link to= '/users/signin'> Logout</Link>
    <Link to= '/users/login'> Logout</Link>


    {/* if no user right now, show these links */}
    {/* <Link to='/lists'>Lists</Link>  */}

    </>
    )
}

export default Navbar;