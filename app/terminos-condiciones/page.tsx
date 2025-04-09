'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ChevronLeft } from 'lucide-react';
import AOS from 'aos';

export default function TerminosCondiciones() {
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
						Términos y Condiciones
					</h1>

					<div className='space-y-6 text-[#5D4954]' data-aos='fade-up' data-aos-delay='100'>
						<p>
							<strong>Última actualización:</strong> {new Date().toLocaleDateString()}
						</p>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>1. Introducción</h2>
							<p>
								Estos términos y condiciones rigen el uso de este sitio web de Alicia Escalona Repostería. Al
								acceder a este sitio web, usted acepta estar sujeto a estos términos y condiciones. Si no está
								de acuerdo con todos estos términos y condiciones, debe abandonar este sitio web inmediatamente.
							</p>
							<p className='mt-2'>
								Este sitio web es un portafolio que muestra el trabajo de Alicia Escalona en el ámbito de la
								repostería y no tiene como finalidad la venta directa de productos.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>2. Uso del sitio web</h2>
							<p>
								El contenido de las páginas de este sitio web es para su información general y uso personal
								únicamente. Está sujeto a cambios sin previo aviso.
							</p>
							<p className='mt-2'>
								Este sitio web utiliza cookies para mejorar su experiencia. Al continuar utilizando este sitio
								web, usted acepta nuestro uso de cookies de acuerdo con nuestra política de privacidad.
							</p>
							<p className='mt-2'>
								Ni nosotros ni terceros proporcionamos ninguna garantía o seguridad en cuanto a la precisión,
								puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados
								u ofrecidos en este sitio web para cualquier propósito particular.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>3. Limitaciones de uso</h2>
							<p>
								Usted puede ver, descargar para fines de almacenamiento en caché e imprimir contenido del sitio
								web para su uso personal, sujeto a las restricciones establecidas a continuación y en otras
								partes de estos términos y condiciones.
							</p>
							<p className='mt-2'>Usted no debe:</p>
							<ul className='list-disc pl-6 mt-2 space-y-1'>
								<li>Republicar material de este sitio web (incluyendo la republicación en otro sitio web)</li>
								<li>Vender, alquilar o sublicenciar material de este sitio web</li>
								<li>
									Reproducir, duplicar, copiar o explotar material de este sitio web con fines comerciales
								</li>
								<li>
									Redistribuir contenido de este sitio web (a menos que el contenido esté específicamente
									diseñado para ser redistribuido)
								</li>
							</ul>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>4. Propiedad intelectual</h2>
							<p>
								Todo el contenido incluido en o disponible a través de este sitio web, incluidos, entre otros,
								texto, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y
								compilaciones de datos, es propiedad de Alicia Escalona Repostería o sus proveedores de
								contenido y está protegido por las leyes internacionales de derechos de autor.
							</p>
							<p className='mt-2'>
								Las fotografías de los productos de repostería mostrados en este sitio web son propiedad de
								Alicia Escalona Repostería y no pueden ser utilizadas sin permiso expreso por escrito.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>5. Contacto y consultas</h2>
							<p>
								Este sitio web proporciona información de contacto para consultas sobre los servicios de
								repostería de Alicia Escalona. Al utilizar esta información de contacto, usted acepta que
								cualquier comunicación será tratada de manera confidencial y no será compartida con terceros sin
								su consentimiento.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>6. Enlaces a sitios de terceros</h2>
							<p>
								Este sitio web puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su
								conveniencia y para proporcionar más información. No significan que respaldemos el(los) sitio(s)
								web. No tenemos responsabilidad por el contenido del(los) sitio(s) web enlazado(s).
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>7. Limitación de responsabilidad</h2>
							<p>
								En la medida máxima permitida por la ley aplicable, excluimos todas las representaciones,
								garantías y condiciones relacionadas con nuestro sitio web y el uso de este sitio web
								(incluyendo, sin limitación, cualquier garantía implícita por ley con respecto a la calidad
								satisfactoria, idoneidad para el propósito y/o el uso de cuidado y habilidad razonables).
							</p>
							<p className='mt-2'>Nada en este descargo de responsabilidad:</p>
							<ul className='list-disc pl-6 mt-2 space-y-1'>
								<li>
									Limitará o excluirá nuestra o su responsabilidad por muerte o lesiones personales resultantes
									de negligencia
								</li>
								<li>
									Limitará o excluirá nuestra o su responsabilidad por fraude o tergiversación fraudulenta
								</li>
								<li>
									Limitará cualquiera de nuestras o sus responsabilidades de cualquier manera que no esté
									permitida bajo la ley aplicable
								</li>
								<li>
									Excluirá cualquiera de nuestras o sus responsabilidades que no puedan ser excluidas bajo la
									ley aplicable
								</li>
							</ul>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>8. Ley aplicable</h2>
							<p>
								Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de España, y usted
								se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en esa ubicación.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>
								9. Cambios en los términos y condiciones
							</h2>
							<p>
								Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos términos
								en cualquier momento. Es su responsabilidad revisar estos términos periódicamente para ver los
								cambios. Su uso continuado del sitio web después de la publicación de cualquier cambio en estos
								términos constituye la aceptación de esos cambios.
							</p>
						</section>

						<section className='mb-8'>
							<h2 className='text-2xl font-script text-[#D8A7B1] mb-4'>10. Contacto</h2>
							<p>
								Si tiene alguna pregunta sobre estos Términos y Condiciones, póngase en contacto con nosotros
								en:
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
