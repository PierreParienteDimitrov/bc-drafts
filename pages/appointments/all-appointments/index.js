import SidebarLayout from '../../../components/layouts/SidebarLayout';
import SiteLayout from '../../../components/layouts/SiteLayout';

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
