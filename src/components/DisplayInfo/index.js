/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 14:21:36
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	icon: PropTypes.any,
	label: PropTypes.any,
	value: PropTypes.any,
	style: PropTypes.object,
	align: PropTypes.string,
	inline: PropTypes.bool,
	bordered: PropTypes.bool,
	className: PropTypes.string,
};

const defaultProps = {
	icon: null,
	label: '--',
	value: '--',
	style: {},
	align: 'left',
	inline: false,
	bordered: false,
	className: '',
};

const DisplayInfo = (props) => {
	const { icon, className, align, bordered, inline, value, label, style } = props;

	return (
		<div
			style={{
				padding: '10px 0',
				...style,
			}}
			className={(bordered ? 'border-bottom' : '') + ' ' + className}
		>
			<div
				style={{
					flexDirection: 'row',
					display: 'flex',
					alignItems: 'center',
					marginBottom: inline ? 5 : 15,
					flex: 1,
				}}
			>
				{
					icon ?
						<div style={{ marginRight: 10 }} className="text-primary">
							{icon}
						</div> :
						null
				}
				<div
					style={{
						flex: 1,
						flexDirection: inline ? 'row' : 'column',
						alignItems: inline ? 'center' : (align === 'right' ? 'flex-end' : 'flex-start'),
						display: 'flex',
						justifyContent: inline ? 'space-between' : 'space-between',
					}}
				>
					<div
						// type="strong"
						className="text-muted"
						style={{
							marginBottom: inline ? 0 : 3,
							textAlign: align,
							marginRight: inline ? 10 : 0,
							flex: 1,
						}}
					>
						{label}
					</div>
					<strong
						style={{
							textAlign: align,
						}}
					>
						{value}
					</strong>
				</div>
			</div>
		</div>
	);
};

DisplayInfo.propTypes = propTypes;

DisplayInfo.defaultProps = defaultProps;

export default DisplayInfo;
