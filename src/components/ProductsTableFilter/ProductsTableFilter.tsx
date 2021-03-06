import React from 'react';

import styles from './ProductsTableFilter.module.scss';
import {useAppDispatch, useAppSelector} from '../../hooks/typedReduxHooks';
import arrow from '../../assets/dropdown.svg';
import {setChosenTechnology} from '../../store/slices/products';

const ProductsTableFilter: React.FC = () => {
	const technology = useAppSelector(state => state.products.chosenTechnology);
	const dispatch = useAppDispatch();

	return(<div className={styles.container}>
		<h2 className={styles.title}>{(technology ? technology.title : '')}</h2>
		<button className={styles.return} onClick={() => dispatch(setChosenTechnology(null))}>
			<img alt={'return arrow'} className={styles.returnImage} src={arrow}/>
			<span className={styles.returnLabel}>Return to technologies</span>
		</button>
	</div>);
};

export default ProductsTableFilter;
