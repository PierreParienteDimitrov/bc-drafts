import SidebarLayout from '../../../layouts/SidebarLayout';
import SiteLayout from '../../../layouts/SiteLayout';

const Empties = () => {
	return (
		<div>
			<p>This is the all empties</p>
		</div>
	);
};

Empties.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default Empties;
