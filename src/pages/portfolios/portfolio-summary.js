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

import PortfolioSummary from 'src/containers/Portfolios/PortfolioSummary';
import NewPortfolio from 'src/containers/Portfolios/New';

const PortfolioSummaryPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Review your portfolio" />
			<NewPortfolio>
				<PortfolioSummary />
			</NewPortfolio>
		</>
	);
};

PortfolioSummaryPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

PortfolioSummaryPage.defaultProps = {
	// classes: {},
};

export default PortfolioSummaryPage;
