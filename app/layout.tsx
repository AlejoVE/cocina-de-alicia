import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';

export const metadata: Metadata = {
	title: 'La cocinita de Alicia',
	description: 'Created with v0',
	generator: 'v0.dev',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<ThemeProvider attribute='class' defaultTheme='light'>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
