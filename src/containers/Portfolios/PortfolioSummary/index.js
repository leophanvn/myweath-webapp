/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 12:05:52
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';

import { Button, Message, Alert, Divider } from 'antd';

import { actionUpdateProfile } from 'src/redux/actions/auth';
import { update } from 'src/redux/actions/goals';

import DisplayInfo from 'src/components/DisplayInfo';
import Card from 'src/components/Card';
import PageTitle from 'src/components/PageTitle';

import dataPortfolios from 'src/containers/Portfolios/PortfolioRecommended/data';
import weightData from 'src/containers/Portfolios/PortfolioReview/PortfolioWeights/weight-data.json';

// import extractWeight from 'src/tools/extract-weight';

import dynamic from 'next/dynamic';

import FactSetWidgets from './FactSetWidgets';
import AssetAllocation from './AssetAllocation';

const BarChart = dynamic(() => import('./BarChart'), { ssr: false });
const LineChart = dynamic(() => import('./LineChart'), { ssr: false });

const propTypes = {
	// route: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const PortfolioScreen = () => {
	const router = useRouter();
	const { goalId } = router.query || {};

	// React.useEffect(() => {
	// 	console.log('extractWeight();', JSON.stringify(extractWeight()));
	// }, []);
	const auth = useSelector(state => state.auth);

	const dispatch = useDispatch();

	const [loading, setLoading] = React.useState(false);

	const handleSubmitFrom = React.useCallback(async () => {
		setLoading(true);
		try {
			if (!auth.builtPortfolio || goalId) {
				await dispatch(await actionUpdateProfile({
					builtPortfolio: true,
				}));

				await dispatch(await update({
					id: goalId,
					builtPortfolio: true,
				}));

				Router.push('/portfolios/new' + (goalId ? '?goalId=' + goalId : ''));

				return;
			}
			Router.back();
		} catch (error) {
			Message.error(error.message || error.toString);
		} finally {
			setLoading(false);
		}
	}, [auth.builtPortfolio, dispatch, goalId]);

	const goalData = useSelector(state => state.goals?.find(el => {
		return el.id === goalId;
	})) || {};
	// const theme = useTheme();
	const { riskProfile } = goalData;

	const [rec, c] = goalData.recommendedPortfolio?.split('/') || [];

	let prod = rec;

	if (rec === 'Flagship') {
		prod = 'Core ' + c;
	}

	const dataMockT = React.useMemo(() => {
		return weightData[prod] || [];
	}, [prod]);

	const portfolio = dataPortfolios[prod] || {};

	return (
		<div
			className="row"
		>
			<div className="col-12">
				<PageTitle
					title="Review your portfolio"
				/>
				<Card
					title="About this portfolio"
				>
					<div className="row">
						<div className="col-6">
							<div className="flex-1 mb-4">
								<div>Portfolio name</div>
								<h6 className="text-primary">
									{
										goalData.label
									}
								</h6>
								<p className="">
									{
										goalData.desc
									}
								</p>
							</div>
							<Divider />
							<div
								className="mb-4"
							>
								<div>
									<div
										style={{
											// textAlign: 'center',
											// marginBottom: 5,
										}}
									>
										Your risk profile is
									</div>
									<h6
										className="text-primary"
										style={{
											// textAlign: 'center',
											textTransform: 'capitalize',
										}}
									>
										{riskProfile}
									</h6>
								</div>
							</div>
							<Alert description={`Based on what you told us about your financial account, we recommend you shouldn't exceed ${riskProfile} risk level`} type="warning" showIcon />
						</div>
						<div className="col-6">
							<div
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center',
									display: 'flex',
								}}
							>

								<div
									className="flex-1"
								>
									<div
										style={{
										}}
									>
										Recommended Portfolio
									</div>
									<h6
										style={{
											// marginTop: 10,
											marginBottom: 20,
										}}
										className="text-primary"
									>
										{goalData.recommendedPortfolio}
									</h6>
								</div>
							</div>
							<div
								style={{
									marginBottom: 20,
								}}
							>
								{portfolio.desc}
							</div>
							<div
								style={{
									// padding: 15,
								}}
							>
								<div
									title="Portfolio Overview"
								>
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
						</div>
					</div>
				</Card>
			</div>
			<div className="col-12">
				<Card title="Asset Allocations">
					<BarChart portfolio={prod} data={dataMockT} formData={goalData?.portfolioData} />
				</Card>

				<AssetAllocation data={dataMockT} formData={goalData?.portfolioData} total={100} />
				<FactSetWidgets />

				<Card
					title="Projection"
				>
					<LineChart />
				</Card>
				<div
					style={{
						marginTop: 20,
						marginBottom: 20,
						textAlign: 'right',
					}}
				>
					<Button
						// onClick={() => setStarted(true)}
						onClick={() => Router.back()}
						loading={loading}
						className="mr-2"
					>
						Back
					</Button>
					<Button
						// onClick={() => setStarted(true)}
						onClick={handleSubmitFrom}
						loading={loading}
						type="primary"
					>
						{(!auth.builtPortfolio || goalId) && !goalData.isCompleted ? 'Confirm' : 'Back'}
					</Button>
				</div>
			</div>
		</div>
	);
};

PortfolioScreen.propTypes = propTypes;

PortfolioScreen.defaultProps = defaultProps;

export default PortfolioScreen;
