import { useTranslation } from "next-i18next";

export default function Patients() {
    const { t } = useTranslation('common');

  return (
		<section className='flex flex-col w-full h-full pt-20 pb-5 px-60'>
			<div className='flex flex-col justify-center'>
				<div className='flex flex-col items-center justify-center gap-10'>
					<h1 className='text-5xl font-semibold'>Pacientes</h1>
					<div className='grid w-full h-full grid-cols-4 grid-rows-1 gap-5'>
						<div className="bg-[url('/images/pacientes1.webp')] bg-no-repeat bg-cover bg-center w-full h-[700px]" />
						<div className="bg-[url('/images/pacientes2.webp')] bg-no-repeat bg-cover bg-center w-full h-full" />
						<div className="bg-[url('/images/pacientes3.webp')] bg-no-repeat bg-cover bg-center w-full h-full" />
						<div className="bg-[url('/images/pacientes4.webp')] bg-no-repeat bg-cover bg-center w-full h-full" />
					</div>
				</div>
			</div>
		</section>
  );
}
