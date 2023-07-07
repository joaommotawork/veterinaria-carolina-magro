import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html
			lang='en'
			className='h-full scroll-smooth scroll-p-[191.91px]'
			style={{ scrollBehavior: 'smooth' }}>
			<Head />
			<body className='h-full'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
