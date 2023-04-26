/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 12:05:52
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@zellosoft/antd-react-native/lib/style';
import { AiOutlineRight } from 'react-icons/ai';
import { RiUserSettingsFill } from 'react-icons/ri';
import { MdAppSettingsAlt } from 'react-icons/md';
import Router, { useRouter } from 'next/router';

import PageTitle from 'src/components/PageTitle';
import Card from 'src/components/Card';

import ModalInput from './ModalInput';

const propTypes = {
	// navigation: PropTypes.object.isRequired,
};

const defaultProps = {
	// route: {},
};

const PortfolioSelectionMode = (props) => {
	const router = useRouter();
	const { goalId } = router.query || {};
	// const theme = useTheme();

	return (
		<div className="">
			<PageTitle
				title="Portfolio Construction"
				subtitle="My preferred approach in portfolio construction."
			/>
			<div className="mt-4">
				<ModalInput>
					<Card>
						<div
							style={{
								flexDirection: 'row',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<div
								style={{
									width: 40,
									verticalAlign: 'middle',
									marginRight: 15,
									textAlign: 'center',
								}}
								className="text-primary"
							>
								<MdAppSettingsAlt name="cellphone-cog" size={30} />
							</div>
							<div
								style={{
									flex: 1,
									// textAlign: 'center',
								}}
							>
								<strong>Fully myWealth.ai guided</strong>
							</div>
							<div
								style={{
									marginRight: -5,
									marginLeft: 10,
								}}
							>
								<AiOutlineRight name="right" size={20} />
							</div>
						</div>
					</Card>
				</ModalInput>
				<Card
					style={{
						opacity: 0.6,
					}}
				>
					<div
						style={{
							flexDirection: 'row',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								width: 40,
								verticalAlign: 'middle',
								marginRight: 15,
								textAlign: 'center',
							}}
							className="text-primary"
						>
							<RiUserSettingsFill size={26} />
						</div>
						<div
							style={{
								flex: 1,
							}}
						>
							<strong>Combo of myWealth.ai guided and my own selections (50-50?)</strong>
						</div>
						<div
							style={{
								marginLeft: 10,
								marginRight: -5,
							}}
						>
							<AiOutlineRight name="right" size={20} />
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

PortfolioSelectionMode.propTypes = propTypes;

PortfolioSelectionMode.defaultProps = defaultProps;

export default PortfolioSelectionMode;
