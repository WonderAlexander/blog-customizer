import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type TArrowBtnProps = {
	OnClick: () => void;
	isOpenState: boolean;
};

export const ArrowButton = (props: TArrowBtnProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(
				styles.container,
				props.isOpenState && styles.container_open
			)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				onClick={props.OnClick}
				className={clsx(styles.arrow, props.isOpenState && styles.arrow_open)}
			/>
		</div>
	);
};
