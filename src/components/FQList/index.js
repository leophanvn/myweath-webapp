/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-11-13 23:58:43
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Collapse } from 'antd';

import classes from './style.module.less';

const propTypes = {
	data: PropTypes.array.isRequired,
};

const defaultProps = {
	data: [],
};

const FQList = (props) => {
	const { data } = props;

	return (
		<div>
			<h6 className="text- mb-3">Frequently Asked Questions</h6>
			<Collapse accordion className={classes.collapse}>
				{
					data.map((el, i) => {
						return (
							<Collapse.Panel header={el.question} key={i}>
								<div className="fs-sm" dangerouslySetInnerHTML={{ __html: el.answer }} />
							</Collapse.Panel>
						);
					})
				}
			</Collapse>
		</div>
	);
};

FQList.propTypes = propTypes;

FQList.defaultProps = defaultProps;

export default FQList;
