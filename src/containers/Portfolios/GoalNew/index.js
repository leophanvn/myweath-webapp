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
import { Button } from 'antd';
import { AiOutlineRight } from 'react-icons/ai';
import Router, { useRouter } from 'next/router';

import GoalIcon from 'src/components/GoalIcon';
import PageTitle from 'src/components/PageTitle';

import NewGoalInput from './NewGoalInput';

const propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

const defaultProps = {
	route: {},
};

const data = [
	{
		value: 'retirement',
		label: 'Plan for Retirement',
	},
	{
		value: 'education',
		label: 'Children’s Education',
	},
	{
		value: 'house',
		label: 'Buy a home',
	},
	{
		value: 'savings',
		label: 'Building Wealth & Savings',
	},
	{
		value: 'createOwn',
		label: 'Create my Own',
	},
];

const GoalDetailsScreen = (props) => {
	const router = useRouter();
	const { goalId } = router.query || {};

	const [goalData, setGoalData] = React.useState({});

	if (goalData?.type) {
		return (
			<NewGoalInput
				editId={goalId}
				data={goalData}
				onCancel={() => setGoalData({})}
			/>
		);
	}

	return (
		<div className="">
			<PageTitle
				title="Goal Setting"
				subtitle="Tell us your financial objectives you want to achieve.  This will help us recommend an investment plan and strategy to increase the chance that you reach your goals."
			/>
			<div
				style={{
					marginTop: 30,
				}}
			>
				{
					data.map((el) => {
						return (
							<div
								onClick={() => setGoalData({ type: el.value, label: el.label })}
								style={{
									marginTop: 20,
									cursor: 'pointer',
								}}
								key={el.value}
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
										<GoalIcon type={el.value} size={34} />
									</div>
									<strong
										style={{
											flex: 1,
											// divAlign: 'center',
										}}
									>
										{el.label}
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
						);
					})
				}
			</div>
		</div>
	);
};

GoalDetailsScreen.propTypes = propTypes;

GoalDetailsScreen.defaultProps = defaultProps;

export default GoalDetailsScreen;
