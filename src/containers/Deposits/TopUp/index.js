/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-11-04 07:11:39
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { Button, Tabs, Form, InputNumber, Radio } from 'antd';
import currency from 'src/utils/format-currency';

import Router from 'next/router';

import { AiOutlineRight } from 'react-icons/ai';
import { BsBank } from 'react-icons/bs';

import PageTitle from 'src/components/PageTitle';


const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const TopUp = (props) => {
	// const { } = props;
	const [form] = Form.useForm();
	const [step, setStep] = React.useState(1);
	const [bank, setBank] = React.useState('');

	React.useEffect(() => {
		form.setFieldsValue({
			method: 'monthly',
		});
	}, [form]);

	const handleSubmitFrom = React.useCallback(async (values) => {

	}, []);

	const generateRight = React.useMemo(() => {
		if (step === 3) {
			return (
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
							flex: 1,
						}}
					>
						<div
							style={{
								divAlign: 'center',
								marginBottom: 20,
								// marginTop: 20,
								padding: 10,
							}}
						>
							Top-up to <strong>Savings Account</strong>
						</div>
						<div
							type="h1"
							// color="primary"
							className="text-primary"
							style={{
								divAlign: 'center',
								marginBottom: 20,
								fontSize: 30,
								// divTransform: 'capitalize',
							}}
						>
							{currency.format(form.getFieldValue('amount'))}
						</div>
						<div
							type="h5"
							style={{
								marginTop: 20,
								padding: 10,
								// divAlign: 'center',
								marginBottom: 20,
							}}
						>
							Here’s your one-time SGD transfer instruction using
						</div>
						<h3
							type="h1"
							// color="primary"
							className="text-primary mb-0"
							style={{

							}}
						>
							{bank}
						</h3>
						<a
							type="link"
							style={{
								marginBottom: 20,
							}}
							onClick={() => setStep(2)}
						>
							Or use another transfer method
						</a>
						<div
							className="mt-3"
						>
							<Tabs
								defaultActiveKey="1"
								centered
								items={[
									{
										label: 'Bank transfer',
										key: '1',
										children: (
											<div
												style={{
													paddingVertical: 20,
												}}
											>
												<div
													style={{
														padding: 15,
														borderRadius: 4,
														backgroundColor: 'rgb(236 236 236)',
														marginBottom: 15,
													}}
												>
													<ul className="">
														<li>Make sure your deposit comes from a bank account that’s in your name.</li>
														<li>We’ll reverse any deposits that come from a bank accout that’s not in your name.</li>
														<li>Joint accounts are also fine, as long as you can prove your account ownership.</li>
													</ul>
												</div>
												<h6
													type="h5"
													style={{
														marginBottom: 20,
													}}
												>
													Step 1: Login to your bank account
												</h6>
												<h6
													type="h5"
													style={{
														marginBottom: 20,

													}}
												>
													Step 2: Select ‘Transfer funds to an account’
												</h6>
												<h6
													type="h5"
													style={{
														marginBottom: 20,

													}}
												>
													Step 3: Add myWealth.ai as a payee using the infomation below
												</h6>
												<div
													style={{
														marginBottom: 20,
														padding: 15,
														borderRadius: 4,
														backgroundColor: 'rgb(236 236 236)',
													}}
												>
													<div
														style={{

														}}
													>
														Payee’s bank
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{
															marginBottom: 15,
															display: 'block',
														}}
													>
														{bank} Bank Ltd
													</strong>
													<div
														style={{

														}}
													>
														Payee’s name
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{
															marginBottom: 15,
															display: 'block',
														}}
													>
														myWealth.ai
													</strong>
													<div
														style={{

														}}
													>
														Account number
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{

														}}
													>
														123456789
													</strong>
												</div>
												<h6
													type="h5"
													style={{
														marginBottom: 20,

													}}
												>
													Step 4: Complete your deposit using the infomation below
												</h6>
												<div
													style={{
														marginBottom: 20,
														padding: 15,
														borderRadius: 4,
														backgroundColor: 'rgb(236 236 236)',
													}}
												>
													<div
														style={{

														}}
													>
														Purpose code
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{
															marginBottom: 15,
															display: 'block',

														}}
													>
														Investment & Securities
													</strong>
													<div
														style={{

														}}
													>
														Your reference code (Payment desciption)
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{
															marginBottom: 15,
															display: 'block',
														}}
													>
														MDS23SD
													</strong>
													<div
														style={{

														}}
													>
														Deposit exactly these amount
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{

														}}
													>
														{currency.format(form.getFieldValue('amount'))}
													</strong>
												</div>
												<h5
													type="h5"
													style={{
													}}
												>
													That’s it
												</h5>
												<div
													style={{

													}}
												>
													Once we’ve received your deposit, we will notify you and invest it in approximately 1 to 3 business dáy.
												</div>
											</div>
										),
									},
									{
										label: 'PayNow',
										key: '2',
										children: (
											<div
												style={{
													paddingVertical: 20,
												}}
											>
												<div
													style={{
														padding: 15,
														borderRadius: 4,
														backgroundColor: 'rgb(236 236 236)',
														marginBottom: 15,
													}}
												>
													<ul>
														<li>Make sure your deposit comes from a bank account that’s in your name.</li>
														<li>We’ll reverse any deposits that come from a bank accout that’s not in your name.</li>
														<li>Joint accounts are also fine, as long as you can prove your account ownership.</li>
													</ul>
												</div>
												<h6
													type="h5"
													style={{
														marginBottom: 20,
													}}
												>
													Step 1: Login to your bank account
												</h6>
												<h6
													type="h5"
													style={{
														marginBottom: 20,

													}}
												>
													Step 2: Select ‘Transfer funds to an account’
												</h6>
												<h6
													type="h5"
													style={{
														marginBottom: 20,

													}}
												>
													Step 3: Add myWealth.ai as a payee using the infomation below
												</h6>
												<div
													style={{
														marginBottom: 20,
														padding: 15,
														borderRadius: 4,
														backgroundColor: 'rgb(236 236 236)',
													}}
												>
													<div
														style={{

														}}
													>
														Payee’s bank
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{
															marginBottom: 15,
															display: 'block',
														}}
													>
														{bank} Bank Ltd
													</strong>
													<div
														style={{

														}}
													>
														Payee’s name
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{
															marginBottom: 15,
															display: 'block',
														}}
													>
														myWealth.ai
													</strong>
													<div
														style={{

														}}
													>
														Account number
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{

														}}
													>
														123456789
													</strong>
												</div>
												<h6
													type="h5"
													style={{
														marginBottom: 20,

													}}
												>
													Step 4: Complete your deposit using the infomation below
												</h6>
												<div
													style={{
														marginBottom: 20,
														padding: 15,
														borderRadius: 4,
														backgroundColor: 'rgb(236 236 236)',
													}}
												>
													<div
														style={{

														}}
													>
														Purpose code
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{
															marginBottom: 15,
															display: 'block',

														}}
													>
														Investment & Securities
													</strong>
													<div
														style={{

														}}
													>
														Your reference code (Payment desciption)
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{
															marginBottom: 15,
															display: 'block',
														}}
													>
														MDS23SD
													</strong>
													<div
														style={{

														}}
													>
														Deposit exactly these amount
													</div>
													<strong
														type="strong"
														// color="primary"
														style={{

														}}
													>
														{currency.format(form.getFieldValue('amount'))}
													</strong>
												</div>
												<h5
													type="h5"
													style={{
													}}
												>
													That’s it
												</h5>
												<div
													style={{

													}}
												>
													Once we’ve received your deposit, we will notify you and invest it in approximately 1 to 3 business dáy.
												</div>
											</div>
										),
									},
								]}
							/>
						</div>
						<div
							style={{
								textAlign: 'right',
								marginTop: 40,
							}}
						>
							<Button
								type="primary"
								htmlType="submit"
								onClick={() => Router.push('/deposits')}
							>
								Done
							</Button>
						</div>
					</div>
				</div>
			);
		}

		if (step === 2) {
			return (
				<div
					// headerShown={false}
					// loading={loading}
					style={{
						// justifyContent: 'center',
					}}
					className="box"
				>
					<strong>Select your bank to see transfer information for deposit</strong>
					<div
						onClick={() => { setStep(3); setBank('DBS/POSB'); }}
						style={{
							marginTop: 20,
							padding: 10,
							cursor: 'pointer',
						}}
						className="box"
					>
						<div
							style={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<div
								className="text-primary"
								style={{
									textAlign: 'center',
									marginRight: 10,
									width: 50,
								}}
							>
								<BsBank size={34} />
							</div>
							<strong
								style={{
									flex: 1,
									// divAlign: 'center',
								}}
							>
								DBS/POSB
							</strong>
							<div
								style={{
									marginRight: -5,
								}}
							>
								<AiOutlineRight size={20} />
							</div>
						</div>
					</div>
					<div
						onClick={() => { setStep(3); setBank('OCBC'); }}
						style={{
							marginTop: 20,
							padding: 10,
							cursor: 'pointer',
						}}
						className="box"
					>
						<div
							style={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<div
								className="text-primary"
								style={{
									textAlign: 'center',
									marginRight: 10,
									width: 50,
								}}
							>
								<BsBank size={34} />
							</div>
							<strong
								style={{
									flex: 1,
									// divAlign: 'center',
								}}
							>
								OCBC
							</strong>
							<div
								style={{
									marginRight: -5,
								}}
							>
								<AiOutlineRight size={20} />
							</div>
						</div>
					</div>
					<div
						onClick={() => { setStep(3); setBank('Citibank'); }}
						style={{
							marginTop: 20,
							padding: 10,
							cursor: 'pointer',
						}}
						className="box"
					>
						<div
							style={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<div
								className="text-primary"
								style={{
									textAlign: 'center',
									marginRight: 10,
									width: 50,
								}}
							>
								<BsBank size={34} />
							</div>
							<strong
								style={{
									flex: 1,
									// divAlign: 'center',
								}}
							>
								Citibank
							</strong>
							<div
								style={{
									marginRight: -5,
								}}
							>
								<AiOutlineRight size={20} />
							</div>
						</div>
					</div>
					<div
						onClick={() => { setStep(3); setBank('HSBC'); }}
						style={{
							marginTop: 20,
							padding: 10,
							cursor: 'pointer',
						}}
						className="box"
					>
						<div
							style={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<div
								className="text-primary"
								style={{
									textAlign: 'center',
									marginRight: 10,
									width: 50,
								}}
							>
								<BsBank size={34} />
							</div>
							<strong
								style={{
									flex: 1,
									// divAlign: 'center',
								}}
							>
								HSBC
							</strong>
							<div
								style={{
									marginRight: -5,
								}}
							>
								<AiOutlineRight size={20} />
							</div>
						</div>
					</div>
					<div
						onClick={() => { setStep(3); setBank('Standard Chartered'); }}
						style={{
							marginTop: 20,
							padding: 10,
							cursor: 'pointer',
						}}
						className="box"
					>
						<div
							style={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<div
								className="text-primary"
								style={{
									textAlign: 'center',
									marginRight: 10,
									width: 50,
								}}
							>
								<BsBank size={34} />
							</div>
							<strong
								style={{
									flex: 1,
									// divAlign: 'center',
								}}
							>
								Standard Chartered
							</strong>
							<div
								style={{
									marginRight: -5,
								}}
							>
								<AiOutlineRight size={20} />
							</div>
						</div>
					</div>
				</div>
			);
		}

		return null;
	}, [bank, form, step]);

	return (
		<div className="row">
			<div className="col-4">
				<PageTitle
					title="Top-up to Savings Account"
				/>
				<div
					// headerShown={false}
					// loading={loading}
					style={{
						// justifyContent: 'center',
					}}
					className="box"
				>
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
							name="amount"
							label="Deposit amount (SGD)"
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
							name="method"
							// label="Description"
							rules={[
								{
									required: true,
									message: 'Please input!',
								},
							]}
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
								optionType="button"
								buttonStyle="solid"
								style={{
									textAlign: 'center',
								}}
							/>
						</Form.Item>
						<h6>Select your preferred deposit method</h6>
						<strong>Banks in Singapore</strong>
						<div
							onClick={() => setStep(2)}
							style={{
								marginTop: 20,
								padding: 10,
								cursor: 'pointer',
							}}
							className="box"
						>
							<div
								style={{
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<div
									className="text-primary"
									style={{
										textAlign: 'center',
										marginRight: 10,
										width: 50,
									}}
								>
									<BsBank size={34} />
								</div>
								<strong
									style={{
										flex: 1,
										// divAlign: 'center',
									}}
								>
									Local bank transfer
								</strong>
								<div
									style={{
										marginRight: -5,
									}}
								>
									<AiOutlineRight size={20} />
								</div>
							</div>
						</div>
						<strong>Overseas Bank</strong>
						<div
							// onClick={() => setGoalData({ type: el.value, label: el.label })}
							style={{
								marginTop: 20,
								padding: 10,
								cursor: 'pointer',
							}}
							className="box"
						>
							<div
								style={{
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<div
									className="text-primary"
									style={{
										textAlign: 'center',
										marginRight: 10,
										width: 50,
									}}
								>
									<BsBank size={34} />
								</div>
								<strong
									style={{
										flex: 1,
										// divAlign: 'center',
									}}
								>
									Wise
								</strong>
								<div
									style={{
										marginRight: -5,
									}}
								>
									<AiOutlineRight size={20} />
								</div>
							</div>
						</div>
						<div
							// onClick={() => setGoalData({ type: el.value, label: el.label })}
							style={{
								marginTop: 20,
								padding: 10,
								cursor: 'pointer',
							}}
							className="box"
						>
							<div
								style={{
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<div
									className="text-primary"
									style={{
										textAlign: 'center',
										marginRight: 10,
										width: 50,
									}}
								>
									<BsBank size={34} />
								</div>
								<strong
									style={{
										flex: 1,
										// divAlign: 'center',
									}}
								>
									InstaReM
								</strong>
								<div
									style={{
										marginRight: -5,
									}}
								>
									<AiOutlineRight size={20} />
								</div>
							</div>
						</div>
						<div
							// onClick={() => setGoalData({ type: el.value, label: el.label })}
							style={{
								marginTop: 20,
								padding: 10,
								cursor: 'pointer',
							}}
							className="box"
						>
							<div
								style={{
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<div
									className="text-primary"
									style={{
										textAlign: 'center',
										marginRight: 10,
										width: 50,
									}}
								>
									<BsBank size={34} />
								</div>
								<strong
									style={{
										flex: 1,
										// divAlign: 'center',
									}}
								>
									Revolut
								</strong>
								<div
									style={{
										marginRight: -5,
									}}
								>
									<AiOutlineRight size={20} />
								</div>
							</div>
						</div>
						<div
							// onClick={() => setGoalData({ type: el.value, label: el.label })}
							style={{
								marginTop: 20,
								padding: 10,
								cursor: 'pointer',
							}}
							className="box"
						>
							<div
								style={{
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<div
									className="text-primary"
									style={{
										textAlign: 'center',
										marginRight: 10,
										width: 50,
									}}
								>
									<BsBank size={34} />
								</div>
								<strong
									style={{
										flex: 1,
										// divAlign: 'center',
									}}
								>
									Overseas bank transfer
								</strong>
								<div
									style={{
										marginRight: -5,
									}}
								>
									<AiOutlineRight size={20} />
								</div>
							</div>
						</div>
						<strong>Need help?</strong>
						<p>Get in touch with our support team</p>
						{/* <div
							style={{
								textAlign: 'center',
							}}
						>
							<Button
								type="primary"
								htmlType="submit"
							>
								Continue
							</Button>
							<Button
								className="ml-3"
							// onClick={onCancel}
							>
								Cancel
							</Button>
						</div> */}
					</Form>
				</div>
			</div>
			<div className="col-8">
				{generateRight}
			</div>
		</div>
	);
};

TopUp.propTypes = propTypes;

TopUp.defaultProps = defaultProps;

export default TopUp;
