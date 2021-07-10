import {Link} from 'react-router-dom';

const NavBar = ({loggedIn}) => {
    return(
        <div>
            {loggedIn
            ?
            <nav>
                <ul className='flex pl-2'>
                    <li className='flex-1 mr-2'>
                        <Link to='/dashboard' className='bg-white text-center block border border-white rounded hover:bg-blue-700 text-blue-500 hover:bg-gray-300 py-2 px-4'>Home</Link>
                    </li>
                    <li className='flex-1 mr-2'>
                        <Link to='/:id/plants' className='bg-white text-center block border border-white rounded hover:bg-blue-700 text-blue-500 hover:bg-gray-300 py-2 px-4'>Plants</Link>
                    </li>
                    <li className='flex-1 mr-2'>
                        <Link to='/weather' className='bg-white text-center block border border-white rounded hover:bg-blue-700 text-blue-500 hover:bg-gray-300 py-2 px-4'>Weather</Link>
                    </li>
                    <li className='flex-1 mr-2'>
                        <Link to=':id/social' className='bg-white text-center block border border-white rounded hover:bg-blue-700 text-blue-500 hover:bg-gray-300 py-2 px-4'>Social</Link>
                    </li>
                    <li className='flex-1 mr-2'>
                        <Link to='/:id/edit' className='bg-white text-center block border border-white rounded hover:bg-blue-700 text-blue-500 hover:bg-gray-300 py-2 px-4'>Profile</Link>
                    </li>
                </ul>
            </nav>
            :
            <nav>
                <ul className='flex pl-4 pr-2 pt-4'>
                    <li className='flex-1 mr-2'>
                        <Link to='/' className='bg-white text-center block border border-white rounded hover:bg-blue-700 text-blue-500 hover:bg-gray-300 py-2 px-4'>Home</Link>
                    </li>
                    <li className='flex-1 mr-2'>
                        <Link to='/register' className='bg-white text-center block border border-white rounded hover:bg-blue-700 text-blue-500 hover:bg-gray-300 py-2 px-4'>Register</Link>
                    </li>
                    <li className='flex-1 mr-2'>
                        <Link to='/login' className='bg-white text-center block border border-white rounded hover:bg-blue-700 text-blue-500 hover:bg-gray-300 py-2 px-4'>Login</Link>
                    </li>
                </ul>
            </nav>
            }
        </div>
    );
};

export default NavBar;