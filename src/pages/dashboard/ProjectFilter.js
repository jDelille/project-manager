import './Dashboard.scss';

const filterList = ['all', 'mine', 'development', 'design'];

const ProjectFilter = ({ currentFilter, changeFilter }) => {
	return (
		<div className='project-filter'>
			<nav>
				<p>Filter:</p>
				{filterList.map((f) => {
					return (
						<button
							key={f}
							onClick={() => changeFilter(f)}
							className={currentFilter === f ? 'active' : ''}>
							{f}
						</button>
					);
				})}
			</nav>
		</div>
	);
};

export default ProjectFilter;
