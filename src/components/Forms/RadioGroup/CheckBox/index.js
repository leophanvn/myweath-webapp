/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 4022-03-29 14:29:29
*------------------------------------------------------- */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { BiCheck } from 'react-icons/bi';

const propTypes = {
	style: PropTypes.object,
	innerStyle: PropTypes.object,
	onChange: PropTypes.func,
	value: PropTypes.bool,
	label: PropTypes.any,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	readOnly: PropTypes.bool,
};

const defaultProps = {
	style: {},
	innerStyle: {},
	onChange: f => f,
	value: false,
	disabled: false,
	label: null,
	error: false,
	readOnly: false,
};

const CheckBox = (props) => {
	const { style, innerStyle, label, error, onChange = f => f, value, disabled, readOnly } = props;

	const [isChecked, setIsCheck] = useState(value);

	useUpdateEffect(() => {
		onChange(isChecked);
	}, [isChecked]);

	useUpdateEffect(() => {
		setIsCheck(value);
	}, [value]);

	const handleCheck = useCallback(() => {
		setIsCheck((val) => {
			return !val;
		});
	}, []);

	return (
		<div
			onClick={(disabled || readOnly) ? f => f : handleCheck}
			// feedback={!(disabled || readOnly)}
			style={{
				...style,
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					opacity: disabled ? 0.5 : 1,
				}}
			>
				<div
					style={{
						backgroundColor: disabled ? 'gray' : isChecked ? '#00953B' : '#fff',
						borderColor: error ? 'red' : '#DBDCDD',
						borderWidth: 1,
						borderRadius: 6,
						width: 30,
						height: 30,
						alignItems: 'center',
						justifyContent: 'center',
						...innerStyle,
					}}
				>
					<BiCheck
						name="check"
						size={26}
						color={isChecked ? '#fff' : '#fff'}
						style={{
							// lineHeight: 25,
						}}
					/>
				</div>
			</div>
			{
				label ?
					<div
						style={{
							marginLeft: 10,
						}}
					>
						{label}
					</div> :
					null
			}
		</div>
	);
};

CheckBox.propTypes = propTypes;

CheckBox.defaultProps = defaultProps;

export default CheckBox;
