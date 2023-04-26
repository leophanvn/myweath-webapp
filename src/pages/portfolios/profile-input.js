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

import ProfileInput from 'src/containers/Portfolios/ProfileInput';
import NewPortfolio from 'src/containers/Portfolios/New';

const ProfileInputPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Enter Personal Details" />
			<NewPortfolio>
				<ProfileInput />
			</NewPortfolio>
		</>
	);
};

ProfileInputPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

ProfileInputPage.defaultProps = {
	// classes: {},
};

export default ProfileInputPage;
