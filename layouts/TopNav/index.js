import Link from 'next/link';
import { useRouter } from 'next/router';
import TopNavBtn from '../../components/TopNavBtn';
import { topNavLinks } from '../../utils/nav/topNavLinks';

const TopNav = () => {
	const router = useRouter();

	return (
		<ul className='w-full h-16 px-8 flex items-center bg-white shadow-inner z-50'>
			{topNavLinks.map((el, index) => {
				return (
					<TopNavBtn
						key={index}
						title={el.title}
						bgColor={router.pathname == el.href ? 'bg-gray-200' : ''}
						fontWeight={router.pathname == el.href ? 'font-medium' : 'font-light'}
						href={el.href}
					/>
				);
			})}
		</ul>
	);
};

export default TopNav;
