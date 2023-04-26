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
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	title: PropTypes.any,
	action: PropTypes.any,
	style: PropTypes.object,
	styleBody: PropTypes.object,
};

const defaultProps = {
	children: null,
	title: null,
	action: null,
	className: '',
	style: {},
	styleBody: {},
};

const Card = (props) => {
	const { children, className, style, title, action, styleBody } = props;

	return (
		<div className={classes.card + ' ' + className} style={style}>
			{
				title &&
				<div className={classes.title}>
					<div className={classes.titleInner}>
						{title}
					</div>
					{
						action &&
						<div className={classes.action}>
							{action}
						</div>
					}
				</div>
			}
			{
				action && !title &&
				<div className={classes.actionOnly}>
					{action}
				</div>
			}
			<div className={classes.body} style={styleBody}>
				{children}
			</div>
		</div>
	);
};

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Card;
