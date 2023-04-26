/* eslint-disable no-unused-expressions */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-27 14:40:43
*------------------------------------------------------- */

import React, { useCallback, useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { Button, Message, Input, Form, Select, Divider, DatePicker, Radio, Checkbox, InputNumber } from 'antd';

import { actionUpdateProfile } from 'src/redux/actions/auth';
import PageTitle from 'src/components/PageTitle';
import Card from 'src/components/Card';

import moment from 'moment';

const propTypes = {
	// route: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const InputInfoScreen = (props) => {
	const router = useRouter();
	const { goalId } = router.query || {};

	const [form] = Form.useForm();
	const inputEmail = useRef();

	const [loading, setLoading] = useState(false);
	const auth = useSelector(state => state.auth);

	const dispatch = useDispatch();

	React.useEffect(() => {
		form.setFieldsValue({
			...auth,
			NRICno: '122124312',
			fullName: 'Jerry Yong',
			citizenship: 'Singapore',
			maritalStatus: 'married',
			numberOfChildren: '1',
			passport: 'CB121313',
			address: '16 Sandilands Road Singapore 546080 SINGAPORE',
			dateOfBirth: moment('1987-09-12 07:15:13'),
			gender: 'male',
		});
	}, [auth, form]);

	const handleSubmitFrom = useCallback(async (values) => {
		try {
			setLoading(true);
			await dispatch(await actionUpdateProfile(values));

			Router.push('/portfolios/new' + (goalId ? '?goalId=' + goalId : ''));
		} catch (error) {
			Message.error(error.message || error.toString);
		} finally {
			setLoading(false);
		}
	}, [dispatch, goalId]);

	return (
		<div>
			<PageTitle
				title="Set up your account"
				subtitle="Your privacy is important to us, and that’s why we fully comply with the PDPA and other applicable data protection and privacy laws."
			/>
			<Card>
				<svg width="112" height="19.121951219512198" viewBox="0 0 82 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-bdVaJa containers__Box-aqsfkq-0 kdpzyl"><g clip-path="url(#clip0_singpass)"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.88771 0.110066C1.63746 0.382248 0.705181 1.14102 0.394615 2.13918C-0.0571973 3.59119 0.47511 4.99217 1.72419 5.6383C2.21293 5.89108 2.35348 5.93372 3.961 6.3168C5.42111 6.66476 5.69492 6.8148 5.69492 7.26691C5.69492 7.73334 5.36566 7.91676 4.52476 7.91868C3.59324 7.92083 2.64243 7.60508 1.82606 7.02251L1.4707 6.76896L0.735352 7.85408L0 8.93926L0.24271 9.12553C0.79919 9.55259 1.82443 9.96025 2.87734 10.1731C3.6548 10.3302 5.3829 10.3161 5.99407 10.1476C7.29569 9.78872 8.16786 8.97066 8.45973 7.83492C8.56935 7.40844 8.57435 6.59318 8.4698 6.20171C8.29483 5.54679 7.88321 5.02613 7.258 4.66903C6.79658 4.40552 6.4008 4.27773 5.22895 4.01382C3.7194 3.6739 3.46824 3.58892 3.25483 3.34586C3.03926 3.10035 3.02167 2.87639 3.20014 2.64953C3.38553 2.41386 3.64758 2.32836 4.18484 2.32836C4.963 2.32836 5.77897 2.61388 6.43726 3.11654C6.58485 3.22919 6.72348 3.30106 6.74538 3.27625C6.88517 3.118 8.14124 1.22058 8.14124 1.16775C8.14124 1.06087 7.46367 0.655946 6.95932 0.461463C6.12862 0.141111 5.60062 0.0491404 4.44263 0.0232792C3.56901 0.00370865 3.30976 0.0182119 2.88771 0.110066ZM20.3728 0.0387144C19.707 0.15008 19.0212 0.535318 18.4903 1.0964C18.3038 1.29345 18.14 1.45467 18.1262 1.45467C18.1125 1.45467 18.1013 1.26992 18.1013 1.04404C18.1013 0.577547 18.0092 0.346136 17.7825 0.242866C17.6793 0.195803 17.2249 0.173262 16.3799 0.173262H15.1301L15.1449 5.13872L15.1598 10.1042L16.6306 10.1197L18.1013 10.1353L18.1017 7.38218C18.1021 4.5696 18.132 4.08261 18.3312 3.63213C18.4877 3.27852 18.8181 2.94338 19.1647 2.78693C19.6018 2.58965 20.4518 2.58825 20.8508 2.78419C21.39 3.04886 21.6824 3.53684 21.7728 4.32275C21.8032 4.58731 21.8283 6.00291 21.8285 7.46855L21.829 10.1333H23.2851H24.7413V6.70751C24.7413 4.57146 24.7182 3.15155 24.6801 2.9361C24.3344 0.984219 23.1321 -0.0177258 21.1644 0.0064462C20.8092 0.0108146 20.4529 0.0253179 20.3728 0.0387144ZM29.8378 0.113444C29.2918 0.258709 29.0406 0.370366 28.5564 0.682972C27.7533 1.20142 27.0642 2.07912 26.7203 3.02137C25.6378 5.98742 27.2382 9.17859 30.0987 9.75802C31.3416 10.0098 32.7629 9.64974 33.5636 8.88032L33.9006 8.55647L33.8753 9.21383C33.854 9.76589 33.8255 9.92455 33.6973 10.2042C33.4 10.8524 32.8335 11.2984 32.0848 11.4737C31.652 11.575 30.7104 11.5154 30.1872 11.3536C29.5253 11.1488 28.7845 10.7433 28.505 10.4327C28.3957 10.3114 28.3926 10.3149 27.6155 11.4598L26.8356 12.6087L27.0553 12.7983C27.3565 13.0583 28.347 13.5404 28.8767 13.6848C29.7467 13.922 30.3304 13.9962 31.3522 13.9998C32.0686 14.0024 32.4804 13.9757 32.8416 13.9031C34.7796 13.5141 35.9723 12.5384 36.5422 10.8756C36.8409 10.0041 36.8557 9.71673 36.856 4.76012L36.8564 0.173262L35.6187 0.174136C34.747 0.174718 34.3379 0.196502 34.2353 0.247759C34.0145 0.358076 33.886 0.669866 33.886 1.09588L33.8859 1.46516L33.659 1.17812C33.2534 0.664974 32.6591 0.300296 31.9206 0.111405C31.3366 -0.0379371 30.4032 -0.0370052 29.8378 0.113444ZM44.0952 0.110415C43.4345 0.272804 42.9408 0.546851 42.4677 1.01381L42.0505 1.42555L42.0256 0.970298C42.0039 0.571722 41.9814 0.495653 41.8446 0.358717L41.6884 0.202385L40.379 0.184737L39.0697 0.167088V6.98494V13.8028H40.555H42.0403V11.4238V9.0448L42.346 9.32916C42.6953 9.654 43.4077 10.0272 43.9624 10.1761C44.4978 10.3197 45.8817 10.3169 46.4087 10.1713C48.623 9.559 50.0139 7.42598 49.8865 4.83776C49.7677 2.42429 48.34 0.560481 46.2516 0.0924753C45.6874 -0.0339764 44.6474 -0.0252978 44.0952 0.110415ZM54.8834 0.0858353C52.8651 0.536716 51.4971 2.19591 51.2399 4.50477C51.1086 5.68431 51.3163 6.79418 51.8736 7.89084C52.2368 8.6054 53.031 9.41286 53.7185 9.76635C54.5274 10.1823 54.9347 10.279 55.8736 10.2781C57.176 10.2769 57.8566 10.0304 58.6495 9.27284L59.1062 8.83646V9.48485V10.1333H60.5624H62.0185V5.15328V0.173262H60.7915C60.0026 0.173262 59.5192 0.196502 59.4373 0.238323C59.1744 0.372813 59.1089 0.525067 59.1075 1.00525L59.1062 1.45869L58.7002 1.0526C58.2256 0.578013 57.5695 0.221315 56.922 0.0858353C56.42 -0.019182 55.3536 -0.019182 54.8834 0.0858353ZM66.7266 0.0581103C64.9386 0.359824 63.8242 1.52393 63.8242 3.08986C63.8242 3.9512 64.0788 4.62249 64.6002 5.13563C65.0954 5.62292 65.5874 5.84169 66.8823 6.15033C68.6245 6.56551 68.9062 6.66092 69.1246 6.90968C69.2819 7.08885 69.3064 7.15478 69.2786 7.32579C69.2379 7.57689 69.0547 7.779 68.7883 7.86696C68.4661 7.97331 67.3104 7.90231 66.8529 7.74813C66.3423 7.57602 65.723 7.26015 65.3598 6.98657L65.0605 6.76127L64.3181 7.84669L63.5758 8.9321L63.7437 9.06932C64.2628 9.4937 65.2964 9.93119 66.272 10.1396C67.1076 10.3181 68.812 10.3347 69.474 10.1708C70.8799 9.82262 71.8072 8.94427 72.0655 7.7161C72.3683 6.27679 71.8359 5.14804 70.5673 4.53931C70.1969 4.3616 69.7644 4.23393 68.7001 3.98819C66.9345 3.58053 66.6782 3.45291 66.6782 2.98141C66.6782 2.53437 67.014 2.33168 67.7581 2.32964C68.5303 2.32754 69.3394 2.60503 69.9873 3.09417C70.1584 3.22336 70.3051 3.32011 70.3133 3.30922C70.3216 3.29833 70.653 2.809 71.0498 2.22183L71.7713 1.15424L71.6274 1.04322C71.1134 0.646859 70.0306 0.235702 69.1054 0.0856606C68.5422 -0.00572717 67.1971 -0.0212788 66.7266 0.0581103ZM76.1624 0.0581103C74.3507 0.363843 73.2631 1.5029 73.2607 3.09726C73.259 4.16392 73.6415 4.94127 74.4256 5.4649C74.9046 5.78472 75.2474 5.90331 76.6636 6.23904C78.3953 6.64956 78.7033 6.80659 78.7033 7.27925C78.7033 7.55551 78.5171 7.77761 78.2152 7.86148C77.8628 7.95939 76.9907 7.93085 76.5002 7.80539C75.964 7.66828 75.209 7.30844 74.7911 6.99082L74.4874 6.76011L73.7482 7.8461L73.0089 8.93216L73.2073 9.09798C73.5046 9.34657 74.5034 9.81912 75.0793 9.98367C76.6929 10.4447 78.6226 10.4016 79.7491 9.87935C80.7939 9.39504 81.459 8.44056 81.5624 7.27704C81.6698 6.06873 81.1427 5.10861 80.0771 4.57205C79.6053 4.3344 79.3729 4.2662 77.9128 3.93635C76.4051 3.59585 76.114 3.44126 76.114 2.98141C76.114 2.53437 76.4499 2.33168 77.1939 2.32964C77.9615 2.32754 78.637 2.55389 79.3495 3.05195L79.7203 3.31114L79.9748 2.95083C80.1148 2.75262 80.448 2.26627 80.7151 1.87002L81.201 1.14958L81.0601 1.04089C80.5496 0.646976 79.4641 0.235352 78.5412 0.0856606C77.978 -0.00572717 76.6329 -0.0212788 76.1624 0.0581103ZM32.0511 2.61918C33.3963 2.83917 34.2578 4.15442 33.92 5.47218C33.7367 6.18703 33.3186 6.69889 32.6627 7.0115C32.3128 7.1782 32.2377 7.19177 31.6725 7.19031C31.1177 7.18892 31.0285 7.17307 30.7115 7.01919C30.2665 6.80321 29.8202 6.35751 29.6012 5.91048C29.4434 5.5882 29.4301 5.51109 29.4301 4.9203C29.4301 4.34617 29.4464 4.24476 29.5871 3.94451C29.8932 3.29122 30.5589 2.75396 31.2255 2.62221C31.5666 2.55476 31.6552 2.55441 32.0511 2.61918ZM44.9688 2.64702C45.9926 2.86399 46.7181 3.66458 46.8707 4.74556C47.0351 5.91019 46.5208 6.95774 45.5488 7.43815C45.1121 7.65395 45.0922 7.65785 44.4314 7.65785C43.7984 7.65785 43.736 7.64708 43.3799 7.47671C42.8807 7.23778 42.5103 6.89978 42.2854 6.47773C41.9339 5.81839 41.8475 5.19271 42.0118 4.49621C42.1325 3.984 42.2947 3.69521 42.6737 3.31796C43.0364 2.95689 43.4195 2.74598 43.9041 2.64067C44.3338 2.54736 44.5032 2.54835 44.9688 2.64702ZM57.2005 2.64702C57.9925 2.81489 58.5721 3.27491 58.9266 4.01714C59.1302 4.44361 59.1354 4.47146 59.1354 5.15328C59.1354 5.8181 59.1263 5.87134 58.9499 6.24382C58.6921 6.78807 58.3117 7.17552 57.7749 7.44083C57.3445 7.65354 57.3225 7.65785 56.6617 7.65785C56.017 7.65785 55.9707 7.64952 55.5976 7.46582C54.9389 7.14156 54.5324 6.64362 54.3075 5.88532C54.2019 5.52943 54.1868 4.87417 54.2754 4.48998C54.4916 3.55234 55.2053 2.84284 56.1357 2.64067C56.5654 2.54736 56.7348 2.54835 57.2005 2.64702Z" fill="#F4333D"></path><path d="M10.0734 0.775892C10.2869 0.453618 10.5396 0.250981 10.919 0.0979106C11.2904 -0.051956 11.9108 -0.0266773 12.2604 0.152487C12.9096 0.485245 13.2386 1.02099 13.2362 1.74108C13.2349 2.11753 13.2081 2.23681 13.0604 2.52571C12.5349 3.55323 11.091 3.76443 10.2825 2.93204C9.72224 2.35517 9.63354 1.44001 10.0734 0.775892Z" fill="#072340"></path><path d="M9.67029 10.0777C9.68637 9.98966 9.86658 8.59816 10.0707 6.98563L10.4419 4.05371L10.6457 4.08551C11.2329 4.17713 11.6678 4.18907 12.1022 4.12558C12.3646 4.0872 12.5862 4.06419 12.5949 4.07438C12.6098 4.09221 13.3849 10.1043 13.3838 10.1942C13.3835 10.2182 12.5413 10.2379 11.5121 10.2379H9.64099L9.67029 10.0777Z" fill="#072340"></path></g><defs><clipPath id="clip0_singpass"><rect width="82" height="14" fill="white"></rect></clipPath></defs></svg>
				<h5>Set up your account in an instant with Singpass</h5>
				<p>Or, you can choose to set up your account manually, and this takes 5-10 minutes to complete, then 1-2 business days for us to verify your documents.</p>
				<div className="text-right">
					<Button type="primary" danger>Set up instantly with Singpass</Button>
				</div>
			</Card>
			<Card>
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
					<h5 className="mb-0">Enter personal details</h5>
					<p className="mb-4">Start investing in the time it takes to enjoy a cup of coffee.</p>
					<div
						style={{
						}}
					>
						<Form.Item
							name="fullName"
							label="Applicant Name"
							rules={[
								{
									required: true,
									message: 'Please input your Applicant Name!',
								},
							]}
							style={{
								flex: 1,
							}}
						>
							<Input
								placeholder="Applicant Name"
								onSubmitEditing={() => { inputEmail?.current?.focus(); }}
								blurOnSubmit={false}
							/>
						</Form.Item>
						<Form.Item
							name="citizenship"
							label="Citizenship/Region"
							rules={[
								{
									required: true,
									message: 'Please input your Citizenship/Region!',
								},
							]}
							style={{
								flex: 1,
							}}
						>
							<Input
								placeholder="Citizenship/Region"
								blurOnSubmit={false}
							/>
						</Form.Item>

						<div className="row">
							<div className="col-12 col-lg-6">
								<Form.Item
									name="dateOfBirth"
									label="Date of Birth"
									rules={[
										{
											required: true,
											message: 'Please input your Date of birth!',
										},
									]}
								>
									<DatePicker
										placeholder="Date of birth"
										style={{
											width: '100%',
										}}
									/>
								</Form.Item>
							</div>
							<div className="col-12 col-lg-6">
								<Form.Item
									name="gender"
									label="Gender"
									rules={[
										{
											required: true,
											message: 'Please input your Gender!',
										},
									]}
								>
									<Select
										placeholder="Gender"
										options={[
											{
												value: 'male',
												label: 'Male',
											},
											{
												value: 'female',
												label: 'Female',
											},
										]}
									/>
								</Form.Item>
							</div>
						</div>

						<div className="row">
							<div className="col-12 col-lg-6">
								<Form.Item
									name="maritalStatus"
									label="Marital Status"
									rules={[
										{
											required: true,
											message: 'Please input your Marital status!',
										},
									]}
									style={{
										flex: 1,
									}}
								>
									<Select
										placeholder="Marital status"
										options={[
											{
												value: 'single',
												label: 'Single',
											},
											{
												value: 'married',
												label: 'Married',
											},
										]}
									/>
								</Form.Item>
							</div>
							<div className="col-12 col-lg-6">
								<Form.Item
									name="numberOfChildren"
									label="Number of Children"
									rules={[
										{
											required: true,
											message: 'Please input your Number of children!',
										},
									]}
									style={{
										flex: 1,
									}}
								>
									<Input
										placeholder="Number of children"
										type="number"
									/>
								</Form.Item>
							</div>
						</div>
						<Form.Item
							name="address"
							label="Address"
							rules={[
								{
									required: true,
									message: 'Please input your Address!',
								},
							]}
							style={{
								flex: 1,
							}}
						>
							<Input.TextArea
								placeholder="Address"
							/>
						</Form.Item>
					</div>
					<Divider size={5} padding={5} />
					<div
						style={{
						}}
					>
						<h5 className="mb-4">Proof of identity</h5>
						<div className="row">
							<div className="col-12 col-lg-6">
								<Form.Item
									name="passport"
									label="Passport"
									rules={[
										{
											required: true,
											message: 'Please input your Passport!',
										},
									]}
									style={{
										flex: 1,
									}}
								>
									<Input
										placeholder="Passport"
									/>
								</Form.Item>
							</div>
							<div className="col-12 col-lg-6">
								<Form.Item
									name="ppExpirationDate"
									label="PP Expiration Date"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your PP Expiration Date!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<Input
										placeholder="PP Expiration Date"
									/>
								</Form.Item>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-lg-6">
								<Form.Item
									name="idCard"
									label="National ID Card"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Work!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<Input
										placeholder="Work"
									/>
								</Form.Item>
							</div>
							<div className="col-12 col-lg-6">
								<Form.Item
									name="idCardExpirationDate"
									label="ID Expiration Date"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your ID Expiration Date!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<Input
										placeholder="ID Expiration Date"
									/>
								</Form.Item>
							</div>
						</div>
					</div>
					<Divider size={5} padding={5} />
					<div
						style={{
						}}
					>
						<h5 className="mb-4">Contact information</h5>
						<div className="row">
							<div className="col-12 col-lg-6">
								<Form.Item
									name="tel"
									label="Home Tel"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Home Tel!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<Input
										placeholder="Home Tel"
									/>
								</Form.Item>
							</div>
							<div className="col-12 col-lg-6">
								<Form.Item
									name="phoneNumber"
									label="Mobile"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Mobile!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<Input
										placeholder="Mobile"
									/>
								</Form.Item>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-lg-6">
								<Form.Item
									name="work"
									label="Work"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Work!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<Input
										placeholder="Work"
									/>
								</Form.Item>
							</div>
							<div className="col-12 col-lg-6">
								<Form.Item
									name="email"
									label="Email"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Email!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<Input
										disabled
										placeholder="Email"
									/>
								</Form.Item>
							</div>
						</div>
					</div>
					<Divider size={5} padding={5} />

					<div
						style={{
						}}
					>
						<h5 className="mb-4">Politically exposed person</h5>
						<div>
							<Form.Item
								name="1"
								// rules={[
								// 	{
								// 		required: true,
								// 		message: 'Please input your Assets!',
								// 	},
								// ]}
								style={{
									flex: 1,
								}}
							>
								<div className="d-flex align-items-center">
									<strong className="align-self-start mr-3">1.</strong>
									<label htmlFor="#" className="mr-3 flex-1">
										Have you ever been a Head of State or Head of Government, a Senior Politician, a Senior Government
										Official, a Senior Judicial, Military or Law Enforcement Official, a Member of the Board of Central Bank
										or similar regulator, an Ambassador or a charge d/affaires, either local or foreign?
									</label>
									<Radio.Group
										style={{
											// width: 320,
										}}
									>
										<Radio value="Yes">Yes</Radio>
										<Radio value="No">No</Radio>
									</Radio.Group>
								</div>
							</Form.Item>
							<Form.Item
								name="1yes"
								label="If yes, please provide details"
								style={{
									flex: 1,
									marginLeft: 30,
									marginTop: -10,
								}}
							>
								<Input />
							</Form.Item>
						</div>
						<div>
							<Form.Item
								name="2"
								// rules={[
								// 	{
								// 		required: true,
								// 		message: 'Please input your Assets!',
								// 	},
								// ]}
								style={{
									flex: 1,
								}}
							>
								<div className="d-flex align-items-center">
									<strong className="align-self-start mr-3">2.</strong>
									<label htmlFor="#" className="mr-3 flex-1">
										Have you ever been a senior official of a major Political Party or a senior executive of a local or foreign
										Government owned commercial enterprise, either local or foreign?
									</label>
									<Radio.Group
										style={{
											// width: 320,
										}}
									>
										<Radio value="Yes">Yes</Radio>
										<Radio value="No">No</Radio>
									</Radio.Group>
								</div>
							</Form.Item>
							<Form.Item
								name="2yes"
								label="If yes, please provide details"
								style={{
									flex: 1,
									marginLeft: 30,
									marginTop: -10,
								}}
							>
								<Input />
							</Form.Item>
						</div>
						<div>
							<Form.Item
								name="3"
								// rules={[
								// 	{
								// 		required: true,
								// 		message: 'Please input your Assets!',
								// 	},
								// ]}
								style={{
									flex: 1,
								}}
							>
								<div className="d-flex align-items-center">
									<strong className="align-self-start mr-3">3.</strong>
									<label htmlFor="#" className="mr-3 flex-1">
										Are you an immediate family member (spouse, parent, sibling, child) or close personal or professional
										associate of anyone in the above categories (a – b)?
									</label>
									<Radio.Group
										style={{
											// width: 320,
										}}
									>
										<Radio value="Yes">Yes</Radio>
										<Radio value="No">No</Radio>
									</Radio.Group>
								</div>
							</Form.Item>
							<Form.Item
								name="3yes"
								label="If yes, please provide details"
								style={{
									flex: 1,
									marginLeft: 30,
									marginTop: -10,
								}}
							>
								<Input />
							</Form.Item>
						</div>
						<div>
							<Form.Item
								name="4"
								// rules={[
								// 	{
								// 		required: true,
								// 		message: 'Please input your Assets!',
								// 	},
								// ]}
								style={{
									flex: 1,
								}}
							>
								<div className="d-flex align-items-center">
									<strong className="align-self-start mr-3">4.</strong>
									<div htmlFor="#" className="mr-3 flex-1">
										Have you ever been entrusted with a prominent function by an international organization either local or
										foreign?
									</div>
									<Radio.Group
										style={{
											// width: 320,
										}}
									>
										<Radio value="Yes">Yes</Radio>
										<Radio value="No">No</Radio>
									</Radio.Group>
								</div>
							</Form.Item>
							<Form.Item
								name="4yes"
								label="If yes, please provide details"
								style={{
									flex: 1,
									marginLeft: 30,
									marginTop: -10,
								}}
							>
								<Input />
							</Form.Item>
						</div>
					</div>
					<Divider size={5} padding={5} />
					<div className="">
						<h5 className="mb-4">Employment information</h5>

						<Form.Item
							name="employmentStatus"
							label="Employment Status"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: 'Please input your Employment Status"!',
							// 	},
							// ]}
						>
							<Radio.Group>
								<Radio value="Salaried worker">Salaried worker</Radio>
								<Radio value="Retiree">Retiree</Radio>
								<Radio value="Unemployed">Unemployed</Radio>
								<Radio value="Self-employed">Self-employed</Radio>
								<Radio value="Student">Student</Radio>
							</Radio.Group>
						</Form.Item>
						<Form.Item
							name="occupation"
							label="Occupation"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: 'Please input your Occupation!',
							// 	},
							// ]}
							style={{
								flex: 1,
							}}
						>
							<Input
								placeholder="Occupation"
							/>
						</Form.Item>
						<Form.Item
							name="jobTitle"
							label="Job Title"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: 'Please input your Job Title!',
							// 	},
							// ]}
							style={{
								flex: 1,
							}}
						>
							<Input
								placeholder="Job Title"
							/>
						</Form.Item>
						<div className="row">
							<div className="col-12 col-lg-6">
								<Form.Item
									name="industry"
									label="Industry"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Industry!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<Input
										placeholder="Industry"
									/>
								</Form.Item>
							</div>
							<div className="col-12 col-lg-6">
								<Form.Item
									name="lengthOfService"
									label="Length of Service"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Length of Service!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<Input
										placeholder="Length of Service"
									/>
								</Form.Item>
							</div>
						</div>
						<Form.Item
							name="occupationType"
							label="Occupation Type"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: 'Please input your Occupation Type"!',
							// 	},
							// ]}
						>
							<Radio.Group>
								<Radio value="Professional">Professional</Radio>
								<Radio value="Supervisor">Supervisor</Radio>
								<Radio value="Senior executive">Senior executive</Radio>
								<Radio value="Skilled worker ">Skilled worker </Radio>
								<Radio value="Middle Management">Middle Management</Radio>
							</Radio.Group>
						</Form.Item>
						<Form.Item
							name="monthlyIncome"
							label="Monthly Income Range (from all sources)"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: 'Please input your Monthly Income!',
							// 	},
							// ]}
							style={{
								flex: 1,
							}}
						>
							<Input
								placeholder="Monthly Income"
							/>
						</Form.Item>
						<Form.Item
							name="employer"
							label="Employer"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: 'Please input your Employer!',
							// 	},
							// ]}
							style={{
								flex: 1,
							}}
						>
							<Input
								placeholder="Employer"
							/>
						</Form.Item>
						<Form.Item
							name="employerAddress"
							label="Employer’s Address"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: 'Please input your Employer’s Address!',
							// 	},
							// ]}
							style={{
								flex: 1,
							}}
						>
							<Input.TextArea
								placeholder="Employer’s Address"
							/>
						</Form.Item>
					</div>
					<Divider size={5} padding={5} />
					<div
						style={{
						}}
					>
						<h5 className="mb-4">Expected source of funds through accounts</h5>

						<Form.Item
							name="wealthSource"
							label="Source of Wealth (of your total assets)"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: 'Please input',
							// 	},
							// ]}
							style={{
								flex: 1,
							}}
						>
							<Checkbox.Group
								options={[
									{
										label: 'Employment',
										value: 'Employment',
									},
									{
										label: 'Dividend income',
										value: 'Dividend income',
									},
									{
										label: 'Business income',
										value: 'Business income',
									},
									{
										label: 'Inheritance / Gift',
										value: 'Inheritance / Gift',
									},
									{
										label: 'Sale of investment',
										value: 'Sale of investment',
									},
									{
										label: 'Rental',
										value: 'Rental',
									},
									{
										label: 'Other',
										value: 'Other',
									},

								]}
							/>
						</Form.Item>
						<Form.Item
							name="fundSource"
							label="Source of Funds (that will be used for your investment)"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: 'Please input',
							// 	},
							// ]}
							style={{
								flex: 1,
							}}
						>
							<Checkbox.Group
								options={[
									{
										label: 'Employment',
										value: 'Employment',
									},
									{
										label: 'Dividend income',
										value: 'Dividend income',
									},
									{
										label: 'Business income',
										value: 'Business income',
									},
									{
										label: 'Inheritance / Gift',
										value: 'Inheritance / Gift',
									},
									{
										label: 'Sale of investment',
										value: 'Sale of investment',
									},
									{
										label: 'Rental',
										value: 'Rental',
									},
									{
										label: 'Other',
										value: 'Other',
									},

								]}
							/>
						</Form.Item>
						{/* <div className="row">
							<div className="col-12 col-lg-6">
								<Form.Item
									name="loanPayments"
									label="Expected Monthly Transaction Volume (Loan Payments)"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Expected Monthly Transaction Volume (Loan Payments)!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<InputNumber
										style={{
											width: '100%',
										}}
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										addonAfter="SGD/month"
									/>
								</Form.Item>
							</div>
							<div className="col-12 col-lg-6">
								<Form.Item
									name="loanPaymentsTxt"
									label="."
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Expected Monthly Transaction Volume (Loan Payments)!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<InputNumber
										style={{
											width: '100%',
										}}
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										addonAfter="transactions/month"
									/>
								</Form.Item>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-lg-6">
								<Form.Item
									name="foreignExchange"
									label="Expected Monthly Transaction Volume (Foreign Exchange)"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Expected Monthly Transaction Volume (Loan Payments)!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<InputNumber
										style={{
											width: '100%',
										}}
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										addonAfter="SGD/month"
									/>
								</Form.Item>
							</div>
							<div className="col-12 col-lg-6">
								<Form.Item
									name="foreignExchangeTxt"
									label="."
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Expected Monthly Transaction Volume (Loan Payments)!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<InputNumber
										style={{
											width: '100%',
										}}
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										addonAfter="transactions/month"
									/>
								</Form.Item>
							</div>
						</div>
						<Form.Item
							name="totalTerm"
							label="Expected total term deposit balance"
							// rules={[
							// 	{
							// 		required: true,
							// 		message: 'Please input your Expected Total Term Deposit Balance!',
							// 	},
							// ]}
							style={{
								flex: 1,
							}}
						>
							<InputNumber
								style={{
									width: '100%',
								}}
								formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
								addonAfter="SGD"
							/>
						</Form.Item>
						<div className="row">
							<div className="col-12 col-lg-6">
								<Form.Item
									name="totalMonthlyTransactionVolume"
									label="Total monthly transaction volume"
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Expected Monthly Transaction Volume (Loan Payments)!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<InputNumber
										style={{
											width: '100%',
										}}
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										addonAfter="SGD/month"
									/>
								</Form.Item>
							</div>
							<div className="col-12 col-lg-6">
								<Form.Item
									name="totalMonthlyTransactionVolumeTxt"
									label="."
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input your Expected Monthly Transaction Volume (Loan Payments)!',
									// 	},
									// ]}
									style={{
										flex: 1,
									}}
								>
									<InputNumber
										style={{
											width: '100%',
										}}
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										addonAfter="transactions/month"
									/>
								</Form.Item>
							</div>
						</div> */}
					</div>

				</Form>
			</Card>
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
					Continue
				</Button>
			</div>
		</div>
	);
};

InputInfoScreen.propTypes = propTypes;

InputInfoScreen.defaultProps = defaultProps;

export default InputInfoScreen;
