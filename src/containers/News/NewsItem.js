/* eslint-disable @next/next/no-html-link-for-pages */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 21:05:31
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import moment from 'src/utils/moment';
import Link from 'next/link';

import classes from './style.module.less';

const propTypes = {
	data: PropTypes.object.isRequired,
};

const defaultProps = {
	data: {},
};

const NewsItem = (props) => {
	const { data } = props;

	return (
		<Link href={'/news/' + data.slug}>
			<div className={classes.newsItem}>
				<div
					className={classes.newsItemImg}
					style={{
						backgroundSize: 'cover',
						objectFit: 'cover',
						backgroundImage: `url("${data.thumbnail}")`,
					}}
				/>
				<div className={classes.newsItemText}>
					<div className={classes.newsItemCategory}>
						{data.category?.name} - {moment(data.publishedDate).format('LL')}
					</div>
					<h5 className={classes.newsItemTitle}>
						{data.title}
					</h5>
					<div className={classes.newsItemContent}>
						{data.summary}
					</div>
				</div>
			</div>
		</Link>
	);
};

NewsItem.propTypes = propTypes;

NewsItem.defaultProps = defaultProps;

export default NewsItem;
