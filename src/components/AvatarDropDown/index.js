/* eslint-disable no-console */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:15:11
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Dropdown, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import Router from 'next/router';
import Link from 'next/link';

import { BiKey } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';

import {
	ExclamationCircleOutlined,
} from '@ant-design/icons';

import Avatar from 'src/components/Avatar';

import { actionLogout } from 'src/redux/actions/auth';

import classes from './style.module.less';

const propTypes = {
	style: PropTypes.object,
};

const defaultProps = {
	style: {},
};

const AvatarDropDown = (props) => {
	const { style } = props;

	const auth = useSelector(state => state.auth);

	const dispatch = useDispatch();

	const handleLogout = React.useCallback(async () => {
		Modal.confirm({
			title: 'Are you sure?',
			icon: <ExclamationCircleOutlined />,
			// content: 'Are you sure?',
			onOk: async () => {
				await dispatch(await actionLogout(() => {
					Router.push('/login');
				}));
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	}, [dispatch]);

	const menu = (
		<Menu className={classes.menuDropdown}>
			<div className="text-center py-3">
				<Avatar
					size={70}
					src={auth.avatar || 'https://nhsscotlandevents.com/sites/default/files/default_images/person.jpeg'}
					fullName={auth.firstName + ' ' + auth.lastName}
				/>
				<div>
					<h3 className="mb-0 mt-2">{auth.firstName + ' ' + auth.lastName}</h3>
					<div className="text-small">{auth.email}</div>
				</div>
			</div>
			<Menu.Divider />
			{/* <Menu.Item>
				<Link href="/profile">
					<a className={classes.item}>
						<FiUser />
						<span>Profile</span>
					</a>
				</Link>
			</Menu.Item> */}
			<Menu.Item key="change">
				<Link href="/change-password" className={classes.item}>
					<BiKey />
					<span>Change password</span>
				</Link>
			</Menu.Item>
			<Menu.Item key="logout">
				<a className={classes.item} onClick={handleLogout}>
					<AiOutlineLogout />
					<span>Logout</span>
				</a>
			</Menu.Item>
		</Menu>
	);

	return (
		<Dropdown style={style} overlay={menu} trigger={['click']}>
			<div
				className="d-flex"
				style={{
					cursor: 'pointer',
				}}
			>
				<Avatar
					size={35}
					src={auth.avatar || 'https://nhsscotlandevents.com/sites/default/files/default_images/person.jpeg'}
					fullName={auth.firstName + ' ' + auth.lastName}
					style={{
						cursor: 'pointer',
					}}
				/>
				<div className={classes.fullName + ''}>
					<strong className="mb-0">{auth.firstName + ' ' + auth.lastName}</strong>
					<div className="text-small text-muted">{auth.email}</div>
				</div>
			</div>
		</Dropdown>
	);
};

AvatarDropDown.propTypes = propTypes;
AvatarDropDown.defaultProps = defaultProps;

export default AvatarDropDown;
