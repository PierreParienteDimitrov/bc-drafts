import SideNav from '../../components/SideNav';
import SidebarLayout from '../../layouts/SidebarLayout';
import SiteLayout from '../../layouts/SiteLayout';

const Appointments = () => {
	return (
		<div>
			<p>Home</p>
		</div>
	);
};

Appointments.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default Appointments;
