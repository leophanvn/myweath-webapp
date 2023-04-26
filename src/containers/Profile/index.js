/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-11-14 06:46:44
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from 'antd';

import Card from 'src/components/Card';
import DisplayInfo from 'src/components/DisplayInfo';
import PageTitle from 'src/components/PageTitle';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Profile = (props) => {
	// const { } = props;
	const auth = useSelector(state => state.auth);

	return (
		<div>
			<PageTitle
				title="Profile Information"
				action={
					<Button type="primary">Edit</Button>
				}
			/>
			<Card>
				<div className="d-flex">
					<DisplayInfo
						style={{
							padding: '0 15px',
						}}
						label="Fist Name"
						value={auth.firstName}
						// inline
						// bordered
						className="flex-1"
					/>
					<DisplayInfo
						style={{
							padding: '0 15px',
						}}
						label="Last Name"
						value={auth.lastName}
						// inline
						// bordered
						className="flex-1"
					/>
				</div>
				<div className="d-flex">
					<DisplayInfo
						style={{
							padding: '0 15px',
						}}
						label="Email"
						value={auth.email}
						// inline
						// bordered
						className="flex-1"
					/>
					<DisplayInfo
						style={{
							padding: '0 15px',
						}}
						label="Phonenumber"
						value={auth.phoneNumber}
						// inline
						// bordered
						className="flex-1"
					/>
				</div>
				<div className="d-flex">
					<DisplayInfo
						style={{
							padding: '0 15px',
						}}
						label="Address"
						value={auth.address}
						// inline
						// bordered
						className="flex-1"
					/>
					<DisplayInfo
						style={{
							padding: '0 15px',
						}}
						label="Citizenship"
						value={auth.citizenship}
						// inline
						// bordered
						className="flex-1"
					/>
				</div>
			</Card>
		</div>
	);
};

Profile.propTypes = propTypes;

Profile.defaultProps = defaultProps;

export default Profile;
