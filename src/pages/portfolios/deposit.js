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

import Deposit from 'src/containers/Portfolios/Deposit';
import NewPortfolio from 'src/containers/Portfolios/New';

const DepositPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Deposit funds" />
			<NewPortfolio>
				<Deposit />
			</NewPortfolio>
		</>
	);
};

DepositPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

DepositPage.defaultProps = {
	// classes: {},
};

export default DepositPage;
