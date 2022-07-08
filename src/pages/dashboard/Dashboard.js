import { useState } from 'react';
import ProjectList from '../../components/project-list/ProjectList';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import './Dashboard.scss';
import ProjectFilter from './ProjectFilter';

export default function Dashboard() {
	const { user } = useAuthContext();
	const { documents, error } = useCollection('projects');
	const [currentFilter, setCurrentFilter] = useState('all');

	const changeFilter = (newFilter) => {
		setCurrentFilter(newFilter);
	};

	const projects = documents
		? documents.filter((document) => {
				switch (currentFilter) {
					case 'all':
						return true;
					case 'mine':
						let assignedToMe = false;
						document.assignedUsersList.forEach((u) => {
							if (user.uid === u.id) {
								assignedToMe = true;
							}
						});
						return assignedToMe;
					case 'development':
					case 'design':
						return document.category === currentFilter;
					default:
						return true;
				}
		  })
		: null;

	return (
		<div>
			<div className='page-header'>
				<h2 className='page-title'> Projects </h2>
				{error && <p className='error'>{error}</p>}
				{documents && (
					<ProjectFilter
						currentFilter={currentFilter}
						changeFilter={changeFilter}
					/>
				)}
			</div>

			{projects && <ProjectList projects={projects} />}
		</div>
	);
}
