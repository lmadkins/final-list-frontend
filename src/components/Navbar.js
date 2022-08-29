import { Link } from 'react-router-dom'

const Navigate = () => {
    return (
    <>
            {/* if no user right now, show these links */}
    <Link to='/users/signup'>Get Started</Link>
    <Link to='/users/login'>Login</Link> 

    {/* if no user right now, show these links */}

    </>
    )
}

export default Navigate;