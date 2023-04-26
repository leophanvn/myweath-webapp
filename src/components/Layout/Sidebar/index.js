/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:27:02
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

// import { useDispatch } from 'react-redux';
// import useAsyncRetry from 'react-use/lib/useAsyncRetry';

// import AuthStorage from 'src/utils/auth-storage';

import { useRouter } from 'next/router';

import { Menu } from 'antd';
import {
	DashboardOutlined,
} from '@ant-design/icons';
import { BiTransfer } from 'react-icons/bi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { IoNewspaperOutline } from 'react-icons/io5';
import { MdInsights } from 'react-icons/md';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { FiSettings } from 'react-icons/fi';
import { RiRoadMapLine } from 'react-icons/ri';

const propTypes = {
	// children: PropTypes.node,
};

const defaultProps = {};

const Sidebar = () => {
	// const { } = props;

	const router = useRouter();

	// const dispatch = useDispatch();

	// const { value: countUnread = {} } = useAsyncRetry(async () => {
	// 	const response = await dispatch(await count({
	// 		status: 'new',
	// 	}));

	// 	return response;
	// }, []);

	// eslint-disable-next-line no-unused-vars
	// eslint-disable-next-line no-unsafe-optional-chaining
	const [, root, sub] = router.pathname?.split('/');

	return (
		<Menu
			defaultSelectedKeys={['/']}
			selectedKeys={['/' + root]}
			defaultOpenKeys={['/' + root]}
			mode="inline"
			// theme="dark"
			style={{
				padding: '15px 0',
				background: '#f8f9fc',
				overflowX: 'hidden',
			}}
		>
			<Menu.Item key="/" onClick={() => router.push('/')} icon={<DashboardOutlined />}>
				<span>Dashboard</span>
			</Menu.Item>
			<Menu.Item key="/portfolios" onClick={() => router.push('/portfolios')} icon={<AiOutlineFileDone />}>
				<span>Portfolios</span>
			</Menu.Item>
			<Menu.Item key="/roadmap" onClick={() => router.push('/roadmap')} icon={<RiRoadMapLine />}>
				<span>mW Roadmap</span>
			</Menu.Item>
			<Menu.Item icon={<IoNewspaperOutline />} onClick={() => window.open('https://learn.thichhoidap.com/', '_blank', 'noopener,noreferrer')}>
				<span>News</span>
			</Menu.Item>
			<Menu.Item key="/insights" onClick={() => router.push('/insights')} icon={<MdInsights />}>
				<span>Insights</span>
			</Menu.Item>
			<Menu.Item key="/deposits" onClick={() => router.push('/deposits')} icon={<HiOutlineBanknotes />}>
				<span>Deposits</span>
			</Menu.Item>
			{/* <Menu.Item key="/bank-accounts" onClick={() => router.push('/bank-accounts')} icon={<BsBank2 />}>
				<span>Bank Accounts</span>
			</Menu.Item> */}
			<Menu.Item key="/transactions" onClick={() => router.push('/transactions')} icon={<BiTransfer />}>
				<span>Transactions</span>
			</Menu.Item>
			<Menu.Item key="/settings" onClick={() => router.push('/settings')} icon={<FiSettings />}>
				<span>Settings</span>
			</Menu.Item>
		</Menu>
	);
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
