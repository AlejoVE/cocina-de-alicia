'use client';

import { useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import WorkGallery from '@/components/work-gallery';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import AOS from 'aos';

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 600,
			easing: 'ease-out-cubic',
			once: true,
		});
	}, []);

	return (
		<div className='min-h-screen bg-gradient-to-b from-[#FFF9F9] to-[#F9F3F3] bg-fixed'>
			<div className="absolute inset-0 bg-[url('/images/subtle-pattern.png')] opacity-5 z-0 pointer-events-none"></div>
			<Header />
			<main className='relative z-10'>
				<Hero />
				<WorkGallery />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
