/* eslint-disable no-useless-concat */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-10-24 08:30:54
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';

import { Affix } from 'antd';

import Card from 'src/components/Card';
import PageTitle from 'src/components/PageTitle';
import Loading from 'src/components/Loading';

import Item from './Item';

const propTypes = {
	children: PropTypes.any.isRequired,
};

const defaultProps = {
	children: null,
};

const NewPortfolio = (props) => {
	const { children } = props;
	const router = useRouter();
	const { goalId } = router.query || {};

	const goalData = useSelector(state => state.goals?.find(el => {
		return el.id === goalId;
	})) || {};

	const auth = useSelector(state => state.auth);

	const handleCheck = React.useCallback(() => {
		if (!goalId && !goalData.id) {
			Router.push('/portfolios/new-goal' + (goalId ? '?goalId=' + goalId : ''));
		} else if (!goalData.riskProfile || !auth.quizAnswers || Object.keys(auth.quizAnswers).length === 0) {
			if (!auth.riskProfile) {
				Router.push('/portfolios/quiz' + (goalId ? '?goalId=' + goalId : ''));
			} else {
				Router.push('/portfolios/risk-profile' + (goalId ? '?goalId=' + goalId : ''));
			}
		} else if (!goalData.recommendedPortfolio) {
			Router.push('/portfolios/portfolio-construction' + (goalId ? '?goalId=' + goalId : ''));
		} else if (!goalData.builtPortfolio) {
			Router.push('/portfolios/portfolio-review' + (goalId ? '?goalId=' + goalId : ''));
		} else if (!auth.passport) {
			Router.push('/portfolios/profile-input' + (goalId ? '?goalId=' + goalId : ''));
		} else if (!goalData.firstPayment) {
			Router.push('/portfolios/deposit' + (goalId ? '?goalId=' + goalId : ''));
		} else {
			Router.push('/portfolios' + (goalId ? '?goalId=' + goalId : ''));
		}
	}, [goalId, goalData.id, goalData.riskProfile, goalData.recommendedPortfolio, goalData.builtPortfolio, goalData.firstPayment, auth.quizAnswers, auth.passport, auth.riskProfile]);

	React.useEffect(() => {
		if (router.pathname === '/portfolios/new') {
			setTimeout(() => {
				handleCheck();
			}, 1000);
		}
	}, [handleCheck, router.pathname]);

	return (
		<div className="">
			<div className="row">
				<div className="col-4 border-right px-4">
					<Affix offsetTop={86}>
						<PageTitle
							title="Start new portfolio"
							subtitle="Complete the following steps in the sequence indicated."
						/>
						<div className="mt-4">
							<Item
								first
								done={goalId}
								// active={!goalId}
								title="Set up your financial goal"
								subtitle={goalData.label}
								onClick={() => Router.push('/portfolios/new-goal' + (goalId ? '?goalId=' + goalId : ''))}
								active={router.pathname === '/portfolios/new-goal'}
							/>
							<Item
								done={goalId && !(!goalData.riskProfile || !auth.quizAnswers || Object.keys(auth.quizAnswers).length === 0)}
								// active={goalId && (!goalData.riskProfile || !auth.quizAnswers || Object.keys(auth.quizAnswers).length === 0)}
								title="Risk profiling"
								subtitle={
									goalId && goalData.riskProfile ?
										<div
											style={{
												fontSize: 12,
												textTransform: 'capitalize',
											}}
											type="note"
											color="important"
										>
											{goalData.riskProfile}
										</div> :
										null
								}
								onClick={() => Router.push((!auth.riskProfile ? '/portfolios/quiz' : '/portfolios/risk-profile') + (goalId ? '?goalId=' + goalId : ''))}
								active={router.pathname === '/portfolios/quiz' || router.pathname === '/portfolios/risk-profile'}
							/>
							<Item
								done={!!goalData.recommendedPortfolio}
								// active={goalId && !(!goalData.riskProfile || !auth.quizAnswers || Object.keys(auth.quizAnswers).length === 0) && !goalData.recommendedPortfolio}
								subtitle={goalData.recommendedPortfolio}
								title="Portfolio construction"
								onClick={() => Router.push((!goalData.recommendedPortfolio ? '/portfolios/portfolio-construction' : '/portfolios/portfolio-recommended') + (goalId ? '?goalId=' + goalId : ''))}
								active={router.pathname === '/portfolios/portfolio-construction' || router.pathname === '/portfolios/portfolio-recommended'}
							/>
							<Item
								done={goalData.builtPortfolio}
								// active={goalId && !(!goalData.riskProfile || !auth.quizAnswers || Object.keys(auth.quizAnswers).length === 0) && !goalData.builtPortfolio && goalData.recommendedPortfolio}
								title="Review your portfolio"
								onClick={() => Router.push('/portfolios/portfolio-review' + (goalId ? '?goalId=' + goalId : ''))}
								active={router.pathname === '/portfolios/portfolio-review' || router.pathname === '/portfolios/portfolio-summary'}
							/>
							{
								!auth.passport ?
									<Item
										done={auth.passport}
										// active={goalId && !(!goalData.riskProfile || !auth.quizAnswers || Object.keys(auth.quizAnswers).length === 0) && goalData.builtPortfolio && goalData.recommendedPortfolio && !auth.passport}
										title="Set up your account"
										onClick={() => Router.push('/portfolios/profile-input' + (goalId ? '?goalId=' + goalId : ''))}
										active={router.pathname === '/portfolios/profile-input'}
									/> :
									null
							}
							<Item
								done={goalData.firstPayment}
								// active={goalId && !(!goalData.riskProfile || !auth.quizAnswers || Object.keys(auth.quizAnswers).length === 0) && goalData.builtPortfolio && goalData.recommendedPortfolio && auth.passport && !goalData.firstPayment}
								onClick={() => Router.push('/portfolios/deposit' + (goalId ? '?goalId=' + goalId : ''))}
								active={router.pathname === '/portfolios/deposit'}
								title="Deposit funds to start new portfolio"
							/>
						</div>
						{/* <div className="text-center">
							<Button type="primary" onClick={handleCheck} >Continue</Button>
						</div> */}
					</Affix>
				</div>
				<div className="col-8 px-4">
					{children || <Loading />}
				</div>
			</div>
		</div>
	);
};

NewPortfolio.propTypes = propTypes;

NewPortfolio.defaultProps = defaultProps;

export default NewPortfolio;
