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
import Router, { useRouter } from 'next/router';
import orderBy from 'lodash/orderBy';

import { Button, Message, Collapse, InputNumber, Progress } from 'antd';

import DisplayInfo from 'src/components/DisplayInfo';

import { update } from 'src/redux/actions/goals';

import PageTitle from 'src/components/PageTitle';
import Card from 'src/components/Card';

import dynamic from 'next/dynamic';

import classes from './style.module.less';
import weightData from './weight-data.json';

const BarChart = dynamic(() => import('src/containers/Portfolios/PortfolioSummary/BarChart'), { ssr: false });

const propTypes = {
	// route: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const PortfolioWeightsScreen = (props) => {
	const router = useRouter();
	const { goalId } = router.query || {};

	const [formData, setFormData] = React.useState({});
	const auth = useSelector(state => state.auth);
	const goalData = useSelector(state => state.goals?.find(el => {
		return el.id === goalId;
	})) || {};
	const dispatch = useDispatch();

	const [rec, c] = goalData.recommendedPortfolio?.split('/') || [];
	const { riskProfile } = auth;

	const isAllowChange = ((riskProfile === 'growth' || riskProfile === 'aggressive') && rec === 'Flagship');

	const prod = React.useMemo(() => {
		if (rec === 'Flagship') {
			return 'Core ' + c;
		}
		return rec;
	}, [c, rec]);

	const dataMockT = React.useMemo(() => {
		return weightData[prod] || [];
	}, [prod]);

	const dataMock = React.useMemo(() => {
		return dataMockT.map((el) => {
			return el.data;
		}).flat();
	}, [dataMockT]);

	const total = React.useMemo(() => {
		return dataMock.reduce((preVal, el) => {
			return preVal + ((formData?.[el.name] || el.weight) * 1);
		}, 0).toFixed(0) * 1;
	}, [dataMock, formData]);

	const chartData = React.useMemo(() => {
		const d = orderBy(dataMockT?.map((dael, i) => {
			const tt = dael.data.reduce((preVal, el) => {
				return preVal + ((formData?.[el.name] || el.weight) * 1);
			}, 0).toFixed(2) * 1;

			return {
				...dael,
				tt,
			};
		}), ['tt'], ['desc']);

		return d;
	}, [dataMockT, formData]);

	React.useEffect(() => {
		setFormData(dataMock.reduce((preVal, el) => {
			return {
				...preVal,
				[el.name]: goalData.portfolioData?.[el.name] || el.weight,
			};
		}, {}));
	}, [dataMock, goalData.portfolioData, prod]);

	const handleChange = React.useCallback((k, v) => {
		setFormData((oldD) => {
			return {
				...oldD,
				[k]: v,
			};
		});
	}, []);

	const handleSubmitFrom = React.useCallback(async () => {
		try {
			await dispatch(await update({
				id: goalId,
				portfolioData: formData,
			}));
			Router.push('/portfolios/portfolio-summary' + (goalId ? '?goalId=' + goalId : ''));
		} catch (error) {
			Message.error(error.message || error.toString);
		}
	}, [dispatch, formData, goalId]);

	return (
		<div
		// headerShown={false}
		// loading={loading}
		// className="box"
		>
			{
				isAllowChange ?
					<div className="d-flex">
						<div className="flex-1">
							<PageTitle
								title="Target Asset Allocation by asset class"
								subtitle="For advanced investors, you may adjust individual asset weights manually."
							/>
						</div>
						<div className="ml-3">
							<p className="mb-0 text-right">Total</p>
							<h5 className={`mb-4 ${total === 100 ? 'text-primary' : 'text-danger'}`}>{total?.toFixed(2)}%</h5>
						</div>
					</div> :
					<PageTitle
						title="Target Asset Allocation by asset class"
						subtitle="For advanced investors, you may adjust individual asset weights manually."
					/>
			}
			<Card>
				{/* <AssetAllocationChart data={dataMockT} formData={formData} colors={colors} total={total.toFixed(0) * 1} /> */}
				<BarChart portfolio={prod} data={dataMockT} formData={goalData?.portfolioData} total={total.toFixed(0) * 1} />
			</Card>
			<div
				style={{
					paddingTop: 0,
				}}
			>
				{
					chartData?.map((dael, i) => {
						return (
							<Collapse
								collapsible="header"
								// defaultActiveKey={i === 0 ? ['1'] : []}
								key={dael.groupId}
								style={{
									marginBottom: 15,
									// borderWidth: (formData[el.name] * 1)?.toFixed(2) !== (el.weight * 1)?.toFixed(2) ? 1 : 0,
									borderColor: 'green',
									borderStyle: 'solid',
								}}
								className={'border ' + classes.collapse}
							>
								<Collapse.Panel
									header={
										<div className="d-flex align-items-center">
											<div className="flex-1">
												<strong>{dael.groupName}</strong>
											</div>
											<div className="flex-1 ml-3 pr-3">
												<Progress strokeLinecap="butt" percent={dael?.tt.toFixed(2)} strokeWidth={12} strokeColor={dael.color} />
											</div>
										</div>
									}
									key="1"
								>
									<div className="py-2">
										{
											dael.data?.map((el, index) => {
												return (
													<Collapse
														collapsible="header"
														// defaultActiveKey={i === 0 ? ['1'] : []}
														key={el.name}
														style={{
															marginBottom: index === dael.data.length - 1 ? 0 : 15,
															border: `1px solid ${(formData[el.name] * 1)?.toFixed(2) !== (el.weight * 1)?.toFixed(2) ? 'green' : '#ededed'}`,
														}}
													>
														<Collapse.Panel
															header={
																<strong className="fs-sm">{el.name}</strong>
															}
															key="1"
															extra={
																isAllowChange ?
																	<InputNumber
																		formatter={v => `${v}%`}
																		parser={v => v.replace('%', '')}
																		suffix="%"
																		value={formData[el.name]}
																		style={{
																			width: 120,
																			textAlign: 'right',
																		}}
																		max={riskProfile === 'growth' ? 30 : 50}
																		onChange={(v) => handleChange(el.name, v)}
																		step={0.01}
																	/> :
																	formData[el.name] + '%'
															}
														>
															<DisplayInfo
																label="Index"
																value={el.index}
																inline
																bordered
															/>
															{/* <DisplayInfo
																label="Weight"
																value={
																	isAllowChange ?
																		<InputNumber
																			formatter={v => `${v}%`}
																			parser={v => v.replace('%', '')}
																			suffix="%"
																			value={formData[el.name]}
																			style={{
																				width: 120,
																			}}
																			max={riskProfile === 'growth' ? 30 : 50}
																			onChange={(v) => handleChange(el.name, v)}
																			step={0.01}
																		/> :
																		formData[el.name] + '%'
																}
																inline
																bordered
															/> */}
															<div
																style={{
																	flexDirection: 'row',
																	display: 'flex',
																	width: '100%',
																}}
															>
																<DisplayInfo
																	style={{
																		flex: 1,
																		marginRight: 40,
																	}}
																	label="Instrument Currency"
																	value={el.currency}
																	inline
																	bordered
																/>
																<DisplayInfo
																	style={{
																		flex: 1,
																		marginLeft: 40,
																	}}
																	label="Alpha"
																	value={el.alpha + '%'}
																	inline
																	bordered
																/>
															</div>
															<div
																style={{
																	flexDirection: 'row',
																	display: 'flex',
																	width: '100%',
																}}
															>
																<DisplayInfo
																	style={{
																		flex: 1,
																		marginRight: 40,
																	}}
																	label="Sharpe Ratio"
																	value={el.sharpeRatio?.toString()}
																	inline
																	bordered
																/>
																<DisplayInfo
																	style={{
																		flex: 1,
																		marginLeft: 40,
																	}}
																	label="Jensen's Alpha"
																	value={el.jensenAlpha?.toString()}
																	inline
																	bordered
																/>
															</div>
															<div
																style={{
																	flexDirection: 'row',
																	display: 'flex',
																	width: '100%',
																}}
															>
																<DisplayInfo
																	style={{
																		flex: 1,
																		marginRight: 40,
																	}}
																	label="Information Ratio"
																	value={el.informationRatio?.toString()}
																	inline
																/>
																<DisplayInfo
																	style={{
																		flex: 1,
																		marginLeft: 40,
																	}}
																	label="Tracking Error"
																	value={el.trackingError?.toString()}
																	inline
																/>
															</div>
														</Collapse.Panel>
													</Collapse>
												);
											})
										}
									</div>
								</Collapse.Panel>
							</Collapse>
						);
					})
				}
			</div>
			<div
				style={{
					marginTop: 20,
					textAlign: 'right',
				}}
			>
				<Button
					// onClick={() => setStarted(true)}
					onClick={handleSubmitFrom}
					// loading={loading}
					type="primary"
					disabled={total !== 100}
				>
					Continue
				</Button>
				{
					total !== 100 &&
					<p className="mt-3 text-danger">Total weight should be 100%</p>
				}
			</div>
		</div>
	);
};

PortfolioWeightsScreen.propTypes = propTypes;

PortfolioWeightsScreen.defaultProps = defaultProps;

export default PortfolioWeightsScreen;
