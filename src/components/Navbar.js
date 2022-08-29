import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <>
        {/* if no user right now, show these links */}
    <Link to='/users/signup'>Get Started</Link>
    <Link to='/users/login'>Login</Link> 

    {/* if no user right now, show these links */}
    <Link to='/users/login'>Login</Link> 

    </>
    )
}

export default Navbar;