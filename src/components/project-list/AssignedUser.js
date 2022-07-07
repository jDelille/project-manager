import React, { useState } from 'react';
import Avatar from '../avatar/Avatar';
import './AssignedUser.scss';

const AssignedUser = ({ user }) => {
	const [showName, setShowName] = useState(false);

	return (
		<li
			key={user.photoURL}
			className='assigned-user-item'
			onMouseOver={() => setShowName(true)}
			onMouseOut={() => setShowName(false)}>
			{showName && <p className='assigned-user-name'>{user.displayName}</p>}
			<Avatar src={user.photoURL} />
		</li>
	);
};

export default AssignedUser;
