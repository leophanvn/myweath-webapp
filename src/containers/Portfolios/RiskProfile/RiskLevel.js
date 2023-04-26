/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-09-26 12:21:25
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	value: PropTypes.string.isRequired,
};

const defaultProps = {
	value: '',
};

const RiskLevel = (props) => {
	const { value } = props;

	return (
		<div
			style={{
				margin: '10px -35px',
				marginTop: 10,
			}}
		>
			{/* <div
				style={{
					height: 4,
					width: '100%',
					backgroundColor: '#d5d5d5',
				}}
			/> */}
			<div
				style={{
					flexDirection: 'row',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					position: 'relative',
				}}
			>
				<div
					style={{
						alignItems: 'center',
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						position: 'relative',
					}}
				>
					<div
						style={{
							height: 12,
							width: 12,
							borderRadius: 12,
							backgroundColor: value === 'Low' ? '#00953B' : '#999999',
							position: 'absolute',
						}}
					/>
					<div
						style={{
							marginTop: 15,
							textAlign: 'center',
							fontSize: 10,
							paddingTop: 10,
							color: value === 'Low' ? '#00953B' : '#999999',
						}}
					>
						Low
					</div>
				</div>
				<div
					style={{
						alignItems: 'center',
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						position: 'relative',
					}}
				>

					<div
						style={{
							backgroundColor: '#d5d5d5',
							height: 4,
							position: 'absolute',
							width: '100%',
							right: '45%',
							top: 4,
							zIndex: 1,
						}}
					/>
					<div
						style={{
							height: 12,
							width: 12,
							borderRadius: 12,
							backgroundColor: value === 'Moderate' ? '#00953B' : '#d5d5d5',
							position: 'absolute',
							zIndex: 2,
						}}
					/>
					<div
						style={{
							marginTop: 15,
							textAlign: 'center',
							fontSize: 10,
							paddingTop: 10,
							color: value === 'Moderate' ? '#00953B' : '#999999',
						}}
					>
						Moderate
					</div>
				</div>
				<div
					style={{
						alignItems: 'center',
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						position: 'relative',
					}}
				>

					<div
						style={{
							backgroundColor: '#d5d5d5',
							height: 4,
							position: 'absolute',
							width: '100%',
							right: '45%',
							top: 4,
							zIndex: 1,
						}}
					/>
					<div
						style={{
							height: 12,
							width: 12,
							borderRadius: 12,
							backgroundColor: value === 'Medium to high' ? '#00953B' : '#d5d5d5',
							position: 'absolute',
							zIndex: 2,
						}}
					/>
					<div
						style={{
							marginTop: 15,
							textAlign: 'center',
							fontSize: 10,
							paddingTop: 10,
							color: value === 'Medium to high' ? '#00953B' : '#999999',
						}}
					>
						Medium to high
					</div>
				</div>
				<div
					style={{
						alignItems: 'center',
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						position: 'relative',
					}}
				>

					<div
						style={{
							backgroundColor: '#d5d5d5',
							height: 4,
							position: 'absolute',
							width: '100%',
							right: '45%',
							top: 4,
							zIndex: 1,
						}}
					/>
					<div
						style={{
							height: 12,
							width: 12,
							borderRadius: 12,
							backgroundColor: value === 'High' ? '#00953B' : '#d5d5d5',
							position: 'absolute',
							zIndex: 2,
						}}
					/>
					<div
						style={{
							marginTop: 15,
							textAlign: 'center',
							fontSize: 10,
							paddingTop: 10,
							color: value === 'High' ? '#00953B' : '#999999',
						}}
					>
						High
					</div>
				</div>
			</div>
		</div>
	);
};

RiskLevel.propTypes = propTypes;

RiskLevel.defaultProps = defaultProps;

export default RiskLevel;
