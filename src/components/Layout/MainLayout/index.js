/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:38:42
*------------------------------------------------------- */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Router from 'next/router';
import Image from 'next/image';

import { Layout, BackTop } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons';

import Sidebar from 'src/components/Layout/Sidebar';
import Header from 'src/components/Layout/Header';
import Footer from 'src/components/Layout/Footer';
import Logo from 'src/components/Layout/Logo';

import CookieAlert from 'src/components/CookieAlert';

import classes from './style.module.less';

const { Content, Sider } = Layout;

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {
	children: null,
};

const MainLayout = (props) => {
	const { children } = props;

	const [collapsed, setCollapsed] = useState(false);
	const [mobiShow, setMobiShow] = useState(false);
	const [broken, setBroken] = useState(false);

	useEffect(() => {
		const handleRouteChange = url => {
			setMobiShow(false);
		};

		Router.events.on('routeChangeStart', handleRouteChange);
		return () => {
			Router.events.off('routeChangeStart', handleRouteChange);
		};
	}, []);

	const handleToggle = () => {
		if (broken) {
			setMobiShow(!mobiShow);
		} else {
			setCollapsed(!collapsed);
		}
	};

	return (
		<>
			<Layout
				style={{
					minHeight: '100vh',
				}}
				className={classes.root}
			>
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed && !broken}
					className={classes.sidebar}
					breakpoint="lg"
					onBreakpoint={(val) => {
						setBroken(val);
						if (val) {
							setCollapsed(false);
							setMobiShow(false);
						}
					}}
					width={200}
					style={{
						left: broken && !mobiShow ? -200 : 0,
					}}
				>
					<div className={classes.logo}>
						<Logo
							size={25}
							showText={!collapsed}
						/>
					</div>
					<Sidebar />
				</Sider>
				<Layout
					className={classes.siteLayout}
					style={{
						paddingLeft: broken ? 0 : collapsed ? 80 : 200,
					}}
				>
					<Header
						style={{
							left: broken ? 0 : collapsed ? 80 : 200,
						}}
					>
						{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: classes.trigger,
							onClick: handleToggle,
							style: {
								fontSize: 18,
								marginRight: 5,
								marginTop: 2,
							},
						})}
					</Header>
					{mobiShow && broken && <div className={classes.overlay} onClick={() => setMobiShow(false)} />}
					<div className={classes.content + ' container-fluid'}>
						{children}
					</div>
					<Footer />
				</Layout>
			</Layout>
			<BackTop />
			<CookieAlert />
		</>
	);
};

MainLayout.propTypes = propTypes;
MainLayout.defaultProps = defaultProps;

export default MainLayout;
