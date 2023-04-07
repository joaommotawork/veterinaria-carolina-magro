import Layout from '@/components/Layout/LayoutIndex';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';
import { appWithTranslation } from 'next-i18next';

const theme = createTheme({
	typography: {
		fontFamily: 'var(--montserrat-font), sans-serif',
	},
});

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Layout
				headerItems={[
					{
						text: 'Home',
						href: '/',
					},
					{
						text: 'Sobre',
						href: '/',
					},
					{
						text: 'Serviços',
						href: '/',
					},
					{
						text: 'Pacientes',
						href: '/',
					},
					{
						text: 'Onde Me Encontrar',
						href: '/',
					},
				]}
				footerSections={[
					{
						title: 'Redes Sociais',
						items: [
							{
								text: 'Facebook',
								href: '/',
							},
							{
								text: 'Instagram',
								href: '/',
							},
							{
								text: 'Twitter',
								href: '/',
							},
							{
								text: 'LinkedIn',
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
