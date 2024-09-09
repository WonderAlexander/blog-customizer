import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import React, { FormEvent, useState, useRef } from 'react';

export type TArticleParamsForm = {
	articleState: ArticleStateType;
	setArticleState: (param: ArticleStateType) => void;
};

import {
	ArticleStateType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
} from 'src/constants/articleProps';


import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

export const ArticleParamsForm = ({
	articleState,
	setArticleState,
}: TArticleParamsForm) => {
	// Стейт меню
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	// Стейт статьи
	const [selectArticleState, setSelectArticleState] =
		useState<ArticleStateType>(articleState);

	// Функция обработки клика по стрелке меню
	const handleMenuClick = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Функция обработки изменения поля формы
	const handleInputChange = (
		key: keyof ArticleStateType,
		value: OptionType
	): void => {
		setSelectArticleState((prevState) => ({ ...prevState, [key]: value }));
	};

	// Функция обработки отправки формы
	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();
		setArticleState(selectArticleState);
	};

	return (
		<>
			<ArrowButton OnClick={handleMenuClick} isOpenState={isMenuOpen} />
			<aside
				className={clsx(styles.container, isMenuOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={handleFormSubmit}>
					<Text size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						options={fontFamilyOptions}
						selected={selectArticleState.fontFamilyOption}
						onChange={(selectElement: OptionType): void => {
							handleInputChange('fontFamilyOption', selectElement);
						}}
					/>
					<RadioGroup
						name='размер шрифта'
						options={fontSizeOptions}
						selected={selectArticleState.fontSizeOption}
						title='размер шрифта'
						onChange={(selectElement: OptionType): void => {
							handleInputChange('fontSizeOption', selectElement);
						}}
					/>
					<Select
						title='цвет шрифта'
						selected={selectArticleState.fontColor}
						options={fontColors}
						onChange={(selectElement: OptionType) => {
							handleInputChange('fontColor', selectElement);
						}}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={selectArticleState.backgroundColor}
						options={backgroundColors}
						onChange={(selectElement: OptionType) => {
							handleInputChange('backgroundColor', selectElement);
						}}
					/>
					<Select
						title='ширина контента'
						selected={selectArticleState.contentWidth}
						options={contentWidthArr}
						onChange={(selectElement: OptionType) => {
							handleInputChange('contentWidth', selectElement);
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
