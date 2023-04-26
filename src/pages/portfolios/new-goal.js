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

import GoalNew from 'src/containers/Portfolios/GoalNew';
import NewPortfolio from 'src/containers/Portfolios/New';

const GoalNewPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Goal Setting" />
			<NewPortfolio>
				<GoalNew />
			</NewPortfolio>
		</>
	);
};

GoalNewPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

GoalNewPage.defaultProps = {
	// classes: {},
};

export default GoalNewPage;
