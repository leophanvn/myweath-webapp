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

import { Button, Message, Progress, Alert } from 'antd';

import { actionUpdateProfile } from 'src/redux/actions/auth';
import { update } from 'src/redux/actions/goals';

import DisplayInfo from 'src/components/DisplayInfo';
import Card from 'src/components/Card';

import dataPortfolios from 'src/containers/Portfolios/PortfolioRecommended/data';
import AssetAllocation from 'src/containers/Portfolios/PortfolioSummary/AssetAllocation';
import weightData from 'src/containers/Portfolios/PortfolioReview/PortfolioWeights/weight-data.json';

import dynamic from 'next/dynamic';

import FactSetWidgets from './FactSetWidgets';

const LineChart = dynamic(() => import('./LineChart'), { ssr: false });
const BarChart = dynamic(() => import('src/containers/Portfolios/PortfolioSummary/BarChart'), { ssr: false });

const propTypes = {
	// route: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const PortfolioScreen = (props) => {
	const router = useRouter();
	const { goalId } = router.query || {};

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
			<div className="col-4">
				<Card
					title="About this portfolio"
				>
					<div className="d-flex mb-4">
						<div className="flex-1">
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
						<Progress width={50} type="circle" percent={0} />
					</div>
					<div className="mb-4">
						<div
							style={{
								// textAlign: 'center',
								// marginBottom: 5,
								textAlign: 'left',
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
						<Alert description={`Based on what you told us about your financial account, we recommend you shouldn't exceed ${riskProfile} risk level`} type="warning" showIcon />
					</div>
					<div
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
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
									// marginBottom: 30,
								}}
								className="text-primary"
							>
								{goalData.recommendedPortfolio}
							</h6>
						</div>

					</div>
					<div className=" mt-2">
						<div
							className=""
						>
							<p className="mb-4">{portfolio.desc}</p>
						</div>
						<div
							className="mt-4"
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
				</Card>
			</div>
			<div className="col-8 pl-1">
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
