import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Create from './pages/create/Create';
import Project from './pages/project/Project';

import './styles/App.scss';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Switch>
						<Route exact path='/'>
							<Dashboard />
						</Route>
						<Route path='/create'>
							<Create />
						</Route>
						<Route path='/project/:id'>
							<Project />
						</Route>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/signup'>
							<Signup />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
