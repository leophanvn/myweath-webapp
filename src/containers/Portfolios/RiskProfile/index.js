/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 1522-04-14 12:05:52
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';

import { Message, Button, Space } from 'antd';

import { actionUpdateProfile } from 'src/redux/actions/auth';
import { update } from 'src/redux/actions/goals';

// import Carousel from 'react-native-reanimated-carousel';
import AliceCarousel from 'react-alice-carousel';

import Card from 'src/components/Card';
import PageTitle from 'src/components/PageTitle';

import RiskLevel from './RiskLevel';
import BiasOrientation from './BiasOrientation';
import ChangeProfile from './ChangeProfile';

import data from './data';

const propTypes = {
	// route: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const RiskProfileScreen = (props) => {
	const router = useRouter();
	const { goalId } = router.query || {};
	const auth = useSelector(state => state.auth);

	const riskProfile = auth?.riskProfile?.trim();

	const dispatch = useDispatch();

	const handleSubmitFrom = React.useCallback(async () => {
		try {
			await dispatch(await actionUpdateProfile({
				riskProfile,
			}));

			await dispatch(await update({
				id: goalId,
				riskProfile,
				recommendedPortfolio: '',
				portfolioData: {},
				builtPortfolio: false,
			}));
			Router.push('/portfolios/new' + (goalId ? '?goalId=' + goalId : ''));
		} catch (error) {
			Message.error(error.message || error.toString);
		}
	}, [dispatch, goalId, riskProfile]);

	return (
		<div>
			<PageTitle
				title="Risk Profiling"
				// subtitle="We have a few questions for you that&apos;ll help us personalize your experience and give you better advice."
			/>
			<Card>
				<div className="row p-3">
					<div
						className="col-5"
					>
						<div
							style={{
								flexDirection: 'row',
								display: 'flex',
								// justifyContent: 'center',
								alignItems: 'center',
								marginBottom: 20,
							}}
						>
							<div
								style={{
									marginRight: 15,
								}}
							>
								<Image
									width={70}
									height={70}
									src={data[riskProfile]?.icon}
									alt="#"
								/>
							</div>
							<div>
								<div
									style={{
										// textAlign: 'center',
										// marginBottom: 5,
									}}
								>
									Your risk profile is
								</div>
								<h2
									className="text-primary"
									style={{
										// textAlign: 'center',
										textTransform: 'capitalize',
									}}
								>
									{riskProfile}
								</h2>
							</div>
						</div>
						<div
							style={{
								// backgroundColor: '#ffffff',
								// borderWidth: 1,
								// border: '1px solid #DBDCDD',
								// borderRadius: 6,
								// marginBottom: 30,
								// alignSelf: 'center',
								// width: '100%',
							}}
						>
							<div
								style={{
									// textAlign: 'center',
									marginTop: 20,
								}}
							>
								Risk tolerance level:

								{/* {' '}
								<div
									type="strong"
									style={{
										textTransform: 'capitalize',
									}}
								>
									{data[riskProfile]?.riskLevel}
								</div> */}
							</div>
							<RiskLevel
								value={data[riskProfile]?.riskLevel}
							/>
							{/* <Steps
								size="small"
								// current={1}
								direction="horizontal"
							>
								{
									[
										{
											label: 'Low',
										},
										{
											label: 'Moderate',
										},
										{
											label: 'Medium to high',
										},
										{
											label: 'High',
										},
									].map((item, index) => (
										<Steps.Step
											key={index}
											title={
												<div
													style={{
														fontSize: 10,
														// marginLeft: '-50%',
													}}
												>
													{item.label}
												</div>
											}
											style={{
												flex: 1,
												width: 50,
											}}
											width={50}
											status={item.label !== data[riskProfile]?.riskLevel ? 'wait' : 'finish'}
											icon={() => null}
										/>
									))
								}
							</Steps> */}
						</div>
						<div
							style={{
								// backgroundColor: '#ffffff',
								// borderWidth: 1,
								// border: '1px solid #DBDCDD',
								// borderRadius: 6,
								// alignSelf: 'center',
								// width: '100%',
								// marginBottom: 30,
							}}
						>
							<div
								style={{
									// textAlign: 'center',
									marginTop: 20,
								}}
							>
								Behavioral bias orientation:
								{/* {' '}
								<div
									type="strong"
									style={{
										textTransform: 'capitalize',
									}}
								>
									{data[riskProfile]?.behavioral}
								</div> */}
							</div>
							<BiasOrientation
								value={data[riskProfile]?.behavioral}
							/>
						</div>
						<div
							style={{
								textAlign: 'left',
								marginTop: 20,
							}}
						>
							In case you don&apos;t agree with your risk profile,{'\n'}you can
							{' '}
							<a
								onClick={() => Router.push('/portfolios/quiz' + (goalId ? '?goalId=' + goalId : ''))}
							>
								<strong>reassess your answers.</strong>
							</a>
						</div>
					</div>
					<div
						className="col-7"
					>
						{data[riskProfile]?.desc?.map((item, index) => {
							return (
								<div
									key={index}
									style={{
										marginBottom: 20,
									}}
								>
									<div
										style={{
										}}
									>
										<strong>
											{index + 1}. {item.title}
										</strong>
										<div className="ml-3">
											{item.content}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Card>
			{
				(!auth.builtPortfolio || goalId) ?
					<div
						style={{
							paddingBottom: 0,
							marginTop: 20,
							textAlign: 'right',
						}}
					>

						<Space>
							<Button
								// onClick={() => setStarted(true)}
								onClick={handleSubmitFrom}
								// loading={loading}
								type="primary"

							>
								Accept & Proceed
							</Button>
							<ChangeProfile
								initRiskProfile={riskProfile}
							/>
						</Space>
					</div> :
					<div
						style={{
							paddingBottom: 0,
							paddingTop: 20,
							textAlign: 'center',
						}}
					>
						<Button
							// onClick={() => setStarted(true)}
							onClick={Router.back}
							type="primary"

						>
							Back
						</Button>
					</div>
			}
		</div>
	);
};

RiskProfileScreen.propTypes = propTypes;

RiskProfileScreen.defaultProps = defaultProps;

export default RiskProfileScreen;
