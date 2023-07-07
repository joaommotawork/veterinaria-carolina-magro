import Head from 'next/head';
import CarolinaMagro from '../../public/images/background.jpeg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function AboutMe() {
	const { t } = useTranslation('common');

	return (
		<>
			<Head>
				<title>Veterinária Carolina Mago</title>
			</Head>
			<section className='flex flex-col items-center justify-center px-60'>
				<div className="bg-[url('/images/backgroundForest.jpg')] h-[600px] w-screen absolute top-0 -z-10 bg-no-repeat bg-cover bg-top left-0" />
				<div className='flex w-full my-20 border border-black h-[385px]'>
					<div className='relative flex flex-1 w-96 h-96'>
						<Image
							alt={t('homePage.whereToFindMe.vetOeiras.title')}
							src={CarolinaMagro}
							fill
							style={{
								objectFit: 'cover',
							}}
						/>
					</div>
					<div className='flex flex-col justify-between flex-1 px-10 py-10 bg-white'>
						<div>
							<h1 className='text-3xl font-bold'>
								{t('aboutMe.presentationCard.title')}
							</h1>
							<p>{t('aboutMe.presentationCard.subTitle')}</p>
						</div>
						<div className=''>
							<p>{t('aboutMe.presentationCard.text1')}</p>
							<p>{t('aboutMe.presentationCard.text2')}</p>
						</div>
						<div className='flex flex-col'>
							<a
								href='mailto:cm@carolinamagro.pt'
								target='_blank'
								className='cursor-pointer'
								rel='noreferrer'>
								cm@carolinamagro.pt
							</a>
							<a
								href='mailto:carolinamagrovet@gmail.com'
								target='_blank'
								className='cursor-pointer'
								rel='noreferrer'>
								carolinamagrovet@gmail.com
							</a>
						</div>
					</div>
				</div>
				<div className='w-full'>
					<h1 className='mb-10 text-5xl font-bold'>
						{t('aboutMe.timeline.title')}
					</h1>
					<ol className='relative border-l border-gray-200 dark:border-gray-700'>
						<li className='mb-10 ml-4'>
							<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
							<time className='text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								2022
							</time>
							<p className='mt-5 text-base font-normal text-gray-500 dark:text-gray-400'>
								{t('aboutMe.timeline.2022-1')}
							</p>
						</li>
						<li className='mb-10 ml-4'>
							<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
							<time className='text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								2019
							</time>
							<p className='mt-5 text-base font-normal text-gray-500 dark:text-gray-400'>
								{t('aboutMe.timeline.2019-1')}
							</p>
						</li>
						<li className='mb-10 ml-4'>
							<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
							<time className='text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								2017
							</time>
							<p className='mt-5 text-base font-normal text-gray-500 dark:text-gray-400'>
								{t('aboutMe.timeline.2017-1')}
							</p>
						</li>
						<li className='mb-10 ml-4'>
							<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
							<time className='text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								2017
							</time>
							<p className='mt-5 text-base font-normal text-gray-500 dark:text-gray-400'>
								{t('aboutMe.timeline.2017-2')}
							</p>
						</li>
						<li className='mb-10 ml-4'>
							<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
							<time className='text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								2016
							</time>
							<p className='mt-5 text-base font-normal text-gray-500 dark:text-gray-400'>
								{t('aboutMe.timeline.2016-1')}
							</p>
						</li>
						<li className='mb-10 ml-4'>
							<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
							<time className='text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								2016
							</time>
							<p className='mt-5 text-base font-normal text-gray-500 dark:text-gray-400'>
								{t('aboutMe.timeline.2016-2')}
							</p>
						</li>
						<li className='mb-10 ml-4'>
							<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
							<time className='text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
								2012
							</time>
							<p className='mt-5 text-base font-normal text-gray-500 dark:text-gray-400'>
								{t('aboutMe.timeline.2012-1')}
							</p>
						</li>
					</ol>
				</div>
				<div className='flex flex-col w-full gap-3 py-10'>
					<h1 className='mb-10 text-5xl font-bold text-left'>
						{t('aboutMe.moreAboutMe.title')}
					</h1>
					<p>{t('aboutMe.moreAboutMe.text1')}</p>
					<p>{t('aboutMe.moreAboutMe.text2')}</p>
					<p>{t('aboutMe.moreAboutMe.text3')}</p>
					<p>{t('aboutMe.moreAboutMe.text4')}</p>
					<p>{t('aboutMe.moreAboutMe.text5')}</p>
					<p>{t('aboutMe.moreAboutMe.text6')}</p>
					<p>{t('aboutMe.moreAboutMe.text7')}</p>
					<p>{t('aboutMe.moreAboutMe.text8')}</p>
					<p>{t('aboutMe.moreAboutMe.text9')}</p>
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
