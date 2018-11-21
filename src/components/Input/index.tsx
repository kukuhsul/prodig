/**
 * Input
 * ------------------------------------------------------------
 * Render `<input>`
 */

import * as React from 'react';

/** import style */
import styles from './Input.scss';

/** define Input types */
type InputType = 'text' | 'email' | 'password';

/** define Input props as interface */
interface IInputProps {
	/** custom classname  */
	className?: string;
	/** disable the button */
	disabled?: boolean;
	/** id of the input */
	id?: string;
	/** name of the input */
	name?: string;
	/** type of the input */
	type: InputType;
}

function Input({
	className,
	disabled,
	id,
	name,
	type
}: IInputProps) {
	return (
		<input
			aria-disabled={disabled}
			className={styles['input']}
			disabled={disabled}
			id={id}
			name={name}
			tabIndex={disabled ? -1 : 0}
			type={type}
		/>
	)
}

export { Input };
