/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 12:05:52
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
// import { useTheme } from '@zellosoft/antd-react-native/lib/style';
import { Button, Form, Input, InputNumber } from 'antd';

import GoalIcon from 'src/components/GoalIcon';

const propTypes = {
	data: PropTypes.object.isRequired,
	onSubmit: PropTypes.func,
	onCancel: PropTypes.func,
	loading: PropTypes.bool,
};

const defaultProps = {
	data: {},
	onSubmit: f => f,
	onCancel: f => f,
	loading: false,
};

const Savings = (props) => {
	const { data, loading, onSubmit, onCancel } = props;

	const [form] = Form.useForm();

	React.useEffect(() => {
		form.setFieldsValue({
			duration: '20',
			desc: 'Earn high yields on savings, invest smarter with fund strategies.',
			annually: '2000',
			...data,
		});
	}, [data, form]);

	const handleSubmitFrom = React.useCallback(async (values) => {
		onSubmit({
			...data,
			...values,
			annually: values.annually,
		});
	}, [data, onSubmit]);

	return (
		<div>
			<div
				// headerShown={false}
				// loading={loading}
				style={{
					// justifyContent: 'center',
				}}
				className="box"
			>
				<div
					style={{
						alignItems: 'center',
						// justifyContent: 'center',
						display: 'flex',
						marginBottom: 20,
					}}
				>
					<div
						className="text-primary"
						style={{
							// marginBottom: 10,
							marginRight: 15,
							textAlign: 'center',
						}}
					>
						<GoalIcon type={data.type} size={30} />
					</div>
					<h6
						style={{
							textAlign: 'center',
						}}
						className="text-primary"
					>
						{data.label}
					</h6>
				</div>
				<Form
					style={{
						// flex: 1,
						// // justifyContent: 'center',
						// alignItems: 'center',
						// marginTop: 30,
					}}
					form={form}
					layout="vertical"
					onFinish={handleSubmitFrom}
				>
					<Form.Item
						name="label"
						label="Name"
						rules={[
							{
								required: true,
								message: 'Please input!',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="desc"
						label="Description"
						rules={[
							{
								required: true,
								message: 'Please input!',
							},
						]}
					>
						<Input.TextArea />
					</Form.Item>
					<Form.Item
						name="duration"
						label="How long are you planning to invest for?​"
						rules={[
							{
								required: true,
								message: 'Please input!',
							},
						]}
						style={{
							flex: 1,
						}}
					>
						<Input
							type="number"
							suffix="year(s)"
						/>
					</Form.Item>
					<Form.Item
						name="annually"
						label="Funds available to invest annually (SGD)"
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
				</Form>
			</div>
			<div
				style={{
					textAlign: 'right',
				}}
			>
				<Button
					loading={loading}
					type="primary"
					onClick={form.submit}

				>
					Continue
				</Button>
				<Button

					className="ml-3"
					onClick={onCancel}
				>
					Cancel
				</Button>
			</div>
		</div>
	);
};

Savings.propTypes = propTypes;

Savings.defaultProps = defaultProps;

export default Savings;
