/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-03-10 10:56:27
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { Dropdown, Badge, Spin, Empty } from 'antd';

import { FaBell } from 'react-icons/fa';

import classes from './style.module.less';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Notifications = (props) => {
	// const { } = props;

	const menu = (
		<div className={classes.menuDropdown}>
			<Spin spinning={false}>
				<div className="d-flex align-items-center justify-content-between px-3 py-1 border-bottom">
					<h3 className="fs-l mb-0">Notification</h3>
				</div>
				<div className={classes.list}>
					<Empty className="mt-5" />
				</div>
			</Spin>
		</div>
	);

	return (
		<Dropdown overlay={menu} trigger={['click']}>
			<div style={{ display: 'flex' }} className="px-4 cursor-pointer align-items-center">
				<Badge count={1} dot>
					<FaBell size={20} />
				</Badge>
			</div>
		</Dropdown>
	);
};

Notifications.propTypes = propTypes;

Notifications.defaultProps = defaultProps;

export default Notifications;
