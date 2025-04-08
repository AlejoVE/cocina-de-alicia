'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageViewerProps {
	isOpen: boolean;
	onClose: () => void;
	imageSrc: string;
	imageAlt: string;
}

export default function ImageViewer({ isOpen, onClose, imageSrc, imageAlt }: ImageViewerProps) {
	// Close on escape key
	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};

		if (isOpen) {
			window.addEventListener('keydown', handleEsc);
		}

		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, [isOpen, onClose]);

	// Prevent body scroll when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
					onClick={onClose}
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						transition={{ type: 'spring', damping: 25, stiffness: 300 }}
						className='relative max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden bg-white shadow-2xl'
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={onClose}
							className='absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 text-[#5D4954] hover:text-[#D8A7B1] transition-colors'
							aria-label='Close image viewer'
						>
							<X size={24} />
						</button>

						<div className='relative w-full h-[80vh]'>
							<Image
								src={imageSrc || '/placeholder.svg'}
								alt={imageAlt}
								fill
								className='object-contain'
								sizes='(max-width: 768px) 100vw, 80vw'
							/>
						</div>

						<div className='absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-4 text-center'>
							<h3 className='text-xl font-script font-bold text-[#5D4954]'>{imageAlt}</h3>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
