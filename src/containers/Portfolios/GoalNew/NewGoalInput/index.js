/* eslint-disable no-useless-concat */
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
import Router, { useRouter } from 'next/router';

import { Message } from 'antd';
import { useDispatch } from 'react-redux';

import { create, update } from 'src/redux/actions/goals';
import { actionUpdateProfile } from 'src/redux/actions/auth';

import PageTitle from 'src/components/PageTitle';

import BuyAHome from './BuyAHome';
import Retirement from './Retirement';
import Savings from './Savings';
import Education from './Education';
import CreateOwn from './CreateOwn';

const propTypes = {
	editId: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
	onCancel: PropTypes.func,
};

const defaultProps = {
	editId: null,
	data: {},
	onCancel: f => f,
};

const NewGoalInputScreen = (props) => {
	const { editId, data, onCancel } = props;

	const [loading, setLoading] = React.useState(false);

	const dispatch = useDispatch();

	const handleSubmitFrom = React.useCallback(async (values) => {
		// setLoading(true);
		// navigation.navigate('Forecast', { data: { ...data, ...values } });
		try {
			setLoading(true);
			const goalId = editId || (+new Date() + '');

			if (!editId) {
				await dispatch(await create({
					...values,
					id: goalId,
				}));
			} else {
				await dispatch(await update({
					...values,
					id: goalId,
					riskProfile: '',
					recommendedPortfolio: '',
					portfolioData: {},
					builtPortfolio: false,
				}));
			}
			await dispatch(await actionUpdateProfile({
				settingGoal: true,
				firstGoalType: data.type,
				firstGoalName: data.label,
				firstGoalId: goalId,
			}));
			Router.push('/portfolios/new' + (goalId ? '?goalId=' + goalId : ''));
		} catch (error) {
			Message.error(error.message || error.toString);
		} finally {
			setLoading(false);
		}
	}, [data.label, data.type, dispatch, editId]);

	const content = React.useMemo(() => {
		if (data.type === 'house') {
			return (
				<BuyAHome
					data={data}
					onSubmit={handleSubmitFrom}
					onCancel={onCancel}
					loading={loading}
				/>
			);
		}
		if (data.type === 'retirement') {
			return (
				<Retirement
					data={data}
					onSubmit={handleSubmitFrom}
					onCancel={onCancel}
					loading={loading}
				/>
			);
		}
		if (data.type === 'education') {
			return (
				<Education
					data={data}
					onSubmit={handleSubmitFrom}
					onCancel={onCancel}
					loading={loading}
				/>
			);
		}
		if (data.type === 'savings') {
			return (
				<Savings
					data={data}
					onSubmit={handleSubmitFrom}
					onCancel={onCancel}
					loading={loading}
				/>
			);
		}
		if (data.type === 'createOwn') {
			return (
				<CreateOwn
					data={data}
					onSubmit={handleSubmitFrom}
					onCancel={onCancel}
					loading={loading}
				/>
			);
		}
		return null;
	}, [data, handleSubmitFrom, loading, onCancel]);

	return (
		<div className="">
			<PageTitle
				title="Goal Setting"
				subtitle="Tell us your financial objectives you want to achieve.  This will help us recommend an investment plan and strategy to increase the chance that you reach your goals."
			/>
			<div className="mt-4">
				{content}
			</div>
		</div>
	);
};

NewGoalInputScreen.propTypes = propTypes;

NewGoalInputScreen.defaultProps = defaultProps;

export default NewGoalInputScreen;
