/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-01-13 22:57:59
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Link from 'next/link';

import Image from 'next/image';

const propTypes = {
	size: PropTypes.number,
	style: PropTypes.object,
	className: PropTypes.string,
	showText: PropTypes.bool,
	isLink: PropTypes.bool,
};

const defaultProps = {
	size: 30,
	style: {},
	className: '',
	showText: true,
	isLink: true,
};

const Logo = (props) => {
	const { size, style, className, showText, isLink } = props;

	const settings = useSelector(state => state.settings) || {};

	const logo = React.useMemo(() => {
		return settings.theme === 'dark' ? '/images/logo-fulltext-contrast.png' : '/images/logo-fulltext.png';
	}, [settings.theme]);

	const width = React.useMemo(() => {
		if (showText) {
			return (size / 1019) * 5357;
		}

		return size;
	}, [showText, size]);

	if (!isLink) {
		return (
			<div
				className={className}
				style={{
					...style,
				}}
			>
				<Image
					src={showText ? logo : '/images/logo.png'}
					alt="Logo"
					width={width}
					height={size}
					quality={100}
				/>
			</div>
		);
	}

	return (
		<div
			className={className}
			style={{
				...style,
			}}
		>
			<Link href="/">
				<Image
					src={showText ? logo : '/images/logo.png'}
					alt="Logo"
					width={width}
					height={size}
					quality={100}
				/>
			</Link>
		</div>
	);
};

Logo.propTypes = propTypes;

Logo.defaultProps = defaultProps;

export default Logo;
