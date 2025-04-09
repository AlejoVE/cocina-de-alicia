'use client';

import { CakeSlice, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function About() {
	return (
		<section id='sobre-mí' className='py-24 px-4 bg-[#F9E2E8]/20 relative overflow-hidden'>
			<div className='container mx-auto relative z-10'>
				<div className='text-center mb-16' data-aos='fade-up'>
					<h2 className='text-3xl md:text-4xl font-script font-bold text-[#5D4954] mb-4'>Sobre Mí</h2>
					<div className='w-24 h-1 bg-[#D8A7B1] mx-auto mb-6 rounded-full'></div>
				</div>

				<div className='flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto'>
					<div className='w-full md:w-2/5 flex-shrink-0' data-aos='fade-right'>
						<div className='relative w-full aspect-square max-w-md mx-auto'>
							<div className='absolute inset-0 bg-[#D8A7B1]/40 rounded-full transform -translate-x-4 -translate-y-4 z-0'></div>
							<div className='absolute inset-0 bg-[#E8C4CF]/40 rounded-full transform translate-x-4 translate-y-4 z-0'></div>
							<div className='relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg'>
								<Image src='/images/chef3.jpeg' alt='Alicia Escalona' fill className='object-cover' />
							</div>
						</div>
					</div>

					<div className='w-full md:w-3/5' data-aos='fade-left'>
						<h3 className='text-2xl font-script font-bold text-[#D8A7B1] mb-6'>Pastelera Apasionada</h3>
						<p className='text-lg text-[#5D4954] leading-relaxed mb-4'>
							Soy Alicia Escalona, una repostera apasionada con años de experiencia creando postres únicos. Me
							especializo en tartas, merengues y ganaches, siempre buscando llevar alegría a través de mis
							creaciones.
						</p>
						<p className='text-lg text-[#5D4954] leading-relaxed mb-4'>
							Mi pasión por la repostería comenzó desde muy joven, observando a mi abuela preparar deliciosos
							dulces tradicionales. Con el tiempo, he perfeccionado mis técnicas y desarrollado mi propio estilo,
							combinando sabores clásicos con presentaciones modernas y elegantes.
						</p>
						<p className='text-lg text-[#5D4954] leading-relaxed'>
							Cada postre que creo es único y está hecho con los mejores ingredientes, dedicación y mucho amor.
							Mi mayor satisfacción es ver la alegría en los rostros de mis clientes cuando prueban mis
							creaciones.
						</p>

						<div className='mt-8 flex flex-wrap gap-4'>
							<div className='bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm flex items-center space-x-3 flex-1 min-w-[180px]'>
								<div className='bg-[#F9E2E8] p-3 rounded-full'>
									<CakeSlice />
								</div>
								<div>
									<h4 className='font-medium text-[#5D4954]'>Tartas</h4>
									<p className='text-sm text-[#5D4954]/70'>Para cada ocasión</p>
								</div>
							</div>

							<div className='bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm flex items-center space-x-3 flex-1 min-w-[180px]'>
								<div className='bg-[#F9E2E8] p-3 rounded-full'>
									<Sparkles />
								</div>
								<div>
									<h4 className='font-medium text-[#5D4954]'>Ingredientes Premium</h4>
									<p className='text-sm text-[#5D4954]/70'>Calidad garantizada</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative elements */}
			<div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent'></div>
		</section>
	);
}
