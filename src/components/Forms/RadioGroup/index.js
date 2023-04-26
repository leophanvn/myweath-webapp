/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:54
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

// import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import Item from './Item';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
	checkBoxStyle: PropTypes.object,
	value: PropTypes.string,
	label: PropTypes.any,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'default']),
	error: PropTypes.bool,
	inline: PropTypes.bool,
	right: PropTypes.bool,
};

const defaultProps = {
	style: {},
	checkBoxStyle: {},
	value: '',
	label: null,
	onChange: f => f,
	disabled: false,
	size: 'default',
	error: false,
	inline: false,
	right: false,
};

const RadioGroup = (props) => {
	const { children = [], right, inline, checkBoxStyle, label, size, style, disabled, value, onChange, error, ...attr } = props;

	const handleSelect = React.useCallback((val, l) => {
		onChange(val);
	}, [onChange]);

	return (
		<div
			style={{
				...style,
			}}
		>
			{
				label ?
					<strong
						style={{

						}}
					>
						{label}
					</strong> :
					null
			}
			<div
				{...attr}
				style={{
					width: '100%',
					flexDirection: inline ? 'row' : 'column',
					flexWrap: 'wrap',
					display: 'flex',
					marginTop: 20,
				}}
			>
				{
					React.Children.map(children, (child, index) => {
						return React.cloneElement(
							child,
							{
								onClick: (v, l) => {
									handleSelect(v, l);
									child?.props?.onClick(v, l);
								},
								isSelected: child?.props?.value === value,
								disabled,
								size,
								inline,
								checkBoxStyle,
								right,
								error,
								last: index === children.length - 1,
							},
						);
					})
				}
			</div>
		</div>
	);
};

RadioGroup.Item = Item;

RadioGroup.propTypes = propTypes;

RadioGroup.defaultProps = defaultProps;

export default RadioGroup;
