/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-01-13 22:57:59
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import AuthStorage from 'src/utils/auth-storage';
import Router from 'next/router';
import Link from 'next/link';

import Image from 'next/image';

import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { actionLogin } from 'src/redux/actions/auth';

import Logo from 'src/components/Layout/Logo';

import classes from './style.module.less';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const data = [
	{
		title: 'Personal Financial Discovery',
		content: 'Wherever you are in the investment spectrum, we help you move forward with your investment journey.',
	},
	{
		title: 'Multi-goal Investing',
		content: 'We strive to match your financial goals and risk tolerance with the choice of assets and investment horizon.',
	},
	{
		title: 'Harnessing Artificial Intelligence',
		content: 'We adopt AI and quantitative techniques to improve your investment portfolio, and your overall investment experience.',
	},
	{
		title: 'myWealth Roadmap',
		content: 'A comprehensive tool to help you take stock of your financial situation, recommend steps to boost your financial health, and help you to work towards your financial goals.',
	},
];

const Login = (props) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		if (AuthStorage.loggedIn) {
			Router.push('/');
		}
	}, []);

	const onFinish = async (values) => {
		try {
			setLoading(true);
			await dispatch(await actionLogin({
				...values,
			}));
			Router.push('/');
		} catch (err) {
			notification.error({
				message: 'Oops!',
				description: err.error?.message || err.message || err.toString(),
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			className={classes.wrapper}
		>
			<div className={classes.left}>
				<div className={classes.leftOverlay} />
				<div className={classes.leftContent}>
					<div
						className="row justify-content-center"
					>
						<div className="col-12 col-md-10 col-lg-10 col-xl-9 col-xxl-7">
							<Logo
								size={45}
							/>
							<div className="flex-1">
								<h1 className="pt-4 text-white">
									Welcome to the myWealth.ai investment experience.
								</h1>
								<p className="mt-3 fs-md">
									myWealth.ai puts you in control of your investment money, with personalizable investment portfolio and human-centric investment experience.
								</p>
							</div>
							<div className="row mt-5">
								{
									data.map((el) => {
										return (
											<div key={el.title} className="col-12 col-sm-6 mb-4">
												<h3 className="text-white fs-lg">{el.title}</h3>
												<p
													style={{
														color: '#c6c6c6',
													}}
												>
													{el.content}
												</p>
											</div>
										);
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.right}>
				<div
					className="d-flex justify-content-center align-content-center flex-1 flex-column"
				>
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{
							// email: 'demo@mywealth.ai',
							// password: '123123',
						}}
						onFinish={onFinish}
						style={{
							width: 350,
							padding: 20,
							margin: '0 auto 40px',
							borderRadius: 4,
							background: '#fff',
						}}
						size="large"
					>
						<div className="text-center mb-5">
							<Logo
								width={150}
								height={150}
							/>
						</div>
						<Form.Item
							name="email"
							rules={[
								{
									type: 'email',
									message: 'The input is not valid E-mail!',
								}, {
									required: true,
									message: 'Please input your E-mail!',
								},
							]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your Password!',
								},
							]}
						>
							<Input.Password
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
							/>
						</Form.Item>
						<Form.Item>
							<div className="text-center">
								<Link href="/forgot-password" className="login-form-forgot">
									Forgot password
								</Link>
							</div>
						</Form.Item>

						<Button type="primary" block htmlType="submit" className="login-form-button" loading={loading}>
							Login
						</Button>

					</Form>
				</div>
				<div className="py-2">
					<strong className="text-primary">myWealth.ai</strong>
					<span> 2023 © All Rights Reserved.</span>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = propTypes;

Login.defaultProps = defaultProps;

export default Login;
