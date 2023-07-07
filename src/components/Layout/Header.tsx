import Image from 'next/image';
import { useRouter } from 'next/router';
import CarolinaMagroLogoCoelho from '../../../public/branding/carolina-magro-logo-coelho.webp';

export interface IHeaderItems {
	text: string;
	href: string;
}

interface HeaderProps {
	headerItems?: IHeaderItems[];
}

export default function Header({ headerItems }: HeaderProps) {
	const router = useRouter();

	const { pathname, asPath, query, locale: activeLocale } = router;

	const changeLocale = (locale: string) => {
		router.push({ pathname, query }, asPath, { locale: locale });
		document.cookie = `NEXT_LOCALE=${locale}`;
	};

	return (
		<header className='sticky top-0 z-50 flex-none w-full py-5 bg-white px-60'>
			<div className='flex flex-col items-center justify-center gap-5'>
				<a className='flex items-center justify-center order-none w-1/2 mb-0 font-medium text-gray-900 cursor-pointer title-font'>
					<Image
						alt='Carolina Magro Logo Coelho'
						src={CarolinaMagroLogoCoelho}
						width={350}
						height={237.5}
						sizes='100vw'
						style={{
							width: '70%',
							height: 'auto',
						}}
					/>
				</a>
				<nav className='flex flex-wrap items-center gap-3 text-sm'>
					{headerItems?.map((item, index) => (
						<a
							className='px-5 font-bold text-black rounded-full cursor-pointer'
							onClick={() => router.push(item.href)}
							key={item.text}>
							{item.text}
						</a>
					))}
					<a
						className='uppercase cursor-pointer'
						onClick={() =>
							changeLocale(activeLocale === 'en' ? 'pt' : 'en')
						}>
						{activeLocale === 'en' ? 'pt' : 'en'}
					</a>
				</nav>
			</div>
		</header>
	);
}
