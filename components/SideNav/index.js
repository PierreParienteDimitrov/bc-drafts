import Link from 'next/link';
import { useRouter } from 'next/router';
import { appointmentsNav } from '../../utils/nav/appointmentsNav';

const SideNav = () => {
	const router = useRouter();

	return (
		<div className='flex flex-col space-y-80 bg-gray-200 relative h-full min-h-screen shadow-sideNav z-10 px-2 py-4'>
			<ul>
				{appointmentsNav.map((el, index) => {
					return (
						<li
							key={index}
							className={
								router.pathname == `/appointments/${el.href}`
									? 'flex shadow-sideBtn rounded-md bg-blue-300'
									: 'flex rounded-md'
							}
						>
							<Link href={`/appointments/${el.href}`}>
								<a className='px-4 py-2'>{el.title}</a>
							</Link>
						</li>
					);
				})}
			</ul>

			<button className='rounded-md w-full bg-orange-100 px-4 py-2 uppercase text-sm font-semibold tracking-wide shadow-ctaBtn'>
				Book Appointments
			</button>
		</div>
	);
};

export default SideNav;
