/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:30:54
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from './CheckBox';

const propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	isSelected: PropTypes.bool,
	last: PropTypes.bool,
	error: PropTypes.bool,
	inline: PropTypes.bool,
	right: PropTypes.bool,
	style: PropTypes.object,
	checkBoxStyle: PropTypes.object,
};

const defaultProps = {
	onClick: f => f,
	children: '',
	disabled: false,
	isSelected: false,
	error: false,
	last: false,
	inline: false,
	right: false,
	style: {},
	checkBoxStyle: {},
};

const Item = (props) => {
	const { value, right, style, checkBoxStyle, children, inline, onClick, last, error, isSelected, disabled } = props;

	return (
		<div
			onClick={disabled ? f => f : () => {
				onClick(value, children);
			}}
			style={{
				marginBottom: inline ? 0 : 10,
				alignItems: 'flex-start',
				flexDirection: 'row',
				display: 'flex',
				cursor: 'pointer',
				marginRight: (inline && !last) ? 15 : 0,
				...style,
				opacity: disabled ? 0.5 : 1,
				border: isSelected ? '1px solid #00953B' : '1px solid #DBDCDD',
			}}
		>
			{
				!right ?
					<CheckBox
						readOnly={isSelected}
						onChange={(disabled || isSelected) ? f => f : (checked) => {
							if (checked) {
								onClick(value, children);
							}
						}}
						value={isSelected}
						innerStyle={{
							borderRadius: 30,
							height: 30,
							marginRight: 10,
							width: 30,
							border: error ? '1px solid red' : '1px solid #DBDCDD',
							...checkBoxStyle,
						}}
					/> :
					null
			}
			{
				children ?
					<div
						color={error ? 'danger' : 'normal'}
						style={{
							// flex: 1,
							// paddingRight: 15,
							...(!inline ? {
								flex: 1,
							} : {}),
						}}
					>
						{children}
					</div> :
					null
			}
			{
				right ?
					<CheckBox
						readOnly={isSelected}
						onChange={(disabled || isSelected) ? f => f : (checked) => {
							if (checked) {
								onClick(value, children);
							}
						}}
						value={isSelected}
						innerStyle={{
							borderRadius: 30,
							height: 30,
							marginLeft: 10,
							width: 30,
							border: error ? '1px solid red' : '1px solid #DBDCDD',
							...checkBoxStyle,
						}}
					/> :
					null
			}
		</div>
	);
};

Item.propTypes = propTypes;

Item.defaultProps = defaultProps;

export default Item;
