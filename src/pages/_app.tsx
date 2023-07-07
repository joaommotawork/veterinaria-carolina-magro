import Layout from '@/components/Layout/LayoutIndex';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';
import { appWithTranslation, useTranslation } from 'next-i18next';

const theme = createTheme({
	typography: {
		fontFamily: 'var(--montserrat-font), sans-serif',
	},
});

function App({ Component, pageProps }: AppProps) {
	const { t } = useTranslation('common');

	return (
		<ThemeProvider theme={theme}>
			<Layout
				headerItems={[
					{
						text: t('header.home'),
						href: '/',
					},
					{
						text: t('header.aboutMe'),
						href: '/#aboutMe',
					},
					{
						text: t('header.whereToFindMe'),
						href: '/#whereToFindMe',
					},
					{
						text: t('header.services'),
						href: '/#services',
					},
					{
						text: t('header.training'),
						href: '/training',
					},
					{
						text: t('header.investigation'),
						href: '/investigation',
					},
				]}
				footerSections={[
					{
						title: 'Principais',
						items: [
							{
								text: 'Página 1',
								href: '/',
							},
							{
								text: 'Página 2',
								href: '/',
							},
							{
								text: 'Página 3',
								href: '/',
							},
							{
								text: 'Página 4',
								href: '/',
							},
						],
					},
					{
						title: 'Secundárias',
						items: [
							{
								text: 'Página 1',
								href: '/',
							},
							{
								text: 'Página 2',
								href: '/',
							},
							{
								text: 'Página 3',
								href: '/',
							},
							{
								text: 'Página 4',
								href: '/',
							},
						],
					},
					{
						title: 'Outras',
						items: [
							{
								text: 'Página 1',
								href: '/',
							},
							{
								text: 'Página 2',
								href: '/',
							},
							{
								text: 'Página 3',
								href: '/',
							},
							{
								text: 'Página 4',
								href: '/',
							},
						],
					},
				]}>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default appWithTranslation(App);
