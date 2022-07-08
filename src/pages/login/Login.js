import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { Link } from 'react-router-dom';
import './Login.scss';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, isPending, error } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<form className='auth-form' onSubmit={handleSubmit}>
			<h2> Login </h2>
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
			<p className='forgot-password-link'> Forgot Password ?</p>
			{!isPending && <button className='signup-btn'> Login </button>}
			{isPending && (
				<button className='signup-btn' disabled>
					Loading
				</button>
			)}
			<p className='redirect-link'>
				Not a member? <Link to='/signup'>Create an account</Link>
			</p>
		</form>
	);
}
