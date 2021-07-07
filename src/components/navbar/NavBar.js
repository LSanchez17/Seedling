import {Link} from 'react-router-dom';

const NavBar = ({loggedIn}) => {
    return(
        <div>
            {loggedIn
            ?
            <nav>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>Plants</Link></li>
                    <li><Link>Weather</Link></li>
                    <li><Link>Social</Link></li>
                    <li><Link>Profile</Link></li>
                </ul>
            </nav>
            :
            <nav>
                <ul>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
            }
        </div>
    );
};

export default NavBar;