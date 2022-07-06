import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import './Navbar.scss';

const Navbar = () => {
	const { logout, isPending } = useLogout();

	return (
		<nav className='navbar'>
			<ul>
				<li className='logo'>
					<span> Deli </span>
				</li>
				<li className='auth-links'>
					<Link to='/login'> Login </Link>
					<Link to='/signup'> Signup </Link>
					{!isPending && (
						<button className='logout-btn' onClick={logout}>
							Logout
						</button>
					)}
					{isPending && (
						<button className='logout-btn' disabled>
							Logging out...
						</button>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
