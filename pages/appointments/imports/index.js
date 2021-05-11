import SidebarLayout from '../../../layouts/SidebarLayout';
import SiteLayout from '../../../layouts/SiteLayout';

const Imports = () => {
	return (
		<div>
			<p>This is Imports</p>
		</div>
	);
};

Imports.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default Imports;
