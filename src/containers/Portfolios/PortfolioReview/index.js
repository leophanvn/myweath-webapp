/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 1522-04-14 12:05:52
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';

import { Button, Alert, Divider } from 'antd';
import Image from 'next/image';

import DisplayInfo from 'src/components/DisplayInfo';
import PageTitle from 'src/components/PageTitle';
import Card from 'src/components/Card';

import data from 'src/containers/Portfolios/RiskProfile/data';
import dataPortfolios from 'src/containers/Portfolios/PortfolioRecommended/data';

import PortfolioWeights from './PortfolioWeights';

const propTypes = {
	// route: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const PortfolioConstructionScreen = (props) => {
	const router = useRouter();
	const { goalId } = router.query || {};

	const [step, setStep] = React.useState(1);

	const auth = useSelector(state => state.auth);
	const goalData = useSelector(state => state.goals?.find(el => {
		return el.id === goalId;
	})) || {};

	const { riskProfile } = auth;

	// eslint-disable-next-line prefer-const
	let [rec, c] = goalData.recommendedPortfolio?.split('/') || [];

	if (rec === 'Flagship') {
		rec = 'Core ' + c;
	}

	const portfolio = dataPortfolios[rec] || {};

	if (step === 2) {
		return (
			<PortfolioWeights />
		);
	}

	return (
		<div>
			<PageTitle
				title="Review your portfolio"
			/>
			<Card>
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
			<div
				style={{
					// marginTop: 20,
					textAlign: 'right',
				}}
			>
				<Button
					// onClick={() => setStarted(true)}
					// 	index: 0,
					// 	routes: [{ name: 'Root' }],
					// })}
					// loading={loading}
					onClick={() => setStep(2)}
					type="primary"

				>
					Continue
				</Button>
			</div>
		</div>
	);
};

PortfolioConstructionScreen.propTypes = propTypes;

PortfolioConstructionScreen.defaultProps = defaultProps;

export default PortfolioConstructionScreen;
