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

import TopUp from 'src/containers/Deposits/TopUp';

const TopUpPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Top-up" />
			<TopUp />
		</>
	);
};

TopUpPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

TopUpPage.defaultProps = {
	// classes: {},
};

export default TopUpPage;
