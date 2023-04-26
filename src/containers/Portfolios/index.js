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
import { useSelector } from 'react-redux';

import Link from 'next/link';

import { Button, Input, Space, Divider, Pagination, Progress, Empty, Tag, Collapse } from 'antd';
import { DeleteOutlined, VerticalAlignTopOutlined, LogoutOutlined } from '@ant-design/icons';
import { BsEye } from 'react-icons/bs';
import { VscDebugContinueSmall } from 'react-icons/vsc';

import GoalIcon from 'src/components/GoalIcon';
import Card from 'src/components/Card';
import FQList from 'src/components/FQList';
import PageTitle from 'src/components/PageTitle';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Portfolios = (props) => {
	// const { } = props;
	const data = useSelector(state => state.goals);

	return (
		<div className="row">
			<div className="col-9">
				<PageTitle
					title="Portfolios"
					action={
						<Space>
							<Input className="mr-3 flex-1" placeholder="Search..." />
							<Link href="/portfolios/new">
								<Button type="primary">Setup New Portfolio</Button>
							</Link>
						</Space>
					}
				/>
				<div
					className="my-3"
				>
					{
						data.length === 0 ?
							<div className="py-5">
								<Empty
									image={Empty.PRESENTED_IMAGE_SIMPLE}
									description="Currently you do not have any portfolio with us."
								/>
							</div> :
							data.map((el, i) => {
								return (
									<Card key={el.id}>
										<div key={el.id} className="d-flex align-items-center">
											<div className="text-primary">
												<GoalIcon type={el.type} size={36} />
											</div>
											<div className="flex-2 ml-3 mr-3">
												<strong>{el.label}</strong>
												<div className="lines-2 fs-sm">{el.desc}</div>
											</div>
											{
												el.isCompleted ?
													<Progress width={40} type="circle" percent={0} /> :
													<Tag color="error">Incomplete</Tag>
											}
											{
												el.isCompleted ?
													<Space className="ml-4">
														<Link href={'/portfolios/portfolio-details?goalId=' + el.id}>
															<div className="d-flex fs-sm line-height-1"><BsEye size={12} className="mr-2" /> View</div>
														</Link>
														<Divider type="vertical" />
														<a href="#" className="d-flex fs-sm line-height-1"><VerticalAlignTopOutlined size={12} className="mr-2" /> Top-up</a>
														<Divider type="vertical" />
														<a href="#" className="d-flex fs-sm line-height-1"><LogoutOutlined size={12} className="mr-2" /> Withdraw</a>
														<Divider type="vertical" />
														<a href="#" className="d-flex fs-sm line-height-1 text-danger"><DeleteOutlined size={12} className="mr-2" /> Remove</a>
													</Space> :
													<Space className="ml-4">
														<Link href={'/portfolios/new?goalId=' + el.id}>
															<div className="d-flex fs-sm line-height-1"><VscDebugContinueSmall size={12} className="mr-2" /> Continue</div>
														</Link>
													</Space>
											}
										</div>
									</Card>
								);
							})
					}
				</div>
				<div className="text-right mt-4">
					<Pagination defaultCurrent={1} total={data.length} />
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

Portfolios.propTypes = propTypes;

Portfolios.defaultProps = defaultProps;

export default Portfolios;
