import Avatar from '../avatar/Avatar';
import { useLogout } from '../../hooks/useLogout';
import { MdSpaceDashboard, MdAdd } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { CgDarkMode } from 'react-icons/cg';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Settings = ({ user, theme, setTheme, setShowSettings }) => {
	const { logout, isPending } = useLogout();

	return (
		<div className='settings'>
			<div className='settings-header'>
				<div className='left-icon'>
					<Avatar src={user.photoURL} />
				</div>
				<p className='user-email'>{user.email}</p>
			</div>
			<div className='setting-links'>
				<div className='option mobile-option'>
					<div className='left-icon'>
						<MdSpaceDashboard className='icon' />
					</div>
					<Link exact to='/' onClick={() => setShowSettings(false)}>
						Home
					</Link>
				</div>
				<div className='option mobile-option'>
					<div className='left-icon'>
						<MdAdd className='icon' />
					</div>
					<Link to='/create' onClick={() => setShowSettings(false)}>
						New Project
					</Link>
				</div>
				<div className='option mobile-option'>
					<div className='left-icon'>
						<MdAdd className='icon' />
					</div>
					<Link to='/create' onClick={() => setShowSettings(false)}>
						Add Friend
					</Link>
				</div>
				<div className='option'>
					<div className='left-icon'>
						<CgDarkMode className='icon' />
					</div>
					<p onClick={() => setTheme(!theme)}>
						{theme ? <span> Dark Mode </span> : <span> Light Mode </span>}
					</p>
				</div>
			</div>
			<div className='logout'>
				<div className='left-icon'>
					<RiLogoutBoxRLine className='icon' />
				</div>
				<p onClick={logout}> Log out </p>
			</div>
		</div>
	);
};

export default Settings;
