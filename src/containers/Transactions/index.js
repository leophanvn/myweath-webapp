/* eslint-disable @next/next/no-html-link-for-pages */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 21:18:45
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { Button, Input, Space, Divider, Pagination, Empty } from 'antd';
import { EditOutlined, DeleteOutlined, VerticalAlignTopOutlined, LogoutOutlined } from '@ant-design/icons';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlineRight, AiOutlineDollar } from 'react-icons/ai';
import { RiExchangeDollarFill, RiExchangeDollarLine } from 'react-icons/ri';

import Card from 'src/components/Card';
import PageTitle from 'src/components/PageTitle';
import FQList from 'src/components/FQList';
import GoalIcon from 'src/components/GoalIcon';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Transactions = (props) => {
	// const { } = props;

	return (
		<div className="row">
			<div className="col-9">
				<PageTitle
					title="Transactions"
					action={
						<Space>
							<Input className="mr-3 flex-1" placeholder="Search..." />
						</Space>
					}
				/>
				<div
					className="my-3"
				>
					{/* <div className="py-4">
						<Empty
							image={Empty.PRESENTED_IMAGE_SIMPLE}
							description="No data to show"
						/>
					</div> */}
					<Card>
						<div className="d-flex align-items-center">
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
					</Card>
					<Card>
						<div className="d-flex align-items-center">
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
					</Card>
					<Card>
						<div className="d-flex align-items-center">
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
					</Card>
				</div>
				<div className="text-right mt-4">
					<Pagination defaultCurrent={1} total={0} />
				</div>
			</div>
			<div className="col-3 pl-2">
				<FQList
					data={[
						{
							question: 'How is my portfolio personalised for me?',
							answer: `During the account opening process, we ask questions about your preferences to gain an understanding of your current financial situation. <br /> <br />

							In the financial assessment that customers are required to complete before opening an account, we ask about risk preferences, goals, current financial situations, and investment experience.
							We use this information to make recommendations for you. <br /> <br />

							For example, based on the information you provided when filling out your profile, our algorithm may cap your risk limit.<br /> <br />`,
						},
						{
							question: 'Can I change my investment plan later?',
							answer: `It depends on your risk level.<br />
							For Web App users:<br />
							Simply log in to your Account > "Portfolio" > Click “View” > click on "Edit portfolio".<br />
							Make changes to the portfolio as you wish by moving the slider and finally, click on "Confirm" to update the portfolio.<br />

							For Mobile App users: <br />

							Simply log in to your Account, click "Manage my Investment" > select Portfolio you want to edit and check<br />
							Make changes to the portfolio as you wish, click on "Confirm" to update the portfolio.<br />
							`,
						},
						{
							question: 'How did MyWealth choose the funds that are in my portfolio?							',
							answer: 'Your portfolios will only have the best ETFs. The curated ETFs are the largest, most liquid, most tradable, and most cost-effective ETFs with the lowest tracking error to the index and a sufficiently long track record.							',
						},
						{
							question: 'Where is my personal information stored?							',
							answer: 'Your personal information is securely stored in our databases, in accordance with the PDPA and other applicable data protection and privacy laws. Where the business is required to share such information in the process of providing our services to you, care is given to ensure that the same duty of confidence and security is applied.							',
						},
					]}
				/>
			</div>
		</div>
	);
};

Transactions.propTypes = propTypes;

Transactions.defaultProps = defaultProps;

export default Transactions;
