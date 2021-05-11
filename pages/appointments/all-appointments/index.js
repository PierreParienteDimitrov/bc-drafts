import SidebarLayout from '../../../layouts/SidebarLayout';
import SiteLayout from '../../../layouts/SiteLayout';

const AllAppointments = () => {
	return (
		<div>
			<p>This is the all appointments</p>
		</div>
	);
};

AllAppointments.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default AllAppointments;
