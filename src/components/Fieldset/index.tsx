/**
 * Fieldset
 * ------------------------------------------------------------
 */

import * as React from 'react';

/** import style */
import styles from './Fieldset.scss';

/** define Input props as interface */
interface IFieldsetProps {
	/** content inside fieldset */
	children?: any;
	/** custom classname  */
	className?: string;
	/** name for the input */
	fieldName: string;
	/** helper text */
	helper?: string;
	/** label for the field */
	label: string;
}

function Fieldset({
	children,
	className,
	fieldName,
	helper,
	label,
}: IFieldsetProps) {
	return (
		<div className={styles['fieldset']}>
			<label
				className={styles['fieldset__label']}
				htmlFor={fieldName}
			>
				{label}
			</label>

			{children}

			{helper &&
				(<p className={styles['fieldset__helper']}>
					{helper}
				</p>)
			}
		</div>
	)
}

export { Fieldset };
