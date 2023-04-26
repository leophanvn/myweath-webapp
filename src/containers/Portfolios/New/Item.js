/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 12:05:52
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { BiCheck } from 'react-icons/bi';
import { AiOutlineRight } from 'react-icons/ai';

const propTypes = {
	first: PropTypes.bool,
	active: PropTypes.any,
	done: PropTypes.any,
	title: PropTypes.string,
	subtitle: PropTypes.any,
	onClick: PropTypes.func,
};

const defaultProps = {
	// classes: {},
	first: false,
	active: false,
	done: false,
	subtitle: '',
	title: '',
	onClick: f => f,
};

const TimelineOnboardingItem = (props) => {
	const { title, onClick, first, subtitle, active, done } = props;

	const disabled = !done && !active;

	return (
		<div
			style={{
				marginBottom: 10,
				position: 'relative',
				cursor: 'pointer',

			}}
			disabled={!done && !active}
			onClick={!disabled ? onClick : f => f}
		>
			<div
				className="box"
				style={{
					opacity: done ? 0.8 : 1,
					border: active ? '1px solid green' : '1px solid #DBDCDD',
				}}
			>
				<div
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						display: 'flex',
						height: 30,
					}}
				>
					<div
						style={{
							height: 30,
							width: 30,
							borderRadius: 30,
							borderWidth: 2,
							borderColor: '#00953B',
							// backgroundColor: active ? theme.brand_third : 'transparent',
							marginRight: 15,
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: active ? -1 : 0,
							border: '2px solid #00953B',
						}}
					>
						{
							done ?
								<div
									style={{
										// color: theme.brand_third,
									}}
								>
									<BiCheck size={26} color="#00953B" />
								</div> :
								null
						}
					</div>
					<div
						style={{
							flex: 1,
						}}
					>
						<strong>
							{title}
						</strong>
						{
							subtitle ?
								<div
									style={{
										// marginTop: 5,
										// divTransform: 'capitalize',
										fontSize: 12,
									}}
									className="text-muted"
									color="note"
								>
									{subtitle}
								</div> :
								null
						}
					</div>
					<div
						style={{
							marginRight: -5,
						}}
					>
						<AiOutlineRight size={20} />
					</div>
				</div>
			</div>
			{
				!first ?
					<div
						style={{
							width: 2,
							background: '#00953B',
							position: 'absolute',
							height: '64px',
							left: '35px',
							bottom: '49px',
							opacity: done ? 0.6 : 1,
						}}
					/> :
					null
			}
		</div>
	);
};

TimelineOnboardingItem.propTypes = propTypes;

TimelineOnboardingItem.defaultProps = defaultProps;

export default TimelineOnboardingItem;
