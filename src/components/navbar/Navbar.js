import React, { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { BsChevronDown } from 'react-icons/bs';
import './Navbar.scss';
import Avatar from '../avatar/Avatar';
import Settings from './Settings';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
	const { user } = useAuthContext();

	const [showSettings, setShowSettings] = useState(false);

	return (
		<nav className='navbar'>
			<ul>
				<li className='logo'>
					<Link exact to='/'>
						Code Deli
					</Link>
				</li>
				<li className='auth-links'>
					{user && (
						<div
							className='user-controls'
							onClick={() => setShowSettings(!showSettings)}>
							<Avatar src={user?.photoURL} />
							<BsChevronDown className='icon' />
						</div>
					)}

					{showSettings && (
						<Settings
							user={user}
							theme={theme}
							setTheme={setTheme}
							setShowSettings={setShowSettings}
						/>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
