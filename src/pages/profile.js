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

import Profile from 'src/containers/Profile';
import Settings from 'src/containers/Settings';

const ProfilePage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Auto-Rebalance" />
			<Settings>
				<Profile />
			</Settings>
		</>
	);
};

ProfilePage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

ProfilePage.defaultProps = {
	// classes: {},
};

export default ProfilePage;
