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

import Card from 'src/components/Card';
import PageTitle from 'src/components/PageTitle';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Portfolios = (props) => {
	// const { } = props;

	return (
		<div className="">
			<PageTitle
				title="Bank Accounts"
				action={
					<Space>
						<Input className="mr-3 flex-1" placeholder="Search..." />
					</Space>
				}
			/>
			<div
				className="my-3"
			>
				<div className="py-4">
					<Empty
						image={Empty.PRESENTED_IMAGE_SIMPLE}
						description="No data to show"
					/>
				</div>
				{/* <div className="d-flex align-items-center p-3 border-bottom">
					<BsAlarm
						style={{
							fontSize: 35,
							marginRight: 10,
							verticalAlign: 'middle',
						}}
					/>
					<div className="flex-1 ml-3">
						<strong>Alert Name</strong>
						<div>This is short description</div>
					</div>
					<Space>
						<a href="#" className="d-flex line-height-1"><EditOutlined size={12} className="mr-2" /> Edit</a>
						<Divider type="vertical" />
						<a href="#" className="d-flex line-height-1 text-danger"><DeleteOutlined size={12} className="mr-2" /> Remove</a>
					</Space>
				</div>
				<div className="d-flex align-items-center p-3 border-bottom">
					<BsAlarm
						style={{
							fontSize: 35,
							marginRight: 10,
							verticalAlign: 'middle',
						}}
					/>
					<div className="flex-1 ml-3">
						<strong>Alert Name</strong>
						<div>This is short description</div>
					</div>
					<Space>
						<a href="#" className="d-flex line-height-1"><EditOutlined size={12} className="mr-2" /> Edit</a>
						<Divider type="vertical" />
						<a href="#" className="d-flex line-height-1 text-danger"><DeleteOutlined size={12} className="mr-2" /> Remove</a>
					</Space>
				</div>
				<div className="d-flex align-items-center p-3 border-bottom">
					<BsAlarm
						style={{
							fontSize: 35,
							marginRight: 10,
							verticalAlign: 'middle',
						}}
					/>
					<div className="flex-1 ml-3">
						<strong>Alert Name</strong>
						<div>This is short description</div>
					</div>
					<Space>
						<a href="#" className="d-flex line-height-1"><EditOutlined size={12} className="mr-2" /> Edit</a>
						<Divider type="vertical" />
						<a href="#" className="d-flex line-height-1 text-danger"><DeleteOutlined size={12} className="mr-2" /> Remove</a>
					</Space>
				</div>
				<div className="d-flex align-items-center p-3 border-bottom">
					<BsAlarm
						style={{
							fontSize: 35,
							marginRight: 10,
							verticalAlign: 'middle',
						}}
					/>
					<div className="flex-1 ml-3">
						<strong>Alert Name</strong>
						<div>This is short description</div>
					</div>
					<Space>
						<a href="#" className="d-flex line-height-1"><EditOutlined size={12} className="mr-2" /> Edit</a>
						<Divider type="vertical" />
						<a href="#" className="d-flex line-height-1 text-danger"><DeleteOutlined size={12} className="mr-2" /> Remove</a>
					</Space>
				</div> */}
			</div>
			<div className="text-right mt-4">
				<Pagination defaultCurrent={1} total={0} />
			</div>
		</div>
	);
};

Portfolios.propTypes = propTypes;

Portfolios.defaultProps = defaultProps;

export default Portfolios;
