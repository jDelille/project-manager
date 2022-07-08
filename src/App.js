import { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

// styles
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './Themes.js';
import './styles/App.scss';
const StyledApp = styled.div``;

function App() {
	const { user, authIsReady } = useAuthContext();
	const [theme, setTheme] = useState(true);

	return (
		<StyledApp className='App'>
			{authIsReady && (
				<BrowserRouter>
					<ThemeProvider theme={theme ? lightTheme : darkTheme}>
						<GlobalStyles />

						{user && <Sidebar />}
						<div className='container'>
							<Navbar setTheme={setTheme} theme={theme} />
							<div className='page-content'>
								<Switch>
									<Route exact path='/'>
										{!user && <Redirect to='/login' />}
										{user && <Dashboard />}
									</Route>
									<Route path='/create'>
										{!user && <Redirect to='/login' />}
										{user && <Create />}
									</Route>
									<Route path='/projects/:id'>
										{!user && <Redirect to='/login' />}
										{user && <Project />}
									</Route>
									<Route path='/login'>
										{user && <Redirect to='/' />}
										{!user && <Login />}
									</Route>
									<Route path='/signup'>
										{user && <Redirect to='/' />}
										{!user && <Signup />}
									</Route>
								</Switch>
							</div>
						</div>
					</ThemeProvider>
				</BrowserRouter>
			)}
		</StyledApp>
	);
}

export default App;
