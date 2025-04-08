'use client';

import { useState } from 'react';
import Image from 'next/image';
import { desserts, categories } from '@/lib/data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import ImageViewer from './image-viewer';

export default function WorkGallery() {
	const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
	const [selectedDessert, setSelectedDessert] = useState<(typeof desserts)[0] | null>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);

	const openRecipe = (recipe: string | null, dessert: (typeof desserts)[0]) => {
		if (recipe) {
			setSelectedRecipe(recipe);
			setSelectedDessert(dessert);
			setIsDialogOpen(true);
		}
	};

	const openImageViewer = (dessert: (typeof desserts)[0]) => {
		setSelectedDessert(dessert);
		setIsImageViewerOpen(true);
	};

	const filteredDesserts = activeCategory
		? desserts.filter((dessert) => dessert.category === activeCategory)
		: desserts;

	return (
		<section id='mi-trabajo' className='py-24 px-4 relative overflow-hidden'>
			<div className='container mx-auto relative z-10'>
				<div className='text-center mb-16' data-aos='fade-up'>
					<h2 className='text-3xl md:text-4xl font-script font-bold text-[#5D4954] mb-4'>Mi Trabajo</h2>
					<div className='w-24 h-1 bg-[#D8A7B1] mx-auto mb-6 rounded-full'></div>
					<p className='text-center text-[#5D4954] mb-8 max-w-2xl mx-auto'>
						Descubre mis creaciones más deliciosas, elaboradas con los mejores ingredientes y mucho amor.
					</p>
				</div>

				{/* Category Filter */}
				<div className='flex flex-wrap justify-center gap-3 mb-12' data-aos='fade-up' data-aos-delay='100'>
					<button
						onClick={() => setActiveCategory(null)}
						className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
							activeCategory === null
								? 'bg-[#D8A7B1] text-white shadow-md'
								: 'bg-[#F9E2E8] text-[#5D4954] hover:bg-[#F9E2E8]/80'
						}`}
					>
						Todos
					</button>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
								activeCategory === category
									? 'bg-[#D8A7B1] text-white shadow-md'
									: 'bg-[#F9E2E8] text-[#5D4954] hover:bg-[#F9E2E8]/80'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredDesserts.map((dessert, index) => (
						<motion.div
							key={dessert.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer'
							onClick={() => openImageViewer(dessert)}
						>
							<div className='relative h-64 overflow-hidden'>
								<Image
									src={dessert.image || '/placeholder.svg'}
									alt={dessert.title}
									fill
									className='object-cover object-center transition-transform duration-700 group-hover:scale-110'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-[#5D4954]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
									<div className='p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
										<span className='inline-block bg-[#F9E2E8] text-[#5D4954] text-xs font-medium px-3 py-1 rounded-full mb-2'>
											{dessert.category}
										</span>
										<h3 className='text-xl font-script font-bold text-white'>{dessert.title}</h3>
									</div>
								</div>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-script font-bold text-[#5D4954] mb-2'>{dessert.title}</h3>
								{dessert.recipe && (
									<button
										onClick={(e) => {
											e.stopPropagation();
											openRecipe(dessert.recipe, dessert);
										}}
										className='text-sm font-medium text-[#D8A7B1] hover:text-[#C797A1] transition-colors flex items-center'
									>
										Ver Receta
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
										</svg>
									</button>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Recipe Dialog */}
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className='max-w-3xl bg-[#FFF9F9] border-[#F9E2E8]'>
					<DialogHeader>
						<DialogTitle className='text-2xl font-script text-[#5D4954]'>{selectedDessert?.title}</DialogTitle>
					</DialogHeader>
					<DialogDescription>
						{/* Recipe Image */}
						<div className='relative w-full h-64 mb-6 rounded-lg overflow-hidden'>
							<Image
								src={selectedDessert?.image || '/placeholder.svg'}
								alt={selectedDessert?.title || 'Receta'}
								fill
								className='object-cover object-center'
								sizes='(max-width: 768px) 100vw, 800px'
							/>
							<div
								className='absolute inset-0 cursor-pointer hover:bg-black/10 transition-colors flex items-center justify-center'
								onClick={() => {
									if (selectedDessert) {
										setIsDialogOpen(false);
										setTimeout(() => {
											setIsImageViewerOpen(true);
										}, 300);
									}
								}}
							>
								<div className='bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='text-[#5D4954]'
									>
										<path d='M15 3h6v6'></path>
										<path d='M10 14 21 3'></path>
										<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
									</svg>
								</div>
							</div>
						</div>

						{/* Recipe Content */}
						<div className='prose prose-pink max-w-none'>
							{selectedRecipe && (
								<div
									dangerouslySetInnerHTML={{
										__html: selectedRecipe
											.split('\n')
											.map((line) => {
												if (line.trim().startsWith('**')) {
													return `<h3 class="text-[#D8A7B1] font-bold text-xl mt-4 mb-2 font-script">${line.replace(
														/\*\*/g,
														''
													)}</h3>`;
												} else if (line.trim().startsWith('-')) {
													return `<li class="ml-5 mb-1 text-[#5D4954]">${line.substring(1)}</li>`;
												} else if (line.trim().match(/^\d+\./)) {
													return `<p class="ml-5 mb-1 text-[#5D4954]">${line}</p>`;
												} else {
													return line ? `<p class="mb-2 text-[#5D4954]">${line}</p>` : '';
												}
											})
											.join(''),
									}}
								/>
							)}
						</div>
					</DialogDescription>
				</DialogContent>
			</Dialog>

			{/* Image Viewer */}
			{selectedDessert && (
				<ImageViewer
					isOpen={isImageViewerOpen}
					onClose={() => setIsImageViewerOpen(false)}
					imageSrc={selectedDessert.image}
					imageAlt={selectedDessert.title}
				/>
			)}
		</section>
	);
}
