import { useTranslation } from "next-i18next";

export default function Banner() {
    const { t } = useTranslation('common');

  return (
		<section className='flex flex-col justify-end w-screen h-[calc(100vh-500px)] px-60'>
			<div className='flex flex-col mb-20 font-semibold text-white uppercase text-9xl'>
				{/* <p>{t('homePage.banner.citation1')}</p>
				<p>{t('homePage.banner.citation2')}</p>
				<p>{t('homePage.banner.citation3')}</p> */}
			</div>
		</section>
  );
}
