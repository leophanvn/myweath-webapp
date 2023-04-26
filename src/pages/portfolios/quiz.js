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

import Quiz from 'src/containers/Portfolios/QuizScreen';
import NewPortfolio from 'src/containers/Portfolios/New';

const QuizPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Risk Profiling" />
			<NewPortfolio>
				<Quiz />
			</NewPortfolio>
		</>
	);
};

QuizPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

QuizPage.defaultProps = {
	// classes: {},
};

export default QuizPage;
