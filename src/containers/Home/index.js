/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-19 19:14:01
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Link from 'next/link';
import { Progress, Empty, Button } from 'antd';
import { useSelector } from 'react-redux';

import { AiOutlineRight, AiOutlineDollar } from 'react-icons/ai';
import { RiExchangeDollarFill, RiExchangeDollarLine } from 'react-icons/ri';
import currency from 'src/utils/format-currency';

import Card from 'src/components/Card';
import Avatar from 'src/components/Avatar';
import GoalIcon from 'src/components/GoalIcon';

import dynamic from 'next/dynamic';

const ChartPerformance = dynamic(() => import('./ChartPerformance'), { ssr: false });
const ChartValue = dynamic(() => import('./ChartValue'), { ssr: false });

// import classes from './style.less';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Index = (props) => {
	// const { } = props;
	const portfolioList = useSelector(state => state.goals.filter(el => {
		return el.isCompleted;
	}));
	const auth = useSelector(state => state.auth);
	const deposits = useSelector(state => state.deposits);

	return (
		<div className="row">
			<div className="col-8 d-flex flex-column">
				<Card
					style={{
						background: 'rgb(28 169 105 / 21%)',
					}}
				>
					<h5>Portfolio setup is complete!</h5>
					<Progress percent={100} />
					<strong className="mt-3 d-block">You are all set!</strong>
					<p>If you have made a transfer, you’ll receive an email notification within 1-2 business days. There’s nothing you need to do right now. Foreign transfers may take longer.</p>
					<Link href="/deposits">
						<Button type="primary" danger>Deposit</Button>
					</Link>
				</Card>
				<Card
					title="Portfolios Performance"
				>
					<ChartPerformance />
				</Card>
				<Card
					title="Transaction History"
					className="flex-1"
				>
					<div className="d-flex pb-3 border-bottom">
						<div className="flex-2">
							<strong>Description</strong>
						</div>
						<div className="flex-2">
							<strong>Goal</strong>
						</div>
						<div className="flex-1">
							<strong>Date</strong>
						</div>
						<div className="flex-1 text-right">
							<strong>Amount</strong>
						</div>
					</div>
					<div className="d-flex py-3 border-bottom">
						<div className="flex-2">
							<AiOutlineDollar size={22} style={{ verticalAlign: 'middle', marginRight: 5 }} /> Top-up
						</div>
						<div className="flex-2">
							<GoalIcon type="house" size={22} style={{ verticalAlign: 'middle', marginRight: 5 }} /> Buy a Home
						</div>
						<div className="flex-1">
							October 29, 2022
						</div>
						<div className="flex-1 text-right text-success">
							100 SGD
						</div>
					</div>
					<div className="d-flex py-3 border-bottom">
						<div className="flex-2">
							<RiExchangeDollarFill size={22} style={{ verticalAlign: 'middle', marginRight: 5 }} /> Withdraw
						</div>
						<div className="flex-2">
							<GoalIcon type="house" size={22} style={{ verticalAlign: 'middle', marginRight: 5 }} /> Plan for Retirement
						</div>
						<div className="flex-1">
							October 27, 2022
						</div>
						<div className="flex-1 text-right text-danger">
							-200 SGD
						</div>
					</div>
					<div className="d-flex py-3 border-bottom">
						<div className="flex-2">
							<AiOutlineDollar size={22} style={{ verticalAlign: 'middle', marginRight: 5 }} /> Top-up
						</div>
						<div className="flex-2">
							<GoalIcon type="retirement" size={22} style={{ verticalAlign: 'middle', marginRight: 5 }} /> Plan for Retirement
						</div>
						<div className="flex-1">
							October 20, 2022
						</div>
						<div className="flex-1 text-right text-success">
							100 SGD
						</div>
					</div>
					<div className="text-center mt-3">
						<Link href="/transactions">
							View more
						</Link>
					</div>
				</Card>
			</div>
			<div className="col-4 pl-1 d-flex flex-column">
				<div
					className="text-center py-3 mb-2 flex-1"
					style={{
						display: 'inline-flex',
						flexDirection: 'column',
						justifyContent: 'space-evenly',
						alignContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							borderRadius: 100,
							border: '2px solid #1da96a',
							display: 'inline-block',
							padding: 5,
						}}
					>
						<Avatar
							size={100}
							src={auth.avatar || 'https://nhsscotlandevents.com/sites/default/files/default_images/person.jpeg'}
							fullName={auth.firstName + ' ' + auth.lastName}
						/>
					</div>
					<div>
						<h5 className="mb-0 mt-2">{auth.firstName + ' ' + auth.lastName}</h5>
						<div className="text-muted">{auth.email}</div>
					</div>
				</div>
				<Card>
					<div className="text-muted">
						Total Assets
					</div>
					<h3>6,322 SGD</h3>
					<div
						style={{
							margin: -22,
						}}
						className="mt-3"
					>
						<ChartValue />
					</div>
				</Card>
				<Card
					title="My Portfolios"
					action={<Link href="/portfolios/new"><Button size="small" type="primary">+ New Portfolio</Button></Link>}
				>
					{
						portfolioList.length === 0 ?
							<div className="py-4">
								<Empty
									image={Empty.PRESENTED_IMAGE_SIMPLE}
									description="Currently you do not have any portfolio with us."
								/>
							</div> :
							portfolioList.map((el, i) => {
								if (i >= 2) {
									return null;
								}
								return (
									<Link key={el.id} href={'/portfolios/portfolio-details?goalId=' + el.id}>
										<div className="d-flex align-items-center border-bottom py-3">
											<Progress width={50} type="circle" percent={0} />
											<div className="ml-2 flex-1 text-body">
												<strong>{el.label}</strong>
												<div className="text-muted fs-sm lines-2">{el.desc}</div>
											</div>
											<AiOutlineRight size={22} />
										</div>
									</Link>
								);
							})
					}
					{
						portfolioList.length > 2 &&
						<div className="text-center mt-3">
							<Link href="/portfolios">
								View more
							</Link>
						</div>
					}
				</Card>
				<Card
					title="Deposit Accounts"
				>
					{
						deposits.length === 0 ?
							<div className="py-4">
								<Empty
									image={Empty.PRESENTED_IMAGE_SIMPLE}
								/>
							</div> :
							deposits.map((el, i) => {
								if (i >= 2) {
									return null;
								}
								return (
									<div key={el.id} className="d-flex align-items-center border-bottom py-3">
										<RiExchangeDollarLine size={36} />
										<div className="flex-2 ml-3">
											<strong>{el.name}</strong>
											<div className="text-muted fs-sm">{currency.format(el.balance)}</div>
										</div>
										<AiOutlineRight size={22} />
									</div>
								);
							})
					}
					{
						deposits.length > 2 &&
						<div className="text-center mt-3">
							<Link href="/portfolios">
								View more
							</Link>
						</div>
					}
				</Card>
			</div>
		</div>
	);
};

Index.propTypes = propTypes;

Index.defaultProps = defaultProps;

export default Index;
