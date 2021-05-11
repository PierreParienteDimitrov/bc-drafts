import SidebarLayout from '../../../layouts/SidebarLayout';
import SiteLayout from '../../../layouts/SiteLayout';

const AllContainers = () => {
	return (
		<div>
			<p>This is the all appointments</p>
		</div>
	);
};

AllContainers.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default AllContainers;
