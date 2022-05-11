import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useScrollY } from '../../hooks/useScrollY';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import style from './Up.module.css';

export const Up = (): JSX.Element => {

	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.div
			className={style.up}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<ButtonIcon
				appearance='primary'
				icon='up'
				onClick={scrollToTop} />
		</motion.div>
	);
};