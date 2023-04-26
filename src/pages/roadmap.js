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

const RoadMapPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="myWealth Roadmap" />
			<div className="text-center p-5 mt-5">
				<h1>Coming Soon</h1>
				<p>Feature under development</p>
			</div>
		</>
	);
};

RoadMapPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

RoadMapPage.defaultProps = {
	// classes: {},
};

export default RoadMapPage;
