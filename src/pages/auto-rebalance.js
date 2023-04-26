/* eslint-disable no-undef */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:34:26
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Head from 'src/components/Head';

import AutoRebalance from 'src/containers/AutoRebalance';
import Settings from 'src/containers/Settings';

const AutoRebalancePage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Auto-Rebalance" />
			<Settings>
				<AutoRebalance />
			</Settings>
		</>
	);
};

AutoRebalancePage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

AutoRebalancePage.defaultProps = {
	// classes: {},
};

export default AutoRebalancePage;
