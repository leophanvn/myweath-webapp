/* eslint-disable no-unsafe-optional-chaining */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 12:05:52
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@zellosoft/antd-react-native/lib/style';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';

import { Button, Message } from 'antd';

import PageTitle from 'src/components/PageTitle';
import Card from 'src/components/Card';

import DisplayInfo from 'src/components/DisplayInfo';
import dataPortfolios from './data';

const propTypes = {
	// route: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const PortfolioRecommendedScreen = (props) => {
	const router = useRouter();
	const { goalId } = router.query || {};

	// const theme = useTheme();
	const [loading, setLoading] = React.useState(false);

	const data = useSelector(state => state.goals?.find(el => {
		return el.id === goalId;
	})) || {};

	// React.useEffect(() => {
	// 	form.setFieldsValue({
	// 		duration: '20',
	// 		total: '500',
	// 		...data,
	// 	});
	// }, [data, form]);

	const dispatch = useDispatch();

	const handleSubmitFrom = React.useCallback(async (values) => {
		try {
			Router.push('/portfolios/new' + (goalId ? '?goalId=' + goalId : ''));
		} catch (error) {
			Message.error(error.message || error.toString);
		}
	}, [goalId]);

	// eslint-disable-next-line prefer-const
	let [rec, c] = data.recommendedPortfolio?.split('/');

	if (rec === 'Flagship') {
		rec = 'Core ' + c;
	}

	const portfolio = dataPortfolios[rec] || {};

	return (
		<div>
			<PageTitle
				title="Portfolio Construction"
				// subtitle="My preferred approach in portfolio construction."
			/>
			<Card>
				<div className="row">
					<div className="col-6">
						<strong
							style={{
								// divAlign: 'center',
							}}
						>
							Recommended Portfolio
						</strong>

						<h3
							style={{
								// divAlign: 'center',
								marginTop: 0,
								marginBottom: 10,
							}}
							className="text-primary"
						>
							{data.recommendedPortfolio}
						</h3>
						<div>
							{portfolio.desc}
						</div>
						<div
							style={{
								textAlign: 'left',
								marginTop: 20,
							}}
						>
							In case you don&apos;t agree with recommended portfolio,{'\n'}you can
							{' '}
							<a
								onClick={() => Router.push('/portfolios/portfolio-construction' + (goalId ? '?goalId=' + goalId : ''))}
							>
								reassess your answers.
							</a>
						</div>
					</div>
					<div
						className="col-6"
					>
						<div className="mb-2">
							<strong className="m">Portfolio Overview</strong>
						</div>
						<DisplayInfo
							label="Model Portfolio Used"
							value={portfolio.overview?.model}
							inline
							bordered
						/>
						<DisplayInfo
							label="Target Returns"
							value={(portfolio.overview?.targetReturns || '--') + '%'}
							inline
							bordered
						/>
						<DisplayInfo
							label="Target Risk"
							value={(portfolio.overview?.targetRisk || '--') + '%'}
							inline
							bordered
						/>
						<DisplayInfo
							label="Probability of Loss"
							value={(portfolio.overview?.probLoss || '--') + '%'}
							inline
							bordered
						/>

						<DisplayInfo
							label="Historical Horizon"
							value={(portfolio.overview?.historicalHorizon || '--') + 'Y'}
							inline
							bordered
						/>

						<DisplayInfo
							label="Swap Rate"
							value={(portfolio.overview?.swapRate || '--') + '%'}
							inline
							bordered
						/>
						<DisplayInfo
							label="Historical Time Horizon"
							value={portfolio.overview?.historicalTimeHorizon}
							inline
						/>
					</div>
				</div>

			</Card>
			<div
				style={{
					paddingBottom: 0,
					// paddingTop: 20,
					textAlign: 'right',
				}}
			>

				<Button
					onClick={handleSubmitFrom}
					// onClick={() => navigation.navigate('Quiz')}
					loading={loading}
					type="primary"

				>
					Continue
				</Button>
			</div>
		</div>
	);
};

PortfolioRecommendedScreen.propTypes = propTypes;

PortfolioRecommendedScreen.defaultProps = defaultProps;

export default PortfolioRecommendedScreen;
