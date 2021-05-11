import Link from 'next/link';
import { useRouter } from 'next/router';
import { appointmentsNav } from '../../utils/nav/appointmentsNav';

const SideNav = () => {
	const router = useRouter();

	return (
		<ul className='w-full bg-gray-200 relative h-full min-h-screen shadow-sideNav z-10 px-2 py-4'>
			{appointmentsNav.map((el, index) => {
				return (
					<li
						key={index}
						className={
							router.pathname == el.href
								? 'flex shadow-sideBtn rounded-md bg-blue-300'
								: 'flex rounded-md'
						}
					>
						<Link href={el.href}>
							<a className='px-4 py-2'>{el.title}</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default SideNav;
