import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import './Navbar.scss';

const Navbar = () => {
	const { logout, isPending } = useLogout();
	const { user } = useAuthContext();

	return (
		<nav className='navbar'>
			<ul>
				<li className='logo'>
					<span> Deli </span>
				</li>
				<li className='auth-links'>
					{!user && (
						<>
							<Link to='/login'> Login </Link>
							<Link to='/signup'> Signup </Link>
						</>
					)}

					{!isPending && user && (
						<button className='logout-btn' onClick={logout}>
							Logout
						</button>
					)}
					{isPending && user && (
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
