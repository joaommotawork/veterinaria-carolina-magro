import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo1 from '../../../public/branding/logoLettersBlue1.svg';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export interface IFooterItems {
	text: string;
	href: string;
}

export interface IFooterSection {
	title: string;
	items: IFooterItems[];
}

interface FooterProps {
	footerSections?: IFooterSection[];
}

export default function Footer({ footerSections }: FooterProps) {
	const router = useRouter();

	return (
		<footer className='bg-white'>
			<div className='flex items-center justify-center py-10 mx-auto px-60'>
				<Image
					alt='Mountains'
					src={logo1}
					width={350}
					height={237.5}
					sizes='100vw'
					style={{
						width: '20%',
						height: 'auto',
					}}
				/>
				<div className='flex justify-between w-full h-full gap-10 ml-20'>
					{footerSections?.map((section, index) => (
						<div className='flex flex-col px-4' key={index}>
							<h2 className='mb-3 text-lg font-medium text-left'>
								{section.title}
							</h2>
							<nav className='flex flex-col mb-10 list-none'>
								{section.items.map((item, index) => (
									<button
										className='text-left text-black capitalize hover:text-[#537ABB]'
										key={index}
										onClick={() => router.push(item.href)}>
										{item.text}
									</button>
								))}
							</nav>
						</div>
					))}
					<div className='flex flex-col items-center justify-center gap-5 text-center'>
						<div className='flex flex-col gap-1'>
						<a href='mailto:cm@carolinamagro.pt' target='_blank' className='cursor-pointer' rel="noreferrer">
							cm@carolinamagro.pt
						</a>
						<a href='mailto:carolinamagrovet@gmail.com' target='_blank' className='cursor-pointer' rel="noreferrer">
							carolinamagrovet@gmail.com
						</a>
						</div>
						<div className='flex gap-5'>
							<FaInstagram
								className='text-3xl cursor-pointer hover:text-[#537ABB]'
								href='www.instagram.com'
								target='_blank'
							/>
							<FaFacebook
								className='text-3xl cursor-pointer hover:text-[#537ABB]'
								href='www.facebook.com'
								target='_blank'
							/>
							<FaLinkedin
								className='text-3xl cursor-pointer hover:text-[#537ABB]'
								href='www.linkedin.com'
								target='_blank'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[#537ABB] px-60 sticky top-[100vh] text-white'>
				<div className='container flex px-5 py-4 mx-auto'>
					<p className='text-sm'>
						©2023 - Drª Carolina Magro - Exotic Vet. 537ABB
					</p>
					<span className='flex'></span>
				</div>
			</div>
		</footer>
	);
}
