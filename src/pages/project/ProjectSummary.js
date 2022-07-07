import AssignedUser from '../../components/project-list/AssignedUser';
import { useFirestore } from '../../hooks/useFirestore';
import { useAuthContext } from '../../hooks/useAuthContext';
import './Project.scss';
import '../../components/project-list/AssignedUser.scss';
import { useHistory } from 'react-router-dom';

const ProjectSummary = ({ project }) => {
	const { deleteDocument } = useFirestore('projects');
	const { user } = useAuthContext();

	const history = useHistory();

	const handleClick = (e) => {
		deleteDocument(project.id);
		history.push('/');
	};

	return (
		<div>
			<div className='project-summary'>
				<h2 className='page-title'>{project.name}</h2>
				<p>By {project.createdBy.displayName}</p>
				<p className='due-date'>
					Project due by {project.dueDate.toDate().toDateString()}
				</p>
				<p className='details'>{project.details}</p>
				<h4>Project is assigned to: </h4>
				<div className='assigned-users'>
					{project.assignedUsersList.map((user) => (
						<AssignedUser user={user} key={user.id} />
					))}
				</div>
			</div>
			{user.uid === project.createdBy.id && (
				<button className='btn' onClick={handleClick}>
					Mark as Complete
				</button>
			)}
		</div>
	);
};

export default ProjectSummary;
