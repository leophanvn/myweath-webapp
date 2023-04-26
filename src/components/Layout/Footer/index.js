/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:08:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { Space, Divider } from 'antd';

import classes from './style.module.less';

const Footer = (props) => {
	// const { } = props;

	return (
		<footer className={classes.footer + ' container-fluid'}>
			<div>
				<strong className="text-primary">myWealth.ai</strong>
				<span> 2022 © All Rights Reserved.</span>
			</div>
			<div className="ml-auto">
				<Space>
					<a href="#" className="text-body">Terms of use</a>
					<Divider type="vertical" />
					<a href="#" className="text-body">Privacy policy</a>
				</Space>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	// classes: PropTypes.object.isRequired,
};

Footer.defaultProps = {
	// classes: {},
};

export default Footer;
