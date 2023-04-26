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
import currency from 'src/utils/format-currency';

import Link from 'next/link';

import { Input, Space, Divider, Pagination, Empty } from 'antd';
import { VerticalAlignTopOutlined, LogoutOutlined } from '@ant-design/icons';
import { BsEye } from 'react-icons/bs';
import { RiExchangeDollarLine } from 'react-icons/ri';

import Card from 'src/components/Card';
import PageTitle from 'src/components/PageTitle';
import FQList from 'src/components/FQList';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Portfolios = (props) => {
	// const { } = props;
	const data = useSelector(state => state.deposits);

	return (
		<div className="row">
			<div className="col-9">
				<PageTitle
					title="Deposits"
					action={
						<Space>
							<Input className="mr-3 flex-1" placeholder="Search..." />
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
										<div className="d-flex align-items-center">
											<div className="text-primary">
												<RiExchangeDollarLine size={36} />
											</div>
											<div className="flex-2 ml-3">
												<strong>{el.name}</strong>
												<div className="lines-2 fs-sm">{currency.format(el.balance)}</div>
											</div>
											<Space className="ml-3">
												<a href="#" className="d-flex fs-sm line-height-1"><BsEye size={12} className="mr-2" /> Transactions</a>
												<Divider type="vertical" />
												<Link href={'/deposits/top-up?accountId=' + el.id} className="d-flex fs-sm line-height-1">
													<VerticalAlignTopOutlined size={12} className="mr-2" /> Top-up
												</Link>
												<Divider type="vertical" />
												<a href="#" className="d-flex fs-sm line-height-1"><LogoutOutlined size={12} className="mr-2" /> Withdraw</a>
											</Space>
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
				<Card>
					<h6>New portfolio? New deposit plan</h6>
					<p className="mb-3 fs-sm">This way, we can split up your money exactly the way you want</p>

					<div className="fs-sm">
						<strong className="fs-sm">1. Update your plan</strong>
						<p className="fs-sm">Want to send a lump sum to a specific portfolio? First, update your deposit plan. Want to change your monthly standing instruction? First, update your deposit plan.</p>

						<strong className="fs-sm">2 Include your reference code</strong>
						<p className="fs-sm">We receive thousands of deposits a day, and your reference code tells us that your money belongs to you. Our system refers to your deposit plan to send your money to the right portfolio.</p>

						<strong className="fs-sm">3 Transfer the exact amount</strong>
						<p className="fs-sm">It makes life easier for you and for us.</p>
					</div>
				</Card>

			</div>
		</div>
	);
};

Portfolios.propTypes = propTypes;

Portfolios.defaultProps = defaultProps;

export default Portfolios;
