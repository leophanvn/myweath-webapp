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

import FactSetWidgets from 'src/components/FactSetWidgets';

const FactSetWidgetsPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Investment Insights" />
			<FactSetWidgets />
		</>
	);
};

FactSetWidgetsPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

FactSetWidgetsPage.defaultProps = {
	// classes: {},
};

export default FactSetWidgetsPage;
