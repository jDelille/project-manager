import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-content'>
				<div className='user'>
					{/* { avatar and username here later } */} <p> Hey User</p>
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
