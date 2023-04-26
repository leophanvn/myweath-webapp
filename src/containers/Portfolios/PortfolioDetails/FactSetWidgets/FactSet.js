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
		fds.init('#factset-widgets');
	}, []);

	return (
		<div className="factset">
			<div className={theme === 'dark' ? 'fds-dark' : ''}>
				<div className="pb-2">
					<div
						id="factset-widgets"
						dangerouslySetInnerHTML={{
							__html: `
							<div class="fds-box">
								<h5 className="mb-5">Target Asset Allocation by geography</h5>
								<fds-world-map :time-spans="['intra', '1w', '1m', '3m', 'ytd', '1y', '3y', '5y']" :update-frequency="10000" locale="en-GB" theme="dark"></fds-world-map>
							</div>
							<div class="fds-box">
								<h5 class="mb-5">Historical performance of portfolio</h5>
								<fds-performance-chart :ids="['FDS']" :time-spans="['intra', '1w', '1m', '3m', 'ytd', '1y', '3y', '5y', 'max']" locale="en-GB"> </fds-performance-chart>
							</div>
					` }}
					/>
				</div>
			</div>
		</div>
	);
};

Factset.propTypes = propTypes;

Factset.defaultProps = defaultProps;

export default Factset;
