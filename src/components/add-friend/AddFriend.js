import { useState } from 'react';
import './AddFriend.scss';

// store friend in database with their email
// fetch all their data by matching friend list email with email of user in database

const AddFriend = ({ showModal, setShowModal }) => {
	const [email, setEmail] = useState('');

	const sendFriendRequest = (e) => {
		e.preventDefault();
		console.log(email);
		setEmail('');
	};

	return (
		<>
			<div className='overlay'></div>
			<div className='add-friend-modal'>
				<form onSubmit={sendFriendRequest}>
					<label>
						<span>Add Friend</span>
						<input type='email' onChange={(e) => setEmail(e.target.value)} />
					</label>
					<button> Add Friend </button>
				</form>
				<div className='close' onClick={() => setShowModal(false)}>
					close
				</div>
			</div>
		</>
	);
};

export default AddFriend;
