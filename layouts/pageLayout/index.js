import Head from 'next/head';
import TopNav from '../TopNav';

const PageLayout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>BC Drafts</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<TopNav />
			{children}
		</div>
	);
};

export default PageLayout;
