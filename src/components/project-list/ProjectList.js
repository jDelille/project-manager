import { Link } from 'react-router-dom';
import { RiCodeSSlashLine } from 'react-icons/ri';
import './ProjectList.scss';
import AssignedUser from './AssignedUser';

const ProjectList = ({ projects }) => {
	return (
		<div className='project-list'>
			{projects.length === 0 && <p>No projects yet</p>}
			{projects.map((project) => (
				<Link
					to={`/projects/${project.id}`}
					key={project.id}
					className='project-box'>
					<h4>{project.name}</h4>
					<p>Due by {project.dueDate.toDate().toDateString()}</p>
					<div className='assigned-to'>
						<p> Assigned to: </p>
						<ul>
							{project.assignedUsersList.map((user) => (
								<AssignedUser user={user} key={user.id} />
							))}
						</ul>
					</div>
					<RiCodeSSlashLine className='icon' />
				</Link>
			))}
		</div>
	);
};

export default ProjectList;
