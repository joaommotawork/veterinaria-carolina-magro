import { Button } from '@mui/material';
import { Montserrat } from '@next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import logo from '../../../public/branding/logoLettersBlue.svg';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--montserrat-font',
});

interface IHeaderItems {
	text: string;
	href: string;
}

interface IFooterItems {
	text: string;
	href: string;
}

interface IFooterSection {
	title: string;
	items: IFooterItems[];
}

interface LayoutProps {
	children?: ReactNode;
	headerItems?: IHeaderItems[];
	footerSections?: IFooterSection[];
}

export default function Layout({
	children,
	headerItems,
	footerSections,
}: LayoutProps) {
	const router = useRouter();

	return (
		<div
			className={`flex flex-col min-h-screen min-w-screen ${montserrat.variable} font-sans`}>
			<header className='absolute top-0 flex-none w-full py-5 bg-white px-60'>
				<div className='flex justify-between mx-auto'>
					<a className='flex items-center justify-center order-none mb-0 font-medium text-gray-900 cursor-pointer title-font'>
						<Image
							alt='Mountains'
							src={logo}
							width={350}
							height={237.5}
							sizes='100vw'
							style={{
								width: '75%',
								height: 'auto',
							}}
						/>
					</a>
					<nav className='flex flex-wrap items-center gap-5 ml-auto text-base'>
						{headerItems &&
							headerItems.map((item, index) => (
								<Button
									className='px-5 text-black rounded-full'
									onClick={() => router.push(item.href)}
									key={index}>
									{item.text}
								</Button>
							))}
						<button className='inline-flex flex-shrink-0 px-6 py-2 font-bold text-white bg-black border-0 rounded lg:mt-2 xl:mt-0 focus:outline-none hover:bg-black'>
							Contactar
						</button>
					</nav>
				</div>
			</header>
			<main className='relative flex flex-col h-full min-h-screen pt-60'>
				{children}
			</main>
			<footer className='bg-white'>
				<div className='flex items-center justify-center py-10 mx-auto px-60'>
					<div className='w-full h-full'>
						<h1 className='font-bold text-1xl'>Subscrever</h1>
						<div className='flex flex-wrap items-end justify-center xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start'>
							<div className='relative w-40 mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4'>
								<label
									htmlFor='footer-field'
									className='text-sm leading-7 text-gray-600'>
									Newsletter
								</label>
								<input
									type='text'
									id='footer-field'
									name='footer-field'
									className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-[#AFE2F2]'
								/>
							</div>
							<button className='inline-flex flex-shrink-0 px-6 py-2 bg-[#AFE2F2] border-0 rounded lg:mt-2 xl:mt-0 focus:outline-none hover:bg-[#AFE2F2]'>
								{'>'}
							</button>
						</div>
					</div>
					<div className='flex justify-end w-full h-full gap-10'>
						{footerSections &&
							footerSections.map((section, index) => (
								<div className='flex flex-col px-4' key={index}>
									<h2 className='mb-3 text-lg font-medium text-center'>
										{section.title}
									</h2>
									<nav className='flex flex-col mb-10 list-none'>
										{section.items.map((item, index) => (
											<Button
												className='px-5 text-sm text-black capitalize rounded-full'
												key={index}
												onClick={() =>
													router.push(item.href)
												}>
												{item.text}
											</Button>
										))}
									</nav>
								</div>
							))}
					</div>
				</div>
				<div className='bg-[#AFE2F2] px-60 sticky top-[100vh]'>
					<div className='container flex px-5 py-4 mx-auto'>
						<p className='text-sm'>© 2023</p>
						<span className='flex'></span>
					</div>
				</div>
			</footer>
		</div>
	);
}
