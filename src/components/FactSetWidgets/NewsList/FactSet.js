/* eslint-disable no-undef */
/* eslint-disable quotes */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-02-26 20:55:28
*------------------------------------------------------- */
import React from 'react';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const propTypes = {
	// onBlur: PropTypes.func,
	// onFocus: PropTypes.func,
};

const defaultProps = {
	// onBlur: f => f,
	// onFocus: f => f,
};

const Factset = (props) => {
	const router = useRouter();
	const { theme = 'light' } = router.query || {};
	// const { onBlur, onFocus, ...rest } = props;

	React.useEffect(() => {
		const fds = new FdsComponents();
		fds.init('#news-list');
	}, []);

	return (
		<div className="factset">
			<div className={theme === 'dark' ? 'fds-dark' : ''}>
				<div
					id="news-list"
					dangerouslySetInnerHTML={{
						__html: `
							<fds-news-list locale="en-GB"></fds-news-list>
					` }}
				/>
			</div>
		</div>
	);
};

Factset.propTypes = propTypes;

Factset.defaultProps = defaultProps;

export default Factset;
