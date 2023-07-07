import { useTranslation } from 'next-i18next';

export default function LetsWork() {
	const { t } = useTranslation('common');

	return (
		<section className='flex flex-col items-center justify-center w-full h-full gap-10 py-20 text-center px-60 bg-[#282626] text-white'>
			<h1 className='text-5xl font-semibold'>
				{t('homePage.letsWork.title')}
			</h1>
			<p>{t('homePage.letsWork.text')}</p>
			<button className='px-6 py-2 font-bold text-black bg-white border-0 rounded w-fit focus:outline-none'>
				{t('homePage.letsWork.callToAction')}
			</button>
		</section>
	);
}
