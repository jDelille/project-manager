import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Navbar from './components/navbar/Navbar';
import './styles/App.scss';
import Sidebar from './components/sidebar/Sidebar';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Sidebar />
				<div className='container'>
					<Navbar />
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
