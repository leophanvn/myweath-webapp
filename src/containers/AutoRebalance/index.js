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
import { useSelector, useDispatch } from 'react-redux';

import currency from 'src/utils/format-currency';

import Link from 'next/link';

import { Input, Space, Switch, Pagination, Empty, Modal } from 'antd';
import { VerticalAlignTopOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { BsEye } from 'react-icons/bs';
import { RiExchangeDollarLine } from 'react-icons/ri';

import { update } from 'src/redux/actions/goals';

import PageTitle from 'src/components/PageTitle';
import Card from 'src/components/Card';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Portfolios = (props) => {
	// const { } = props;
	const dispatch = useDispatch();

	const goals = useSelector(state => state.goals);

	const handleChangeStatus = React.useCallback(async (goalId, v) => {
		Modal.confirm({
			title: 'Are you sure!',
			icon: <ExclamationCircleOutlined />,
			content: 'Some descriptions',
			onOk: async () => {
				try {
					await dispatch(await update({
						id: goalId,
						autoRebalance: v,
					}));
				} catch (error) {
					// Toast.fail({
					// 	content: error.message || error.toString,
					// });
				}
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	}, [dispatch]);

	return (
		<div className="">
			<PageTitle
				title="Auto-Rebalance"
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
					goals.length === 0 ?
						<div className="py-5">
							<Empty
								image={Empty.PRESENTED_IMAGE_SIMPLE}
								description="Currently you do not have any portfolio with us."
							/>
						</div> :
						goals.map((el, i) => {
							return (
								<Card key={el.id}>
									<div className="d-flex align-items-center">
										<div className="text-primary d-inline">
											<RiExchangeDollarLine size={36} />
										</div>
										<div className="flex-2 ml-3">
											<strong>{el.label}</strong>
											<div className="fs-sm lines-2">{el.desc}</div>
										</div>
										<Space className="ml-3">
											Turn off/on <Switch checked={el.autoRebalance} onChange={(v) => handleChangeStatus(el.id, v)} />
										</Space>
									</div>
								</Card>
							);
						})
				}
			</div>
			<div className="text-right mt-4">
				<Pagination defaultCurrent={1} total={goals.length} />
			</div>
		</div>
	);
};

Portfolios.propTypes = propTypes;

Portfolios.defaultProps = defaultProps;

export default Portfolios;
