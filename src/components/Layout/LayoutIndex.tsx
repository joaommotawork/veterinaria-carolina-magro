import { Button } from '@mui/material';
import { Montserrat } from '@next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import logo1 from '../../../public/branding/logoLettersBlue1.svg';
import logo from '../../../public/branding/logoLettersBlue.svg';
import Header, { IHeaderItems } from './Header';
import Footer, { IFooterSection } from './Footer';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--montserrat-font',
});

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
	return (
		<div
			className={`flex flex-col min-h-screen min-w-screen ${montserrat.variable} font-sans`}>
			<Header headerItems={headerItems} />
			<main className='relative flex flex-col h-full min-h-screen pt-60'>
				{children}
			</main>
			<Footer footerSections={footerSections} />
		</div>
	);
}
