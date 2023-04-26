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

const BiasOrientation = (props) => {
	const { value } = props;

	return (
		<div
			style={{
				margin: '10px -120px',
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
					alignItems: 'center',
					justifyContent: 'space-between',
					display: 'flex',
				}}
			>
				<div
					style={{
						alignItems: 'center',
						flex: 1,
						display: 'flex',
						position: 'relative',
						flexDirection: 'column',

					}}
				>
					<div
						style={{
							height: 12,
							width: 12,
							borderRadius: 12,
							backgroundColor: value === 'Emotional' ? '#00953B' : '#d5d5d5',
							position: 'absolute',
						}}
					/>
					<div
						style={{
							marginTop: 15,
							textAlign: 'center',
							fontSize: 10,
							paddingTop: 10,
							color: value === 'Emotional' ? '#00953B' : '#999999',
						}}
					>
						Emotional
					</div>
				</div>
				<div
					style={{
						alignItems: 'center',
						flex: 1,
						flexDirection: 'column',
						position: 'relative',
						display: 'flex',
					}}
				>

					<div
						style={{
							backgroundColor: '#d5d5d5',
							height: 4,
							position: 'absolute',
							width: '100%',
							right: '48%',
							top: 4,
							zIndex: 1,
						}}
					/>
					<div
						style={{
							height: 12,
							width: 12,
							borderRadius: 12,
							backgroundColor: value === 'Cognitive' ? '#00953B' : '#d5d5d5',
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
							color: value === 'Cognitive' ? '#00953B' : '#999999',
						}}
					>
						Cognitive
					</div>
				</div>
			</div>
		</div>
	);
};

BiasOrientation.propTypes = propTypes;

BiasOrientation.defaultProps = defaultProps;

export default BiasOrientation;
