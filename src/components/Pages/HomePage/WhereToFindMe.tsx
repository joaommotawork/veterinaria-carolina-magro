import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import VetOeiras from '../../../../public/images/whereToFindMe/grupo-vet-oeiras.webp';
import Zooniverso from '../../../../public/images/whereToFindMe/zooniverso-vet.webp';
import Azevet from '../../../../public/images/whereToFindMe/azevet.webp';
import BlueVet from '../../../../public/images/whereToFindMe/bluevet.webp';

export default function WhereToFindMe() {
	const { t } = useTranslation('common');

	return (
		<section className='flex flex-col w-full h-full pt-20 pb-5 px-60' id="whereToFindMe">
			<div className='flex flex-col justify-center'>
				<div className='flex flex-col items-center justify-center gap-10'>
					<h1 className='text-5xl font-semibold'>
						{t('homePage.whereToFindMe.title')}
					</h1>
					<div className='grid w-full h-full grid-cols-4 grid-rows-1 gap-10'>
						<div className='flex flex-col items-center justify-center text-center'>
							<Image
								alt={t(
									'homePage.whereToFindMe.vetOeiras.title',
								)}
								src={VetOeiras}
								width={350}
								height={237.5}
								style={{
									width: '50%',
									height: 'auto',
								}}
							/>
							<p className='w-1/2 text-center'>
								{t('homePage.whereToFindMe.vetOeiras.title')}
							</p>
							<p className='w-1/2 mt-5 font-bold text-center'>
								{t('homePage.whereToFindMe.contact')}
							</p>
							<p>
								{t('homePage.whereToFindMe.vetOeiras.address')}
							</p>
							<a
								href='mailto:geral@vetoeiras.pt'
								className='cursor-pointer'
								rel='noreferrer'>
								geral@vetoeiras.pt
							</a>
							<p>+351 214 415 438</p>
						</div>
						<div className='flex flex-col items-center justify-center text-center'>
							<Image
								alt={t(
									'homePage.whereToFindMe.zooniverso.title',
								)}
								src={Zooniverso}
								width={350}
								height={237.5}
								style={{
									width: '50%',
									height: 'auto',
								}}
							/>
							<p className='w-1/2 text-center'>
								{t('homePage.whereToFindMe.zooniverso.title')}
							</p>
							<p className='w-1/2 mt-5 font-bold text-center'>
								{t('homePage.whereToFindMe.contact')}
							</p>
							<p>
								{t('homePage.whereToFindMe.zooniverso.address')}
							</p>
							<a
								href='mailto:zooniversoveterinario@gmail.com'
								className='cursor-pointer'
								rel='noreferrer'>
								zooniversoveterinario@gmail.com
							</a>
							<p>+351 932 751 167</p>
						</div>
						<div className='flex flex-col items-center justify-center text-center'>
							<Image
								alt={t('homePage.whereToFindMe.azevet.title')}
								src={Azevet}
								width={350}
								height={237.5}
								style={{
									width: '50%',
									height: 'auto',
								}}
							/>
							<p className='w-1/2 text-center'>
								{t('homePage.whereToFindMe.azevet.title')}
							</p>
							<p className='w-1/2 mt-5 font-bold text-center'>
								{t('homePage.whereToFindMe.contact')}
							</p>
							<p>{t('homePage.whereToFindMe.azevet.address')}</p>
							<a
								href='mailto:geral@azevet.pt'
								className='cursor-pointer'
								rel='noreferrer'>
								geral@azevet.pt
							</a>
							<p>+351 212 183 101</p>
						</div>
						<div className='flex flex-col items-center justify-center text-center'>
							<Image
								alt={t('homePage.whereToFindMe.blueVet.title')}
								src={BlueVet}
								width={350}
								height={237.5}
								style={{
									width: '50%',
									height: 'auto',
								}}
							/>
							<p className='w-1/2 text-center'>
								{t('homePage.whereToFindMe.blueVet.title')}
							</p>
							<p className='w-1/2 mt-5 font-bold text-center'>
								{t('homePage.whereToFindMe.contact')}
							</p>
							<p>{t('homePage.whereToFindMe.blueVet.address')}</p>
							<a
								href='mailto:bluevet23@gmail.com'
								className='cursor-pointer'
								rel='noreferrer'>
								bluevet23@gmail.com
							</a>
							<p>+351 936 424 645</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
