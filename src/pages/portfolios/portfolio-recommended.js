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

import PortfolioRecommended from 'src/containers/Portfolios/PortfolioRecommended';
import NewPortfolio from 'src/containers/Portfolios/New';

const PortfolioRecommendedPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Portfolio recommended" />
			<NewPortfolio>
				<PortfolioRecommended />
			</NewPortfolio>
		</>
	);
};

PortfolioRecommendedPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

PortfolioRecommendedPage.defaultProps = {
	// classes: {},
};

export default PortfolioRecommendedPage;
