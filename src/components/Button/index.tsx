/**
 * Button
 * ------------------------------------------------------------
 * Render `<a>` tag if there is url
 * otherwise `<button>`
 */

import classNames from 'classnames';
import * as React from 'react';

/** import style */
import styles from './Button.scss';

/** define button variants */
type ButtonVariant = 'green' | 'orange' | 'purple';
/** define button types */
type ButtonType = 'button' | 'submit' | 'clear';

/** define Button props as interface */
interface IButtonProps {
	/** content to display inside the button */
	children?: any;
	/** custom className */
	className?: string;
	/** disable the button */
	disabled?: boolean;
	/** only containing icon, larger font size */
	iconOnly?: boolean;
	/** label text for button */
	label?: string;
	/** type of the button */
	type?: ButtonType;
	/** url link to, will render <a> if there is url */
	url?: string;
	/** variant of the button */
	variant?: ButtonVariant;
}

function Button({
	children,
	className,
	disabled,
	iconOnly,
	label,
	type,
	url,
	variant,
}: IButtonProps) {
	const classes = classNames(
		styles['button'],
		className,
		variant && styles[`button--${variant}`],
		url && disabled && styles['disabled'], /** add `.disabled` class to disabled anchor tag */
		iconOnly && styles['button--icon-only'] /** only containing icon, larger font size */
	);

	return url ? (
		<a
			aria-disabled={disabled} /** specify disabled state to disabled anchor tag */
			aria-label={label} /** specify label text to increase accessibility */
			className={classes}
			href={url}
			tabIndex={disabled ? -1 : 0} /** make disabled anchor tag not reachable by keyboard navigation */
		>
			{children}
		</a>
	) : (
		<button
			aria-label={label} /** specify label text to increase accessibility */
			className={classes}
			disabled={disabled}
			type={type}
		>
			{children}
		</button>
	);
}

export { Button };
