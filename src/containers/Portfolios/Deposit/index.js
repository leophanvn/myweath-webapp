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

import { Button, Modal, Message, Form, Radio, InputNumber, DatePicker } from 'antd';
import Image from 'next/image';

import { update } from 'src/redux/actions/goals';
import { actionUpdateProfile } from 'src/redux/actions/auth';

import SelectGoal from 'src/components/Forms/SelectGoal';
import SelectAccount from 'src/components/Forms/SelectAccount';
import PageTitle from 'src/components/PageTitle';

// import Success from './Success';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const ConfirmPayments = (props) => {
	const router = useRouter();
	const { goalId } = router.query || {};

	// const { data = {} } = route.params || {};
	// const theme = useTheme();
	const [loading, setLoading] = React.useState(false);
	const [method, setMethod] = React.useState('monthly');

	const auth = useSelector(state => state.auth);
	const data = useSelector(state => state.goals?.find(el => {
		return el.id === auth.firstGoalId;
	}));

	const [form] = Form.useForm();
	const dispatch = useDispatch();

	React.useEffect(() => {
		form.setFieldsValue({
			id: auth.firstGoalId,
			...data,
			init: method === 'onceTime' ? data.total * 1 : (data?.init || 0) * 1,
		});
	}, [auth.firstGoalId, data, form, method]);

	const handleSubmitFrom = React.useCallback(async (values) => {
		try {
			setLoading(true);
			await dispatch(await update({
				id: goalId,
				...data,
				...values,
			}));
			Modal.success({
				content: (
					<div>
						<h4>Way to go!</h4>
						<p>You've made another investment. That's one more step towards your goals.</p>
						<p>Clearing and settlement of trades usually takes around 2-3 days.</p>
					</div>
				),
				icon: null,
				onOk: async () => {
					if (!auth.firstPayment) {
						await dispatch(await actionUpdateProfile({
							firstPayment: true,
						}));
					}

					await dispatch(await update({
						id: goalId,
						firstPayment: true,
						isCompleted: true,
					}));
					Router.push('/portfolios');
				},
			});
		} catch (error) {
			Message.error(error.message || error.toString);
		} finally {
			setLoading(false);
		}
	}, [auth.firstPayment, data, dispatch, goalId]);

	return (
		<div>
			<PageTitle
				title="Outgoing payments"
			/>
			<div
				className="box"
			>
				{/* <div
					style={{
						marginBottom: 10,
					}}
				>
					<div
						style={{
							// flexDirection: 'row',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							paddingVertical: 10,
						}}
						horizontal
					>
						<div
							style={{
								flexDirection: 'row',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: 50,
								marginRight: 10,
								borderRadius: 4,
							}}
							className="border p-3"
						>
							<Image
								src={require('./icons/credit-card.png')}
								width={30}
								height={30}
								alt="#"
							/>
							<div
								style={{

								}}
								type="strong"
							>
								Card
							</div>
						</div>
						<div
							style={{
								flexDirection: 'row',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								paddingVertical: 0,
								height: 50,
								marginRight: 10,
								borderRadius: 4,
							}}
							className="border p-3"
						>
							<Image
								src={require('./icons/dbs.png')}
								width={30}
								height={30}
								alt="#"
							/>
							<div
								style={{

								}}
								type="strong"
							>
								DBS
							</div>
						</div>
						<div
							style={{
								flexDirection: 'row',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								paddingVertical: 0,
								height: 50,
								marginRight: 10,
								borderRadius: 4,
							}}
							className="border p-3"
						>
							<Image
								src={require('./icons/ocbc.png')}
								width={30}
								height={30}
								alt="#"
							/>
							<div
								style={{

								}}
								type="strong"
							>
								OCBC
							</div>
						</div>
						<div
							style={{
								flexDirection: 'row',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								paddingVertical: 0,
								height: 50,
								borderRadius: 4,
							}}
							className="border p-3"
						>
							<Image
								src={require('./icons/uob.png')}
								width={30}
								height={30}
								alt="#"
							/>
							<div
								style={{

								}}
								type="strong"
							>
								UOB
							</div>
						</div>
					</div>
				</div>
				<div
					className="text-center py-4"
				>
					<Radio.Group
						options={[
							{
								label: 'Monthly Contributions',
								value: 'monthly',
							},
							{
								label: 'Once-off Lump sum',
								value: 'onceTime',
							},
						]}
						onChange={({ target: { value } }) => setMethod(value)}
						value={method}
						optionType="button"
						buttonStyle="solid"
						style={{
							textAlign: 'center',
						}}

					/>
				</div> */}
				<Form
					form={form}
					onFinish={handleSubmitFrom}
					layout="vertical"

				>
					<Form.Item
						name="id"
						label="Goal"
						rules={[
							{
								required: true,
								message: 'Please input!',
							},
						]}
					>
						<SelectGoal />
					</Form.Item>

					{
						method === 'monthly' ?
							<>
								<Form.Item
									name="init"
									label="Initial Investment"
									rules={[
										{
											required: true,
											message: 'Please input!',
										},
									]}
								>
									<InputNumber
										style={{
											width: '100%',
										}}
										aria-label="Controlled number input demonstrating a custom format to add commas"
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										addonAfter="SGD"
									/>
								</Form.Item>
								<Form.Item
									name="initialAccountId"
									label="From Account"
									rules={[
										{
											required: true,
											message: 'Please input!',
										},
									]}
								>
									<SelectAccount />
								</Form.Item>
								<Form.Item
									name="monthlyContributions"
									label="Monthly Contributions"
									rules={[
										{
											required: true,
											message: 'Please input!',
										},
									]}
								>
									<InputNumber
										style={{
											width: '100%',
										}}
										aria-label="Controlled number input demonstrating a custom format to add commas"
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										addonAfter="SGD"
									/>
								</Form.Item>
								<Form.Item
									name="monthlyAccountId"
									label="From Account"
									rules={[
										{
											required: true,
											message: 'Please input!',
										},
									]}
								>
									<SelectAccount />
								</Form.Item>
								<Form.Item
									name="paymentDate"
									label="Date of first monthly payment"
									rules={[
										{
											required: true,
											message: 'Please input!',
										},
									]}
									helperText="Your subsequent monthly contribution will be on the same date every month."
								>
									<DatePicker
										style={{
											width: '100%',
										}}
									/>
								</Form.Item>
							</> :
							<>
								<Form.Item
									name="init"
									label="Total amount"
									rules={[
										{
											required: true,
											message: 'Please input!',
										},
									]}
								>
									<InputNumber
										style={{
											width: '100%',
										}}
										aria-label="Controlled number input demonstrating a custom format to add commas"
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										addonAfter="SGD"
									/>
								</Form.Item>
								<Form.Item
									name="initialAccountId"
									label="From Account"
									rules={[
										{
											required: true,
											message: 'Please input!',
										},
									]}
								>
									<SelectAccount />
								</Form.Item>
							</>
					}
				</Form>
			</div>
			<div
				style={{
					marginTop: 20,
					textAlign: 'right',
					marginBottom: 20,
				}}
			>
				<Button
					onClick={form.submit}
					// onClick={() => navigation.navigate('Quiz')}
					loading={loading}
					type="primary"
				>
					Confirm & Proceed
				</Button>
			</div>
		</div>
	);
};

ConfirmPayments.propTypes = propTypes;

ConfirmPayments.defaultProps = defaultProps;

export default ConfirmPayments;
