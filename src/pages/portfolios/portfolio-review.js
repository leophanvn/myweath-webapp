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

import PortfolioReview from 'src/containers/Portfolios/PortfolioReview';
import NewPortfolio from 'src/containers/Portfolios/New';

const PortfolioReviewPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Review your portfolio" />
			<NewPortfolio>
				<PortfolioReview />
			</NewPortfolio>
		</>
	);
};

PortfolioReviewPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

PortfolioReviewPage.defaultProps = {
	// classes: {},
};

export default PortfolioReviewPage;
