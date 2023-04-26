/* eslint-disable react/prop-types */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 12:05:52
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';

import { Progress, Collapse, Tooltip } from 'antd';

import DisplayInfo from 'src/components/DisplayInfo';
import Card from 'src/components/Card';

import { InfoCircleOutlined } from '@ant-design/icons';

import classes from './style.module.less';

const propTypes = {
	// route: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const AssetAllocation = (props) => {
	const { formData = {}, data = [] } = props;

	const chartData = React.useMemo(() => {
		const d = orderBy(data?.map((dael, i) => {
			const tt = dael.data.reduce((preVal, el) => {
				return preVal + ((formData?.[el.name] || el.weight) * 1);
			}, 0).toFixed(2) * 1;

			return {
				...dael,
				tt,
			};
		}), ['tt'], ['desc']);

		return d;
	}, [data, formData]);

	return (
		<Card title="Target asset allocation by asset class">
			{/* <AssetAllocationChart data={data} formData={formData} total={100} /> */}
			<div
				style={{
					paddingTop: 10,
				}}
			>
				<div className="d-flex align-items-center mb-3">
					<div className="flex-1 pl-2">
						<strong>Asset class</strong>
					</div>
					<div className="flex-1 pl-2 ml-3">
						<strong>Target weight</strong>
					</div>
				</div>
				{
					chartData.map((elD, i) => {
						return (
							<Collapse
								collapsible="header"
								key={elD.groupId}
								style={{
									marginBottom: i === chartData.length - 1 ? 0 : 15,
									borderColor: 'green',
									borderStyle: 'solid',
								}}
								className={'border ' + classes.collapse}
							>
								<Collapse.Panel
									header={
										<div className="d-flex align-items-center">
											<div className="flex-1">
												<strong>{elD.groupName}</strong>
											</div>
											<div className="flex-1 ml-3 mr-3">
												<Progress strokeLinecap="butt" percent={elD?.tt?.toFixed(2)} strokeWidth={12} strokeColor={elD.color} />
											</div>
										</div>
									}
									key="1"

								>
									<div className="row py-2">
										{
											orderBy(elD.data, ['value'], ['desc']).map((r, index) => {
												return (
													<div className="col-12 col-lg-6 pr-5" key={r.name}>
														<DisplayInfo
															label={<div>{r.name} <Tooltip title={
																<div className="">
																	<DisplayInfo
																		label="Index"
																		value={r.index}
																		inline
																		// bordered
																	/>
																	<DisplayInfo
																		label="Weight"
																		value={
																			formData[r.name] + '%'
																		}
																		inline
																		// bordered
																	/>
																	<DisplayInfo
																		style={{
																			flex: 1,
																		}}
																		label="Instrument Currency"
																		value={r.currency}
																		inline
																		// bordered
																	/>
																	<DisplayInfo
																		style={{
																			flex: 1,
																		}}
																		label="Alpha"
																		value={r.alpha + '%'}
																		inline
																		// bordered
																	/>
																	<DisplayInfo
																		style={{
																			flex: 1,
																		}}
																		label="Sharpe Ratio"
																		value={r.sharpeRatio?.toString()}
																		inline
																		// bordered
																	/>
																	<DisplayInfo
																		style={{
																			flex: 1,
																		}}
																		label="Jensen's Alpha"
																		value={r.jensenAlpha?.toString()}
																		inline
																		// bordered
																	/>
																	<DisplayInfo
																		style={{
																			flex: 1,
																		}}
																		label="Information Ratio"
																		value={r.informationRatio?.toString()}
																		inline
																		// bordered

																	/>
																	<DisplayInfo
																		style={{
																			flex: 1,
																		}}
																		label="Tracking Error"
																		value={r.trackingError?.toString()}
																		inline
																	/>
																</div>
															}><InfoCircleOutlined className="text-primary ml-2 cursor-pointer" /></Tooltip>
															</div>}
															value={(formData?.[r.name] || 0) + '%'}
															style={{
																padding: '0 15px',
															}}
														/>
													</div>
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
		</Card>
	);
};

AssetAllocation.propTypes = propTypes;

AssetAllocation.defaultProps = defaultProps;

export default AssetAllocation;
