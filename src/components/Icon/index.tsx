/**
 * Icon
 * ------------------------------------------------------------
 * imported SVG icons handled by svg-sprite-loader
 * then bundled into file named: scmicon-svg-sprites.svg
 * use xlink:href to dynamically load icon
 * check webpack.common.ts for configuration
 */
/**
 * TODO:
 * 1. Make icon accessible
 */

import * as classNames from 'classnames';
import * as React from 'react';

/** import SVG icons */
import '../../images/icons/angle-down.svg';
import '../../images/icons/angle-up.svg';
import '../../images/icons/arrow-left.svg';
import '../../images/icons/arrow-right.svg';
import '../../images/icons/bars.svg';
import '../../images/icons/bell-o.svg';
import '../../images/icons/bell.svg';
import '../../images/icons/book.svg';
import '../../images/icons/caret-down.svg';
import '../../images/icons/caret-up.svg';
import '../../images/icons/chain.svg';
import '../../images/icons/check-circle.svg';
import '../../images/icons/check.svg';
import '../../images/icons/close.svg';
import '../../images/icons/commenting-o.svg';
import '../../images/icons/facebook-square.svg';
import '../../images/icons/graduation-cap.svg';
import '../../images/icons/heart.svg';
import '../../images/icons/home.svg';
import '../../images/icons/instagram.svg';
import '../../images/icons/linkedin-square.svg';
import '../../images/icons/list-alt.svg';
import '../../images/icons/lock.svg';
import '../../images/icons/long-arrow-right.svg';
import '../../images/icons/music.svg';
import '../../images/icons/paper-plane.svg';
import '../../images/icons/star-o.svg';
import '../../images/icons/star.svg';
import '../../images/icons/twitter-square.svg';
import '../../images/icons/unlock-alt.svg';
import '../../images/icons/user-o.svg';
import '../../images/icons/user.svg';
import '../../images/icons/video-camera.svg';

/** import styles */
import './Icon.scss';

/** define icon name */
type IconName =
	| 'angle-down'
	| 'angle-up'
	| 'arrow-left'
	| 'arrow-right'
	| 'bars'
	| 'bell-o'
	| 'bell'
	| 'book'
	| 'caret-down'
	| 'caret-up'
	| 'chain'
	| 'check-circle'
	| 'check'
	| 'close'
	| 'commenting-o'
	| 'facebook-square'
	| 'graduation-cap'
	| 'heart'
	| 'home'
	| 'instagram'
	| 'linkedin-square'
	| 'list-alt'
	| 'lock'
	| 'long-arrow-right'
	| 'music'
	| 'paper-plane'
	| 'paperclip'
	| 'phone-square'
	| 'star-o'
	| 'star'
	| 'twitter-square'
	| 'unlock-alt'
	| 'user-o'
	| 'user'
	| 'video-camera';

interface IIconProps {
	name: IconName;
}

function Icon({
	name,
}: IIconProps) {
	const className = classNames(
		'scmicon'
	);

	return (
		<svg className={className}>
			<use xlinkHref={'scmicon-svg-sprites.svg#' + name} />
		</svg>
	);
}

export { Icon };
