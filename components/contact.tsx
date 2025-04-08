'use client';

import { Instagram, Facebook, MessageSquare, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
	return (
		<section id='contacto' className='py-24 px-4 relative overflow-hidden'>
			<div className='container mx-auto relative z-10'>
				<div className='text-center mb-16' data-aos='fade-up'>
					<h2 className='text-3xl md:text-4xl font-script font-bold text-[#5D4954] mb-4'>Contacto</h2>
					<div className='w-24 h-1 bg-[#D8A7B1] mx-auto mb-6 rounded-full'></div>
					<p className='text-center text-[#5D4954] mb-8 max-w-2xl mx-auto'>
						¿Tienes alguna consulta o quieres hacer un pedido? ¡No dudes en contactarme!
					</p>
				</div>

				<div
					className='max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-md relative overflow-hidden'
					data-aos='fade-up'
				>
					<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F9E2E8] via-[#D8A7B1] to-[#F9E2E8]'></div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
						<div>
							<h3 className='text-xl font-script font-bold text-[#D8A7B1] mb-8 relative inline-block'>
								Información de Contacto
								<motion.div
									className='absolute -bottom-2 left-0 right-0 h-0.5 bg-[#F9E2E8]'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									viewport={{ once: true }}
									transition={{ duration: 1 }}
								/>
							</h3>

							<div className='space-y-8'>
								<div className='flex items-start'>
									<div className='flex-shrink-0 mt-1'>
										<div className='bg-[#F9E2E8] p-2 rounded-full'>
											<Mail className='h-5 w-5 text-[#D8A7B1]' />
										</div>
									</div>
									<div className='ml-4'>
										<p className='text-[#5D4954] font-medium'>Correo Electrónico</p>
										<a
											href='mailto:alicia.escalona@gmail.com'
											className='text-[#5D4954] hover:text-[#D8A7B1] transition-colors'
										>
											aliciae49@hotmail.com
										</a>
									</div>
								</div>

								<div className='flex items-start'>
									<div className='flex-shrink-0 mt-1'>
										<div className='bg-[#F9E2E8] p-2 rounded-full'>
											<Phone className='h-5 w-5 text-[#D8A7B1]' />
										</div>
									</div>
									<div className='ml-4'>
										<p className='text-[#5D4954] font-medium'>Teléfono</p>
										<a
											href='tel:+34603452889'
											className='text-[#5D4954] hover:text-[#D8A7B1] transition-colors'
										>
											603 45 28 89
										</a>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h3 className='text-xl font-script font-bold text-[#D8A7B1] mb-8 relative inline-block'>
								Sígueme en Redes Sociales
								<motion.div
									className='absolute -bottom-2 left-0 right-0 h-0.5 bg-[#F9E2E8]'
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									viewport={{ once: true }}
									transition={{ duration: 1 }}
								/>
							</h3>

							<div className='space-y-6'>
								<a
									href='#'
									className='flex items-center p-3 rounded-lg bg-white/50 hover:bg-[#F9E2E8]/30 transition-colors group'
								>
									<div className='bg-[#F9E2E8] p-2 rounded-full'>
										<Instagram className='h-5 w-5 text-[#D8A7B1]' />
									</div>
									<span className='ml-4 text-[#5D4954] group-hover:text-[#D8A7B1] transition-colors'>
										@aliciae49
									</span>
								</a>

								<a
									href='#'
									className='flex items-center p-3 rounded-lg bg-white/50 hover:bg-[#F9E2E8]/30 transition-colors group'
								>
									<div className='bg-[#F9E2E8] p-2 rounded-full'>
										<Facebook className='h-5 w-5 text-[#D8A7B1]' />
									</div>
									<span className='ml-4 text-[#5D4954] group-hover:text-[#D8A7B1] transition-colors'>
										Alicia Escalona
									</span>
								</a>
							</div>
						</div>
					</div>

					{/* <div className='mt-12 text-center'>
						<button className='inline-flex h-12 items-center justify-center rounded-full bg-[#D8A7B1] px-8 text-base font-medium text-white shadow-md hover:bg-[#C797A1] transition-all duration-300 hover:shadow-xl hover:scale-105 group'>
							Solicitar Presupuesto
							<motion.span
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
								className='ml-2'
							>
								→
							</motion.span>
						</button>
					</div> */}
				</div>
			</div>
		</section>
	);
}
