import * as React from 'react';
import { Hello } from '../Hello';

import styles from './HelloAgain.scss';

export default function HelloAgain() {
	return (
		<div>
			<Hello text="HELLO!" />
			<h3 className={styles.HelloAgain}>
				Hello again from the other side..
			</h3>
		</div>
	);
}
