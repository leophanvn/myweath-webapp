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

import PortfolioDetails from 'src/containers/Portfolios/PortfolioDetails';

const PortfolioDetailsPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Review your portfolio" />
			<PortfolioDetails />
		</>
	);
};

PortfolioDetailsPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

PortfolioDetailsPage.defaultProps = {
	// classes: {},
};

export default PortfolioDetailsPage;
