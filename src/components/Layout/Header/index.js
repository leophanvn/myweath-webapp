/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:15:11
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Input, Space, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

import AvatarDropDown from 'src/components/AvatarDropDown';
import Notifications from 'src/components/Notifications';

import classes from './style.module.less';

const propTypes = {
	children: PropTypes.node,
	style: PropTypes.object,
};

const defaultProps = {
	children: null,
	style: {},
};

const Header = (props) => {
	const { children, style } = props;

	return (
		<div className={classes.headerWrapper}>
			<div className={classes.header + ' container-fluid'} style={style}>
				{children}
				<div className="flex-1">
					<Space>
						<a href="#" className="line-height-1 text-body" style={{ fontSize: 12 }}><FaHeadphonesAlt style={{ verticalAlign: 'middle', marginRight: 5, fontSize: 14 }} />  Support</a>
						<Divider type="vertical" />
						<a href="#" className="line-height-1 text-body" style={{ fontSize: 12 }}><MdOutlineMailOutline style={{ verticalAlign: 'middle', marginRight: 5, fontSize: 14 }} /> jerry.yong@myWealth.ai</a>
					</Space>
				</div>
				<div className={classes.headerRight}>
					<Input
						placeholder="Search..."
						bordered={false}
						prefix={<SearchOutlined className="mr-2" style={{ fontSize: 16 }} />}
						style={{
							backgroundColor: 'rgb(255 255 255)',
							boxShadow: '1px 0px 7px 0px rgb(0 0 0 / 7%)',
							height: '32px',
							borderRadius: '18px',
							border: 'none',
							fontSize: '12px',
							paddingLeft: '20px',
							cursor: 'pointer',
							width: 250,
						}}
					/>
					<Notifications />
					<AvatarDropDown />
				</div>
			</div>
		</div>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
