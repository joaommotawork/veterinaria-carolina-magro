import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function AboutMe() {
    const { t } = useTranslation('common');
	const router = useRouter();

  return (
		<section className='flex flex-col w-full h-full py-20 px-60' id="aboutMe">
			<div className='grid w-full h-full grid-cols-2 gap-40'>
				<div className='flex flex-col justify-center w-full h-full gap-5'>
					<h1 className='text-5xl font-semibold'>
						<p>{t('homePage.aboutMe.title')}</p>
					</h1>
					<p className=''>{t('homePage.aboutMe.text')}</p>
					<button className='px-6 py-2 font-bold text-white bg-black border-0 rounded w-fit focus:outline-none' onClick={() => router.push('/aboutMe')}>
						{t('homePage.aboutMe.callToAction')}
					</button>
				</div>
				<div className='w-full h-full'>
					<div className="bg-[url('/images/background.jpeg')] h-[700px] bg-no-repeat bg-cover bg-center" />
				</div>
			</div>
		</section>
  );
}
