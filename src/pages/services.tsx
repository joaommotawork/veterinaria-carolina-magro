import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import CarolinaMagro from '../../public/images/background.jpeg';

export default function Services() {
	const { t } = useTranslation('common');

	return (
		<>
			<Head>
				<title>Veterinária Carolina Mago</title>
			</Head>
			<section className='flex flex-col items-center justify-center px-60'>
				<div className="bg-[url('/images/backgroundForest.jpg')] h-[600px] w-screen absolute top-0 -z-10 bg-no-repeat bg-cover bg-top left-0" />
				<div className='flex flex-col w-full px-10 py-10 mt-20 bg-white border border-black h-[385px] gap-10 justify-center '>
					<h1 className='text-5xl font-bold'>
						{t('services.mainCard.title')}
					</h1>
					<div className=''>
						<p>{t('services.mainCard.text')}</p>
					</div>
				</div>
				<div className='flex w-full px-10 py-10 bg-white  h-[280px] gap-10 justify-center border-t-0'>
					<div className='relative flex flex-1 w-1/3'>
						<Image
							alt={t('homePage.whereToFindMe.vetOeiras.title')}
							src={CarolinaMagro}
							fill
							style={{
								objectFit: 'cover',
							}}
						/>
					</div>
					<div className='flex flex-col w-2/3'>
						<h1 className='text-3xl font-bold'>
							{t('services.consultancyCard.title')}
						</h1>
						<div className=''>
							<p>{t('services.consultancyCard.text1')}</p>
							<p>{t('services.consultancyCard.text2')}</p>
						</div>
					</div>
				</div>
				<div className='flex w-full px-10 py-10 bg-white  h-[280px] gap-10 justify-center border-t-0'>
					<div className='flex flex-col w-2/3'>
						<h1 className='text-3xl font-bold'>
							{t('services.surgeryAndAnesthesiaCard.title')}
						</h1>
						<div className=''>
							<p>
								{t('services.surgeryAndAnesthesiaCard.text')}
							</p>
						</div>
					</div>
					<div className='relative flex flex-1 w-1/3'>
						<Image
							alt={t('homePage.whereToFindMe.vetOeiras.title')}
							src={CarolinaMagro}
							fill
							style={{
								objectFit: 'cover',
							}}
						/>
					</div>
				</div>
				<div className='flex w-full px-10 py-10 bg-white  h-[280px] gap-10 justify-center border-t-0'>
					<div className='relative flex flex-1 w-1/3'>
						<Image
							alt={t('homePage.whereToFindMe.vetOeiras.title')}
							src={CarolinaMagro}
							fill
							style={{
								objectFit: 'cover',
							}}
						/>
					</div>
					<div className='flex flex-col w-2/3'>
						<h1 className='text-3xl font-bold'>
							{t('services.testsCard.title')}
						</h1>
						<div className=''>
							<p>{t('services.testsCard.text')}</p>
						</div>
					</div>
				</div>
				<div className='flex w-full px-10 py-10 bg-white  h-[280px] gap-10 justify-center border-t-0'>
					<div className='flex flex-col w-2/3'>
						<h1 className='text-3xl font-bold'>
							{t('services.imagingServicesTest.title')}
						</h1>
						<div className=''>
							<p>{t('services.imagingServicesTest.text')}</p>
						</div>
					</div>
					<div className='relative flex flex-1 w-1/3'>
						<Image
							alt={t('homePage.whereToFindMe.vetOeiras.title')}
							src={CarolinaMagro}
							fill
							style={{
								objectFit: 'cover',
							}}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
