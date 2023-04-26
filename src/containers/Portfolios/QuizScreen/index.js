/* eslint-disable no-unused-expressions */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-27 14:40:43
*------------------------------------------------------- */

import React, { useCallback, useState } from 'react';
// import PropTypes from 'prop-types';
// import * as WebBrowser from 'expo-web-browser';
import useCounter from 'react-use/lib/useCounter';
import { useDispatch } from 'react-redux';
import { Message, Button } from 'antd';
import isEqual from 'lodash/isEqual';
import Router, { useRouter } from 'next/router';

import { actionUpdateProfile } from 'src/redux/actions/auth';
import { update } from 'src/redux/actions/goals';

import Start from './Start';
import Question from './Question';
import data, { MAPPING } from './data';

const propTypes = {
	// navigation: PropTypes.object.isRequired,
	// route: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const QuizScreen = (props) => {
	const router = useRouter();
	const { goalId } = router.query || {};

	// const goalData = useSelector(state => state.goals?.find(el => {
	// 	return el.id === goalId;
	// })) || {};

	const [answers, setAnswers] = useState({});
	const [started, setStarted] = useState(false);
	const [index, { inc, dec, set }] = useCounter(0, data.length - 1, 0);

	const dispatch = useDispatch();

	const handleSubmitFrom = useCallback(async () => {
		const scores = Object.values(answers).reduce((preVal, el) => {
			const s = el?.split('--')?.filter((e) => !!e);
			const t = s.reduce((p, e) => {
				return p + (e * 1);
			}, 0);

			return preVal + t;
		}, 0);

		const risk = MAPPING.find(el => {
			return scores >= el.rules[0] && scores <= el.rules[1];
		}) || {};

		const riskProfile = risk.value || 'conservative';

		try {
			await dispatch(await actionUpdateProfile({
				quizAnswers: answers,
				riskProfile: riskProfile.trim(),
			}));

			await dispatch(await update({
				id: goalId,
				riskProfile: riskProfile.trim(),
			}));

			Router.push('/portfolios/risk-profile' + (goalId ? '?goalId=' + goalId : ''));
		} catch (error) {
			Message.error(error.message || error.toString);
		}
	}, [answers, dispatch, goalId]);

	const handleAnswer = React.useCallback((id, val, el) => {
		if (id && val) {
			setAnswers((ol) => {
				return {
					...ol,
					[id]: val,
				};
			});

			if (el.type === 'group') {
				if (el.answer?.length === val.split('--').filter(e => !!e).length) {
					setStarted(false);
				}
				return;
			}
			setStarted(false);
			// inc();
		}
	}, []);

	return (
		<div
			// loading={loading}
			// headerShown={false}
			style={{
				// padding: 0,
			}}
			// fixedTop={
			// 	!started ?
			// 		<Touchable
			// 			onClick={() => navigation.goBack()}
			// 			style={{
			// 				paddingLeft: 10,
			// 			}}
			// 		>
			// 			<div
			// 				style={{
			// 					lineHeight: 36,
			// 					paddingBottom: 10,
			// 				}}
			// 			>
			// 				<FontAwesome name="angle-left" size={36} />
			// 			</div>
			// 		</Touchable> :
			// 		null
			// }
			className=""
		>
			{
				started ?
					<Question
						data={data[index]}
						index={index}
						onChange={handleAnswer}
						value={answers[data[index]?.id]}
					/> :
					<Start
						onSelect={(i) => {
							set(i);
							setStarted(true);
						}}
						onChange={handleAnswer}
						answers={answers}
					/>
			}
			{
				started ?
					<div
						style={{
							lineHeight: 40,
							position: 'absolute',
							right: -10,
							marginTop: 5,
						}}
						onClick={() => setStarted(false)}
					>
						{/* <Ionicons name="close-outline" size={32} /> */}
					</div> :
					null
			}
			<div
				className="text-right mt-3 mb-4"
			>

				{
					!started ?
						<Button
							// onClick={() => {
							// 	navigation.reset({
							// 		index: 0,
							// 		routes: [{ name: 'RiskProfile' }],
							// 	});
							// }}
							onClick={handleSubmitFrom}
							// loading={loading}
							type="primary"
							disabled={Object.keys(answers).length < data.length}
						>
							Continue
						</Button> :
						<div
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
							}}
						>
							<Button
								type="ghost"
								style={{
									flex: 1,
									marginRight: 10,
								}}
								onClick={() => dec()}
								// size="small"
								disabled={index <= 0}
							>
								Previous
							</Button>
							<Button
								type="ghost"
								style={{
									flex: 1,
									marginLeft: 10,
								}}
								// size="small"
								onClick={() => inc()}
								disabled={index >= data.length - 1}
							>
								Next
							</Button>
						</div>
				}
			</div>
		</div>
	);
};

QuizScreen.propTypes = propTypes;

QuizScreen.defaultProps = defaultProps;

export default QuizScreen;
