/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-10-24 11:40:06
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import IcoMoon from 'react-icomoon';
import iconSet from './selection.json';

const propTypes = {
	name: PropTypes.string.isRequired,
};

const defaultProps = {
	name: null,
};

const Icon = (props) => {
	const { name } = props;

	return (
		<IcoMoon iconSet={iconSet} {...props} icon={name} />
	);
};

Icon.propTypes = propTypes;

Icon.defaultProps = defaultProps;

export default Icon;
