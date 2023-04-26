/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-10-24 15:27:48
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';

import { Button, Modal, Message, Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { actionUpdateProfile } from 'src/redux/actions/auth';
import { update } from 'src/redux/actions/goals';

const propTypes = {
	children: PropTypes.any.isRequired,
};

const defaultProps = {
	children: null,
};

const rules = {
	retirement: {
		conservative: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core C1',
					'>100k': 'Core C1',
				},
				'>3Y': {
					'<100k': 'Core C1',
					'>100k': 'Flagship/C1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core C2',
					'>100k': 'Core C2',
				},
				'>3Y': {
					'<100k': 'Core C2',
					'>100k': 'Flagship/C2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core C3',
					'>100k': 'Core C3',
				},
				'>3Y': {
					'<100k': 'Core C3',
					'>100k': 'Flagship/C3',
				},
			},
		},
		moderate: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core M1',
					'>100k': 'Core M1',
				},
				'>3Y': {
					'<100k': 'Core M1',
					'>100k': 'Flagship/M1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core M2',
					'>100k': 'Core M2',
				},
				'>3Y': {
					'<100k': 'Core M2',
					'>100k': 'Flagship/M2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core M3',
					'>100k': 'Core M3',
				},
				'>3Y': {
					'<100k': 'Core M3',
					'>100k': 'Flagship/M3',
				},
			},
		},
		growth: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core G1',
					'>100k': 'Core G1',
				},
				'>3Y': {
					'<100k': 'Core G1',
					'>100k': 'Flagship/G1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core G2',
					'>100k': 'Core G2',
				},
				'>3Y': {
					'<100k': 'Core G2',
					'>100k': 'Flagship/G2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core G3',
					'>100k': 'Core G3',
				},
				'>3Y': {
					'<100k': 'Core G3',
					'>100k': 'Flagship/G3',
				},
			},
		},
		aggressive: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core A1',
					'>100k': 'Core A1',
				},
				'>3Y': {
					'<100k': 'Core A1',
					'>100k': 'Flagship/A1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core A2',
					'>100k': 'Core A2',
				},
				'>3Y': {
					'<100k': 'Core A2',
					'>100k': 'Flagship/A2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core A3',
					'>100k': 'Core A3',
				},
				'>3Y': {
					'<100k': 'Core A3',
					'>100k': 'Flagship/A3',
				},
			},
		},
	},
	house: {
		conservative: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core C1',
					'>100k': 'Core C1',
				},
				'>3Y': {
					'<100k': 'Core C1',
					'>100k': 'Flagship/C1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core C2',
					'>100k': 'Core C2',
				},
				'>3Y': {
					'<100k': 'Core C2',
					'>100k': 'Flagship/C2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core C3',
					'>100k': 'Core C3',
				},
				'>3Y': {
					'<100k': 'Core C3',
					'>100k': 'Flagship/C3',
				},
			},
		},
		moderate: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core M1',
					'>100k': 'Core M1',
				},
				'>3Y': {
					'<100k': 'Core M1',
					'>100k': 'Flagship/M1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core M2',
					'>100k': 'Core M2',
				},
				'>3Y': {
					'<100k': 'Core M2',
					'>100k': 'Flagship/M2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core M3',
					'>100k': 'Core M3',
				},
				'>3Y': {
					'<100k': 'Core M3',
					'>100k': 'Flagship/M3',
				},
			},
		},
		growth: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core G1',
					'>100k': 'Core G1',
				},
				'>3Y': {
					'<100k': 'Core G1',
					'>100k': 'Flagship/G1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core G2',
					'>100k': 'Core G2',
				},
				'>3Y': {
					'<100k': 'Core G2',
					'>100k': 'Flagship/G2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core G3',
					'>100k': 'Core G3',
				},
				'>3Y': {
					'<100k': 'Core G3',
					'>100k': 'Flagship/G3',
				},
			},
		},
		aggressive: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core A1',
					'>100k': 'Core A1',
				},
				'>3Y': {
					'<100k': 'Core A1',
					'>100k': 'Flagship/A1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core A2',
					'>100k': 'Core A2',
				},
				'>3Y': {
					'<100k': 'Core A2',
					'>100k': 'Flagship/A2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core A3',
					'>100k': 'Core A3',
				},
				'>3Y': {
					'<100k': 'Core A3',
					'>100k': 'Flagship/A3',
				},
			},
		},
	},
	education: {
		conservative: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core C1',
					'>100k': 'Core C1',
				},
				'>3Y': {
					'<100k': 'Core C1',
					'>100k': 'Flagship/C1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core C2',
					'>100k': 'Core C2',
				},
				'>3Y': {
					'<100k': 'Core C2',
					'>100k': 'Flagship/C2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core C3',
					'>100k': 'Core C3',
				},
				'>3Y': {
					'<100k': 'Core C3',
					'>100k': 'Flagship/C3',
				},
			},
		},
		moderate: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core M1',
					'>100k': 'Core M1',
				},
				'>3Y': {
					'<100k': 'Core M1',
					'>100k': 'Flagship/M1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core M2',
					'>100k': 'Core M2',
				},
				'>3Y': {
					'<100k': 'Core M2',
					'>100k': 'Flagship/M2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core M3',
					'>100k': 'Core M3',
				},
				'>3Y': {
					'<100k': 'Core M3',
					'>100k': 'Flagship/M3',
				},
			},
		},
		growth: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core G1',
					'>100k': 'Core G1',
				},
				'>3Y': {
					'<100k': 'Core G1',
					'>100k': 'Flagship/G1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core G2',
					'>100k': 'Core G2',
				},
				'>3Y': {
					'<100k': 'Core G2',
					'>100k': 'Flagship/G2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core G3',
					'>100k': 'Core G3',
				},
				'>3Y': {
					'<100k': 'Core G3',
					'>100k': 'Flagship/G3',
				},
			},
		},
		aggressive: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core A1',
					'>100k': 'Core A1',
				},
				'>3Y': {
					'<100k': 'Core A1',
					'>100k': 'Flagship/A1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core A2',
					'>100k': 'Core A2',
				},
				'>3Y': {
					'<100k': 'Core A2',
					'>100k': 'Flagship/A2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core A3',
					'>100k': 'Core A3',
				},
				'>3Y': {
					'<100k': 'Core A3',
					'>100k': 'Flagship/A3',
				},
			},
		},
	},
	savings: {
		conservative: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core C1',
					'>100k': 'Core C1',
				},
				'>3Y': {
					'<100k': 'Core C1',
					'>100k': 'Flagship/C1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core C2',
					'>100k': 'Core C2',
				},
				'>3Y': {
					'<100k': 'Core C2',
					'>100k': 'Flagship/C2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core C3',
					'>100k': 'Core C3',
				},
				'>3Y': {
					'<100k': 'Core C3',
					'>100k': 'Flagship/C3',
				},
			},
		},
		moderate: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core M1',
					'>100k': 'Core M1',
				},
				'>3Y': {
					'<100k': 'Core M1',
					'>100k': 'Flagship/M1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core M2',
					'>100k': 'Core M2',
				},
				'>3Y': {
					'<100k': 'Core M2',
					'>100k': 'Flagship/M2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core M3',
					'>100k': 'Core M3',
				},
				'>3Y': {
					'<100k': 'Core M3',
					'>100k': 'Flagship/M3',
				},
			},
		},
		growth: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core G1',
					'>100k': 'Core G1',
				},
				'>3Y': {
					'<100k': 'Core G1',
					'>100k': 'Flagship/G1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core G2',
					'>100k': 'Core G2',
				},
				'>3Y': {
					'<100k': 'Core G2',
					'>100k': 'Flagship/G2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core G3',
					'>100k': 'Core G3',
				},
				'>3Y': {
					'<100k': 'Core G3',
					'>100k': 'Flagship/G3',
				},
			},
		},
		aggressive: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core A1',
					'>100k': 'Core A1',
				},
				'>3Y': {
					'<100k': 'Core A1',
					'>100k': 'Flagship/A1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core A2',
					'>100k': 'Core A2',
				},
				'>3Y': {
					'<100k': 'Core A2',
					'>100k': 'Flagship/A2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core A3',
					'>100k': 'Core A3',
				},
				'>3Y': {
					'<100k': 'Core A3',
					'>100k': 'Flagship/A3',
				},
			},
		},
	},
	createOwn: {
		conservative: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core C1',
					'>100k': 'Core C1',
				},
				'>3Y': {
					'<100k': 'Core C1',
					'>100k': 'Flagship/C1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core C2',
					'>100k': 'Core C2',
				},
				'>3Y': {
					'<100k': 'Core C2',
					'>100k': 'Flagship/C2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core C3',
					'>100k': 'Core C3',
				},
				'>3Y': {
					'<100k': 'Core C3',
					'>100k': 'Flagship/C3',
				},
			},
		},
		moderate: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core M1',
					'>100k': 'Core M1',
				},
				'>3Y': {
					'<100k': 'Core M1',
					'>100k': 'Flagship/M1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core M2',
					'>100k': 'Core M2',
				},
				'>3Y': {
					'<100k': 'Core M2',
					'>100k': 'Flagship/M2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core M3',
					'>100k': 'Core M3',
				},
				'>3Y': {
					'<100k': 'Core M3',
					'>100k': 'Flagship/M3',
				},
			},
		},
		growth: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core G1',
					'>100k': 'Core G1',
				},
				'>3Y': {
					'<100k': 'Core G1',
					'>100k': 'Flagship/G1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core G2',
					'>100k': 'Core G2',
				},
				'>3Y': {
					'<100k': 'Core G2',
					'>100k': 'Flagship/G2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core G3',
					'>100k': 'Core G3',
				},
				'>3Y': {
					'<100k': 'Core G3',
					'>100k': 'Flagship/G3',
				},
			},
		},
		aggressive: {
			'1-3Y': {
				'0-3Y': {
					'<100k': 'Core A1',
					'>100k': 'Core A1',
				},
				'>3Y': {
					'<100k': 'Core A1',
					'>100k': 'Flagship/A1',
				},
			},
			'4-7Y': {
				'0-3Y': {
					'<100k': 'Core A2',
					'>100k': 'Core A2',
				},
				'>3Y': {
					'<100k': 'Core A2',
					'>100k': 'Flagship/A2',
				},
			},
			'>8Y': {
				'0-3Y': {
					'<100k': 'Core A3',
					'>100k': 'Core A3',
				},
				'>3Y': {
					'<100k': 'Core A3',
					'>100k': 'Flagship/A3',
				},
			},
		},
	},
};

const ModalInput = (props) => {
	const { children } = props;

	const router = useRouter();
	const { goalId } = router.query || {};

	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const auth = useSelector(state => state.auth);
	const goalData = useSelector(state => state.goals?.find(el => {
		return el.id === goalId;
	})) || {};

	const { type, riskProfile } = goalData;

	// const theme = useTheme();
	const [loading, setLoading] = React.useState(false);

	const [form] = Form.useForm();

	React.useEffect(() => {
		form.setFieldsValue({
			...(auth.customizedPortfolioData || {}),
		});
	}, [auth.customizedPortfolioData, form]);

	const dispatch = useDispatch();

	const handleSubmitFrom = React.useCallback(async (values) => {
		try {
			const recommendedPortfolio = rules[type]?.[riskProfile]?.[values.tenor]?.[values.experience]?.[values.total] || 'Flagship';

			await dispatch(await actionUpdateProfile({
				customizedPortfolio: true,
				customizedPortfolioData: values,
				recommendedPortfolio,
			}));
			await dispatch(await update({
				id: goalId,
				customizedPortfolio: true,
				customizedPortfolioData: values,
				recommendedPortfolio,
				portfolioData: {},
				builtPortfolio: false,
			}));

			Router.push('/portfolios/portfolio-recommended' + (goalId ? '?goalId=' + goalId : ''));
			setIsModalOpen(false);
		} catch (error) {
			Message.error(error.message || error.toString);
		}
	}, [type, riskProfile, dispatch, goalId]);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div
				onClick={showModal}
				style={{
					cursor: 'pointer',
				}}
			>
				{children}
			</div>
			<Modal title="Portfolio construction" {...props} open={isModalOpen} onOk={() => form.submit()} onCancel={handleCancel}>
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
						name="tenor"
						label="Investment tenor"
						rules={[
							{
								required: true,
								message: 'Please input!',
							},
						]}
					>
						<Select
							options={[
								{
									value: '1-3Y',
									label: 'Short term (up to 3 years)',
								},
								{
									value: '4-7Y',
									label: 'Medium term (up to 5 years)',
								},
								{
									value: '>8Y',
									label: 'Long term (10 years and above)',
								},
							]}
						/>
					</Form.Item>
					<Form.Item
						name="experience"
						label="Accumulated investment experience"
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
						<Select
							options={[
								{
									value: '0-3Y',
									label: '0-3 years',
								},
								{
									value: '>3Y',
									label: 'More than or equal to 3 years',
								},
							]}
						/>
					</Form.Item>
					<Form.Item
						name="total"
						label="Assets under Management"
						rules={[
							{
								required: true,
								message: 'Please input!',
							},
						]}
					>
						<Select
							options={[
								{
									value: '<100k',
									label: 'Less than 100K SGD',
								},
								{
									value: '>100k',
									label: 'More than 100K SGD',
								},
							]}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

ModalInput.propTypes = propTypes;

ModalInput.defaultProps = defaultProps;

export default ModalInput;
