'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
	return (
		<section
			id='inicio'
			className='relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden'
		>
			<div className='absolute inset-0 z-0'>
				<Image
					src='/images/hero-cake.jpg'
					alt='Delicioso pastel decorado'
					fill
					className='object-cover object-center scale-[1]'
					style={{ objectPosition: 'center 40%' }}
					priority
				/>
				<div className='absolute inset-0 bg-gradient-to-r from-[#5D4954]/70 to-[#D8A7B1]/60'></div>
			</div>

			<div className='relative z-10 max-w-4xl mx-auto'>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='text-4xl md:text-6xl font-script font-bold text-white mb-4 drop-shadow-lg'
				>
					Alicia Escalona
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className='relative inline-block mb-6'
				>
					<h2 className='text-xl md:text-3xl font-sans text-white drop-shadow-md'>Creando Dulces Momentos</h2>
					<motion.div
						className='absolute -bottom-2 left-0 right-0 h-0.5 bg-[#F9E2E8]'
						initial={{ width: 0 }}
						animate={{ width: '100%' }}
						transition={{ duration: 1, delay: 1 }}
					/>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className='text-lg md:text-xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto'
				>
					Tartas y postres personalizados para tus eventos especiales, elaborados con los mejores ingredientes y
					mucho amor
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<Link
						href='#mi-trabajo'
						className='inline-flex h-12 items-center justify-center rounded-full bg-[#D8A7B1] px-8 text-base font-medium text-white shadow-lg hover:bg-[#C797A1] transition-all duration-300 hover:shadow-xl hover:scale-105 group'
					>
						Ver Mi Trabajo
						<motion.span
							animate={{ x: [0, 5, 0] }}
							transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
							className='ml-2'
						>
							→
						</motion.span>
					</Link>
				</motion.div>
			</div>

			<motion.div
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white'
				animate={{
					y: [0, 10, 0],
				}}
				transition={{
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'reverse',
				}}
			>
				<ChevronDown size={32} className='opacity-80' />
			</motion.div>

			<div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFF9F9] to-transparent'></div>
		</section>
	);
}
