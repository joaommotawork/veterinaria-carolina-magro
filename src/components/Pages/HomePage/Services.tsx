import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Services() {
	const { t } = useTranslation('common');
	const router = useRouter();

	return (
		<>
			<section
				className='flex flex-col w-full h-full pt-20 pb-5 px-60'
				id='services'>
				<div className='flex flex-col justify-center'>
					<div className='flex flex-col items-center justify-center gap-5'>
						<h1 className='text-5xl font-semibold'>
							{t('homePage.services.title')}
						</h1>
						<p className=''>{t('homePage.services.subTitle')}</p>
					</div>
				</div>
			</section>
			<section className='flex flex-col w-full h-full gap-10 pt-5 pb-20 px-60'>
				<div className='grid w-full h-full grid-cols-3 grid-rows-1 gap-10'>
					<div className='bg-[#E3E3E3] w-full h-full flex flex-col p-10 gap-10'>
						<div className='flex justify-between'>
							<p className='text-3xl font-semibold'>
								{t('homePage.services.surgery.title')}
							</p>
							<p className='text-3xl'>01</p>
						</div>
						<p className=''>
							{t('homePage.services.surgery.text')}
						</p>
					</div>
					<div className='bg-[#E3E3E3] w-full h-full flex flex-col p-10 gap-10'>
						<div className='flex justify-between'>
							<p className='text-3xl font-semibold'>
								{t('homePage.services.tests.title')}
							</p>
							<p className='text-3xl'>02</p>
						</div>
						<p className=''>{t('homePage.services.tests.text')}</p>
					</div>
					<div className='bg-[#E3E3E3] w-full h-full flex flex-col p-10 gap-10'>
						<div className='flex justify-between'>
							<p className='text-3xl font-semibold'>
								{t('homePage.services.anesthesia.title')}
							</p>
							<p className='text-3xl'>03</p>
						</div>
						<p className=''>
							{t('homePage.services.anesthesia.text')}
						</p>
					</div>
				</div>
				<div className='grid w-full h-full grid-cols-2 grid-rows-1 gap-10'>
					<div className='bg-[#E3E3E3] w-full h-full flex flex-col p-10 gap-10'>
						<div className='flex justify-between'>
							<p className='text-3xl font-semibold'>
								{t('homePage.services.image.title')}
							</p>
							<p className='text-3xl'>04</p>
						</div>
						<p className=''>{t('homePage.services.image.text')}</p>
					</div>
					<div className='bg-[#E3E3E3] w-full h-full flex flex-col p-10 gap-10'>
						<div className='flex justify-between'>
							<p className='text-3xl font-semibold'>
								{t('homePage.services.consultancy.title')}
							</p>
							<p className='text-3xl'>05</p>
						</div>
						<p className=''>
							{t('homePage.services.consultancy.text')}
						</p>
					</div>
				</div>
				<button
					className='self-center px-20 py-2 font-bold text-white bg-black border-0 rounded w-fit focus:outline-none'
					onClick={() => router.push('/services')}>
					{t('homePage.aboutMe.callToAction')}
				</button>
			</section>
		</>
	);
}
