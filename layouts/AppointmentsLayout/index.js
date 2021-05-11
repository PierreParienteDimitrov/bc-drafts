import React from 'react';

const appointmentsLayout = ({ children }) => {
	return (
		<div className={styles.main}>
			<SideNav />
			{children}
		</div>
	);
};

export default appointmentsLayout;
