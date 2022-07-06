import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';
import './Sidebar.scss';

const Sidebar = () => {
	const { user } = useAuthContext();

	return (
		<div className='sidebar'>
			<div className='sidebar-content'>
				<div className='user'>
					<Avatar src={user.photoURL} /> <p> Hey {user.displayName}</p>
				</div>
				<nav className='links'>
					<ul>
						<li>
							<NavLink exact to='/'>
								<span>Home</span>
							</NavLink>
							<NavLink to='/create'>
								<span>New Project</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
