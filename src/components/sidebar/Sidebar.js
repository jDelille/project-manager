import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { MdSpaceDashboard, MdAdd } from 'react-icons/md';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import './Sidebar.scss';
import { useState } from 'react';
import OnlineUsers from '../online-users/OnlineUsers';

const Sidebar = () => {
	const { user } = useAuthContext();

	const [expandSidebar, setExpandSidebar] = useState(true);

	return (
		<div className={expandSidebar ? 'sidebar' : 'shrink-sidebar'}>
			<div className='sidebar-content'>
				<div className={expandSidebar ? 'user' : 'user-shrink'}>
					<img src='../images/logo.png' alt='' />
					<div className='user-info'>
						<p className={expandSidebar ? 'user-name' : 'hide'}>
							{user.displayName}
						</p>
						<p className={expandSidebar ? 'user-email' : 'hide'}>
							{user.email}
						</p>
					</div>
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
				{user && <OnlineUsers expandSidebar={expandSidebar} />}
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
