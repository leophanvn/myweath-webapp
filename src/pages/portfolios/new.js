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

import Portfolios from 'src/containers/Portfolios/New';

const PortfoliosPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Start new portfolio" />
			<Portfolios />
		</>
	);
};

PortfoliosPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

PortfoliosPage.defaultProps = {
	// classes: {},
};

export default PortfoliosPage;
