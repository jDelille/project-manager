import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { Link } from 'react-router-dom';
import './Signup.scss';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [thumbnail, setThumbnail] = useState(null);
	const [friend, setFriend] = useState([]);
	const [thumbnailError, setThumbnailError] = useState(null);
	const { signup, isPending, error } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, displayName, thumbnail, friend);
	};

	// thumbnail check
	const handleFileChange = (e) => {
		setThumbnail(null);
		let selected = e.target.files[0];
		// check if user hasn't selected a file
		if (!selected) {
			setThumbnailError('Please select a file');
			return;
		}
		// check if file isn't an image file
		if (!selected.type.includes('image')) {
			setThumbnailError('Selected file must be an image');
			return;
		}
		// check the image size
		if (selected.size > 100000) {
			setThumbnailError('Image file size must be less than 100kb');
			return;
		}
		// if file is valid
		setThumbnailError(null);
		setThumbnail(selected);
		console.log('thumbnail updated');
	};

	return (
		<form className='auth-form' onSubmit={handleSubmit}>
			<h2> Sign up</h2>
			{error && <div className='error'>{error}</div>}

			<label>
				<span>Email:</span>
				<input
					required
					type='email'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</label>
			<label>
				<span>Password:</span>
				<input
					required
					type='password'
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</label>
			<label>
				<span>Display name:</span>
				<input
					required
					type='text'
					onChange={(e) => setDisplayName(e.target.value)}
					value={displayName}
				/>
			</label>
			<label>
				<span>Profile picture:</span>
				<input
					required
					type='file'
					onChange={handleFileChange}
					className='profile-pic-input'
				/>
				{thumbnailError && <div className='error'>{thumbnailError}</div>}
			</label>
			{!isPending && <button className='signup-btn'> Sign up </button>}
			{isPending && (
				<button className='signup-btn' disabled>
					Loading
				</button>
			)}
			<p className='redirect-link'>
				Already have an account? <Link to='/login'> Sign in now </Link>
			</p>
		</form>
	);
}
