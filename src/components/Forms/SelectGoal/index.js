/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-28 01:04:42
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Select } from 'antd';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const SelectGoal = (props) => {
	const data = useSelector(state => state.goals);

	const options = React.useMemo(() => {
		return data.map((el) => {
			return {
				value: el.id,
				label: el.label,
			};
		});
	}, [data]);

	return (
		<Select
			{...props}
			options={options}
		/>
	);
};

SelectGoal.propTypes = propTypes;

SelectGoal.defaultProps = defaultProps;

export default SelectGoal;
