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
            <div className='grid justify-items-center'>
                <h2 className='bg-white p-2 m-2'>Today's Weather is ___</h2>
            </div>
            }
        </div>
    );
};

export default NavBar;