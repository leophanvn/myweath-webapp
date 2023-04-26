/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-11-10 23:53:45
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import classes from './style.module.less';

const propTypes = {
	className: PropTypes.string,
	title: PropTypes.any,
	subtitle: PropTypes.any,
	action: PropTypes.any,
	style: PropTypes.object,
};

const defaultProps = {
	title: null,
	subtitle: null,
	action: null,
	className: '',
	style: {},
};

const PageTitle = (props) => {
	const { subtitle, className, style, title, action } = props;

	return (
		<div className={classes.card + ' ' + className} style={style}>
			<div className={classes.title}>
				<div className={classes.titleInner}>
					<div className={classes.name}>
						{title}
					</div>
					{subtitle && <p className="">{subtitle}</p>}
				</div>
				{
					action &&
					<div className={classes.action}>
						{action}
					</div>
				}
			</div>
		</div>
	);
};

PageTitle.propTypes = propTypes;

PageTitle.defaultProps = defaultProps;

export default PageTitle;
