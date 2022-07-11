import { useState } from 'react';
import { projectFirestore, projectAuth } from '../../firebase/config';
import { useCollection } from '../../hooks/useCollection';
import firebase from 'firebase/app';
import './AddFriend.scss';

// store friend in database with their email
// fetch all their data by matching friend list email with email of user in database

const AddFriend = ({ showModal, setShowModal }) => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	const { documents } = useCollection('users');

	const sendFriendRequest = (e) => {
		e.preventDefault();
		documents &&
			documents.filter((document) => {
				// check if email exists
				if (document.email === email) {
					setError(false);
					const userUID = projectAuth.currentUser.uid;
					projectFirestore
						.collection('users')
						.doc(userUID)
						.update({
							friends: firebase.firestore.FieldValue.arrayUnion(email),
						});
					setShowModal(false);
				}
				if (document.email !== email) {
					setError(true);
				}
			});
	};

	return (
		<>
			<div className='overlay'></div>
			<div className='add-friend-modal'>
				<form onSubmit={sendFriendRequest}>
					<label>
						<span>Add Friend</span>
						{error && <p className='error'>User does not exist</p>}

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
