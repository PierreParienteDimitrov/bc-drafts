import SidebarLayout from '../../../components/layouts/SidebarLayout';
import SiteLayout from '../../../components/layouts/SiteLayout';

const Dashboards = () => {
	return (
		<div>
			<p>This is the dasboard</p>
		</div>
	);
};

Dashboards.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default Dashboards;
