/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-27 10:20:40
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import currency from 'src/utils/format-currency';
import { BsBank2 } from 'react-icons/bs';

import { Select } from 'antd';

const propTypes = {
	style: PropTypes.object.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

const defaultProps = {
	style: {},
	value: null,
	onChange: f => f,
};

const SelectAccount = (props) => {
	// const { style, value, onChange } = props;

	const options = useSelector(state => state.deposits);

	return (
		<Select
			style={{
				width: '100%',
			}}
			placeholder="Select an account"
			defaultValue={options?.[0]?.id}
			{...props}
			optionLabelProp="label"
		>
			{
				options.map((el) => {
					return (
						<Select.Option key={el.id} value={el.id} label={el.name + ` (${currency.format(el.balance)})`}>
							<div className="p-2 d-flex align-items-center">
								<BsBank2 size={36} />
								<div className="ml-3">
									<strong>{el.name}</strong>
									<div className="text-muted">
										{currency.format(el.balance)}
									</div>
								</div>
							</div>
						</Select.Option>
					);
				})
			}
		</Select>

	);
};

SelectAccount.propTypes = propTypes;

SelectAccount.defaultProps = defaultProps;

export default SelectAccount;
