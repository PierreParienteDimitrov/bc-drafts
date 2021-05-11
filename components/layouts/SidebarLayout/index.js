import SideNav from '../../SideNav';
import styles from './SidebarLayout.module.css';

const SidebarLayout = ({ children }) => {
	return (
		<div className={styles.main}>
			<SideNav />
			<div className='relative top-16 left-60'>{children}</div>
		</div>
	);
};

export default SidebarLayout;
