/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-10-25 07:33:55
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { AiOutlineUser, AiOutlineRight, AiOutlineGift } from 'react-icons/ai';
import { RiShutDownLine } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { BiHelpCircle } from 'react-icons/bi';
import { MdOutlineTrackChanges, MdOutlineMotionPhotosAuto } from 'react-icons/md';

import Link from 'next/link';

import Router from 'next/router';

import { Menu, Dropdown, Modal } from 'antd';

import { actionLogout } from 'src/redux/actions/auth';

import {
	ExclamationCircleOutlined,
} from '@ant-design/icons';

import Avatar from 'src/components/Avatar';
import Card from 'src/components/Card';
import Profile from 'src/containers/Profile';

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {
	children: null,
};

const Settings = (props) => {
	const { children } = props;
	const auth = useSelector(state => state.auth);
	const portfolioList = useSelector(state => state.goals);

	const dispatch = useDispatch();

	const handleLogout = React.useCallback(async () => {
		Modal.confirm({
			title: 'Are you sure?',
			icon: <ExclamationCircleOutlined />,
			// content: 'Are you sure?',
			onOk: async () => {
				await dispatch(await actionLogout(() => {
					Router.push('/login');
				}));
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	}, [dispatch]);

	return (
		<div className="row">
			<div className="col-4 border-right px-4">
				<div className="d-flex align-items-end mb-4">
					<Avatar
						size={100}
						style={{
							borderRadius: 8,
						}}
						src={auth.avatar || 'https://nhsscotlandevents.com/sites/default/files/default_images/person.jpeg'}
						fullName={auth.firstName + ' ' + auth.lastName}
					/>
					<div className="ml-3 flex-1">
						<h1 className="mb-0 ">{auth.firstName + ' ' + auth.lastName}</h1>
						<div className=" mb-2">{auth.email}</div>
					</div>
					{/* <a>
					<AiFillEdit className=" mr-4 mb-2" size={22} />
				</a> */}
					<a onClick={handleLogout}>
						<RiShutDownLine className="text-danger mb-2" size={22} />
					</a>
				</div>

				<Card>
					<Link href="/profile">
						<div className="d-flex align-items-center cursor-pointer">
							<AiOutlineUser size={22} />
							<div className="flex-1 mx-3">
								<strong className="">Profile Information</strong>
							</div>
							<AiOutlineRight size={22} />
						</div>
					</Link>
				</Card>
				<Card>
					<div className="d-flex align-items-center cursor-pointer">
						<IoIosLink size={22} />
						<div className="flex-1 mx-3">
							<strong className="">Refer a Friend</strong>
						</div>
						<AiOutlineRight size={22} />
					</div>
				</Card>
				<Card>
					<div className="d-flex align-items-center cursor-pointer">
						<AiOutlineGift size={22} />
						<div className="flex-1 mx-3">
							<strong className="">My Rewards</strong>
						</div>
						<AiOutlineRight size={22} />
					</div>
				</Card>
				<Card>
					<div className="d-flex align-items-center cursor-pointer">
						<MdOutlineTrackChanges size={22} />
						<div className="flex-1 mx-3">
							<strong className="">Goal Tracking</strong>
						</div>
						<AiOutlineRight size={22} />
					</div>
				</Card>
				<Card>
					<Link href="/auto-rebalance">
						<div className="d-flex align-items-center cursor-pointer">
							<MdOutlineMotionPhotosAuto size={22} />
							<div className="flex-1 mx-3">
								<strong className="">Auto-Rebalance</strong>
							</div>
							<AiOutlineRight size={22} />
						</div>
					</Link>
				</Card>
				<Card>
					<div className="d-flex align-items-center cursor-pointer">
						<HiOutlineDocumentDuplicate size={22} />
						<div className="flex-1 mx-3">
							<strong className="">Document</strong>
						</div>
						<AiOutlineRight size={22} />
					</div>
				</Card>
				<Card>
					<div className="d-flex align-items-center cursor-pointer">
						<BiHelpCircle size={22} />
						<div className="flex-1 mx-3">
							<strong className="">Get Help</strong>
						</div>
						<AiOutlineRight size={22} />
					</div>
				</Card>
			</div>
			<div className="col-8">
				{children || <Profile />}
			</div>
		</div>
	);
};

Settings.propTypes = propTypes;

Settings.defaultProps = defaultProps;

export default Settings;
