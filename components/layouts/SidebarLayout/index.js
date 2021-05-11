import SideNav from '../../SideNav';
import styles from './SidebarLayout.module.css';

const SidebarLayout = ({ children }) => {
	return (
		<div className={styles.main}>
			<SideNav />
			<div>{children}</div>
		</div>
	);
};

export default SidebarLayout;
