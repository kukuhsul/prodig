import * as React from 'react';
import styles from './Hello.scss';

export interface IHelloProps { text: string; }

export default function Hello(props: IHelloProps) {
	return (
		<h1 className={styles['Hello--warning']}>
			{props.text}
		</h1>
	);
}

