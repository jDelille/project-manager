import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';
import { MdSpaceDashboard, MdAdd } from 'react-icons/md';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import './Sidebar.scss';
import { useState } from 'react';

const Sidebar = () => {
	const { user } = useAuthContext();

	const [expandSidebar, setExpandSidebar] = useState(true);

	return (
		<div className={expandSidebar ? 'sidebar' : 'shrink-sidebar'}>
			<div className='sidebar-content'>
				<div className={expandSidebar ? 'user' : 'user-shrink'}>
					<Avatar src={user.photoURL} />
					{expandSidebar && (
						<p className='user-name'> Hey {user.displayName}</p>
					)}
				</div>
				<nav className='links'>
					<ul>
						<li>
							<NavLink exact to='/'>
								<span>
									<MdSpaceDashboard className='icon' />
									{expandSidebar && <span>Home</span>}
								</span>
							</NavLink>
							<NavLink to='/create'>
								<span>
									<MdAdd className='icon' />
									{expandSidebar && <span>New Project</span>}
								</span>
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className='expand'>
					{expandSidebar ? (
						<AiOutlineLeft
							className='icon'
							onClick={() => setExpandSidebar(false)}
						/>
					) : (
						<AiOutlineRight
							className='icon'
							onClick={() => setExpandSidebar(true)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
