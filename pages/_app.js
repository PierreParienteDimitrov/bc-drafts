import SiteLayout from '../layouts/SiteLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const getLayout =
		Component.getLayout || ((page) => <SiteLayout children={page} />);
	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
