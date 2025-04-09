'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ChevronLeft } from 'lucide-react';
import AOS from 'aos';

export default function PoliticaPrivacidad() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: 'ease-out-cubic',
			once: true,
		});
	}, []);

	return (
		<>
			<Header />
			<main className='pt-32 pb-16 px-4 relative z-10'>
				<div className='container mx-auto max-w-4xl bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-md'>
					<Link
						href='/'
						className='inline-flex items-center text-[#D8A7B1] hover:text-[#C797A1] mb-6 transition-colors'
					>
						<ChevronLeft size={20} className='mr-1' />
						<span>Volver al inicio</span>
					</Link>

					<h1 className='text-3xl md:text-4xl font-script font-bold text-[#5D4954] mb-8' data-aos='fade-up'>
						Política de Privacidad
					</h1>

					<div className='space-y-6 text-[#5D4954]' data-aos='fade-up' data-aos-delay='100'>
						<p>
							<strong>Última actualización:</strong> {new Date().toLocaleDateString()}
						</p>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>1. Introducción</h2>
							<p>
								En Alicia Escalona Repostería ("nosotros", "nuestro"), respetamos su privacidad y nos
								comprometemos a proteger su información. Esta política de privacidad le informará sobre cómo
								tratamos su información cuando visita nuestro sitio web y le informará sobre sus derechos de
								privacidad.
							</p>
							<p className='mt-2'>
								Este sitio web es un portafolio que muestra el trabajo de Alicia Escalona en el ámbito de la
								repostería y no tiene como finalidad la venta de productos ni la recopilación de datos
								personales de los usuarios.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>2. Información que recopilamos</h2>
							<p>
								Nuestro sitio web está diseñado para minimizar la recopilación de datos. No solicitamos ni
								almacenamos información personal de nuestros visitantes. Sin embargo, es posible que recopilemos
								automáticamente cierta información técnica limitada:
							</p>
							<ul className='list-disc pl-6 mt-2 space-y-1'>
								<li>
									<strong>Datos técnicos:</strong> como dirección IP, tipo de navegador, páginas visitadas y
									tiempo de permanencia en el sitio. Estos datos se utilizan únicamente para analizar el
									rendimiento del sitio y mejorar la experiencia del usuario.
								</li>
							</ul>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>3. Cookies</h2>
							<p>
								Utilizamos cookies esenciales que son necesarias para el funcionamiento básico del sitio web.
								Estas cookies no rastrean información personal y se utilizan únicamente para mejorar su
								experiencia de navegación.
							</p>
							<p className='mt-2'>
								Puede configurar su navegador para rechazar todas o algunas cookies, o para alertarle cuando los
								sitios web establezcan o accedan a las cookies. Si desactiva o rechaza las cookies, tenga en
								cuenta que algunas partes de este sitio web pueden volverse inaccesibles o no funcionar
								correctamente.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>4. Uso de la información</h2>
							<p>La información técnica limitada que recopilamos se utiliza únicamente para:</p>
							<ul className='list-disc pl-6 mt-2 space-y-1'>
								<li>Asegurar que el sitio web funcione correctamente</li>
								<li>Mejorar la experiencia del usuario</li>
								<li>Analizar el rendimiento del sitio web</li>
								<li>Proteger la seguridad del sitio web</li>
							</ul>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>5. Compartir información</h2>
							<p>
								No vendemos, intercambiamos ni transferimos de ninguna otra manera la información técnica
								limitada que recopilamos a terceros, excepto a proveedores de servicios de confianza que nos
								ayudan a operar nuestro sitio web (como servicios de alojamiento web y análisis).
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>6. Enlaces a sitios de terceros</h2>
							<p>
								Nuestro sitio web puede contener enlaces a sitios web de terceros, como redes sociales. No somos
								responsables de las prácticas de privacidad de estos sitios web. Le recomendamos que lea las
								políticas de privacidad de cualquier sitio web que visite.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>7. Seguridad</h2>
							<p>
								Implementamos medidas de seguridad razonables para proteger la información técnica limitada que
								recopilamos contra el acceso, la divulgación, la alteración o la destrucción no autorizados.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>8. Sus derechos</h2>
							<p>
								Dependiendo de su ubicación, puede tener ciertos derechos relacionados con sus datos, como el
								derecho a acceder, corregir o eliminar la información técnica limitada que recopilamos sobre
								usted. Si desea ejercer alguno de estos derechos, póngase en contacto con nosotros utilizando la
								información proporcionada a continuación.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>9. Cambios en esta política</h2>
							<p>
								Podemos actualizar nuestra política de privacidad de vez en cuando. Le notificaremos cualquier
								cambio publicando la nueva política de privacidad en esta página.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>10. Contacto</h2>
							<p>
								Si tiene alguna pregunta sobre esta política de privacidad, puede ponerse en contacto con
								nosotros en:
							</p>
							<p className='mt-2'>
								<strong>Alicia Escalona Repostería</strong>
								<br />
								Email: alicia.escalona@gmail.com
								<br />
								Teléfono: 603 45 28 89
							</p>
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
