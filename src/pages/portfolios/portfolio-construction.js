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

import PortfolioConstruction from 'src/containers/Portfolios/PortfolioConstruction';
import NewPortfolio from 'src/containers/Portfolios/New';

const PortfolioConstructionPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Portfolio construction" />
			<NewPortfolio>
				<PortfolioConstruction />
			</NewPortfolio>
		</>
	);
};

PortfolioConstructionPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

PortfolioConstructionPage.defaultProps = {
	// classes: {},
};

export default PortfolioConstructionPage;
