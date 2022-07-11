import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import Avatar from '../avatar/Avatar';
import './OnlineUsers.scss';
const OnlineFriends = () => {
	const { user } = useAuthContext();
	const { error, documents } = useCollection('users');

	// add friends from db to friends list
	let arr = [];

	documents &&
		documents.filter((document) => {
			if (document.id === user.uid) {
				document.friends.map((f) => {
					return arr.push(f);
				});
			}
		});

	const friendsList = [];
	documents &&
		documents.filter((document) => {
			documents.map((user) => {
				arr.map((f) => {
					if (user.email === f) {
						friendsList.push(user);
					}
				});
			});
		});

	let test = [...new Set(friendsList)];

	return (
		<div className='user-list'>
			{/* return user object by comparing email addresses */}
			{error && <div className='error'>{error}</div>}
			{test.map((f) => (
				<div className='friend'>
					<Avatar src={f.photoURL} />
					<p>{f.displayName}</p>
					{f.online && <span className='online-user'></span>}
				</div>
			))}
		</div>
	);
};

export default OnlineFriends;
