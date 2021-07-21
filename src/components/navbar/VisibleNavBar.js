import {Link} from 'react-router-dom';

const VisibleNavBar = () => {
    return (
        <div>
            <ul className='inline-block'>
                <li><Link to='/dashboard' exact>Home</Link></li>
                <li><Link to='/plants' exact>Plants</Link></li>
                <li><Link to='/weather' exact>Weather</Link></li>
                <li><Link to='/social' exact>Social</Link></li>
                <li><Link to='/profile' exact>Profile</Link></li>
            </ul>
        </div>
    );
};

export default VisibleNavBar;