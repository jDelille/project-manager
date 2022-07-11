import { useCollection } from '../../hooks/useCollection';
import Avatar from '../avatar/Avatar';
import { FaUsers } from 'react-icons/fa';
import './OnlineUsers.scss';

const OnlineUsers = () => {
	const { error, documents } = useCollection('users');
	return (
		<div className='user-list'>
			<div className='user-label'>
				<FaUsers className='icon' />
				<p>Users</p>
			</div>

			{error && <div className='error'>{error}</div>}
			{/* {documents &&
				documents.map((user) => (
					<div key={user.id} className='user-list-item'>
						<Avatar src={user.photoURL} />
						<span>{user.displayName}</span>
						{user.online && <span className='online-user'></span>}
					</div>
				))} */}
		</div>
	);
};

export default OnlineUsers;
