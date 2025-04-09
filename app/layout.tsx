import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Alicia Escalona - Repostería',
	description: 'Tartas y postres personalizados para tus eventos especiales',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es' suppressHydrationWarning>
			<body suppressHydrationWarning className='min-h-screen bg-gradient-to-b from-[#FFF9F9] to-[#F9F3F3] bg-fixed'>
				{children}
			</body>
		</html>
	);
}
