import Link from 'next/link';
import { useRouter } from 'next/router';
import { appointmentsNav } from '../../utils/nav/appointmentsNav';

const SideNav = () => {
	const router = useRouter();

	return (
		<div className='fixed w-60 top-16 flex flex-col space-y-80 bg-gray-200 h-full shadow-sideNav z-10 px-2 py-4'>
			<ul className='mb-10'>
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
								<a
									className={
										router.pathname == `/appointments/${el.href}`
											? 'px-4 py-2 text-white'
											: 'px-4 py-2'
									}
								>
									{el.title}
								</a>
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
