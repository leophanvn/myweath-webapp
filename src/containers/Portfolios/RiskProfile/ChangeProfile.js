/* eslint-disable react/prop-types */
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

import { Message, Button, Space, Modal, Radio } from 'antd';

import { actionUpdateProfile } from 'src/redux/actions/auth';
import { update } from 'src/redux/actions/goals';
// import Carousel from 'react-native-reanimated-carousel';
import AliceCarousel from 'react-alice-carousel';

import RiskLevel from './RiskLevel';
import BiasOrientation from './BiasOrientation';
import data from './data';

const options = [
	{
		value: 'conservative',
		label: 'Conservative',
	},
	{
		value: 'moderate',
		label: 'Moderate',
	},
	{
		value: 'growth',
		label: 'Growth',
	},
	{
		value: 'aggressive',
		label: 'Aggressive',
	},
];

const propTypes = {
	// route: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const ChangeProfile = (props) => {
	const { initRiskProfile } = props;
	const [riskProfile, setRiskProfile] = React.useState(initRiskProfile);

	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const router = useRouter();
	const { goalId } = router.query || {};


	React.useEffect(() => {
		setRiskProfile(initRiskProfile);
	}, [initRiskProfile]);

	const dispatch = useDispatch();

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = async () => {
		try {
			await dispatch(await actionUpdateProfile({
				riskProfile,
			}));

			await dispatch(await update({
				id: goalId,
				riskProfile,
			}));
			setIsModalOpen(false);
		} catch (error) { }
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Button
				type="ghost"
				style={{
					textAlign: 'center',
				}}
				onClick={showModal}
			>
				Reject & Manually Change Profile
			</Button>
			<Modal title="Manually Change Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={900}>
				<div className="text-center mb-4">
					<Radio.Group
						defaultValue={riskProfile}
						onChange={(e) => setRiskProfile(e.target.value)}
						buttonStyle="solid"
						optionType="button"
					>
						{
							options.map((el, i) => {
								return (
									<Radio.Button
										value={el.value}
										key={el.value}
									>
										{el.label}
									</Radio.Button>
								);
							})
						}
					</Radio.Group>
				</div>
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
			</Modal>
		</>
	);
};

ChangeProfile.propTypes = propTypes;

ChangeProfile.defaultProps = defaultProps;

export default ChangeProfile;
