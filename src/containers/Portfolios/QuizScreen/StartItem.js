/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-27 14:40:43
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

// import { Image } from 'react-native';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import PageTitle from 'src/components/PageTitle';

import data from './data';
import Question from './Question';

const propTypes = {
	onSelect: PropTypes.func,
	onChange: PropTypes.func,
	answers: PropTypes.object,
	el: PropTypes.object,
	i: PropTypes.number,
};

const defaultProps = {
	onSelect: f => f,
	onChange: f => f,
	answers: {},
	el: {},
	i: null,
};
const Start = (props) => {
	const { onSelect, i, el, answers, onChange } = props;

	const [show, setshow] = React.useState(true);

	const isAnswer = answers[el.id];

	let answer = '';
	if (isAnswer) {
		if (el.type === 'group') {
			const aws = answers[el.id]?.split('--');

			const arr = el.answer?.map((a, idex) => {
				const a3 = a.answer?.find(a2 => {
					return a2.value === aws[idex];
				});

				return a3?.label || '';
			});

			answer = arr.join(' - ');
		} else {
			const aw = el.answer?.find((a) => {
				return a.value === answers[el.id];
			}) || {};

			answer = aw.label;
		}
	}

	return (
		<div
			key={el.id}
			style={{
				marginBottom: 15,
				backgroundColor: '#fff',
				borderRadius: 8,
				border: isAnswer ? '1px solid #00953B' : '1px solid #DBDCDD',
				boxShadow: '1px 1px 20px 1px #e0e0e0',
			}}
		>
			<div
				style={{
					flexDirection: 'row',
					display: 'flex',
					alignItems: 'center',
					cursor: 'pointer',
					borderBottom: '1px solid #DBDCDD',
				}}
				// onClick={() => onSelect(i)}
				onClick={() => setshow(!show)}
			>
				<div
					style={{
						height: 75,
						width: 75,
						borderRadius: 8,
						// backgroundColor: 'rgb(237 237 237)',
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex',
					}}
				>
					<div
						className="text-primary"
						style={{
							textAlign: 'center',
						}}
					>
						{el.icon}
					</div>
				</div>
				<div
					style={{
						paddingRight: 15,
						paddingLeft: 5,
						flex: 1,
					}}
				>
					<h6 className="mb-0">
						{el.summary}
					</h6>
					{
						isAnswer ?
							<div
								className="text-muted"
								style={{
									// marginTop: 5,
								}}
							>
								{answer}
							</div> :
							null
					}
				</div>
				<div
					style={{
						marginRight: 20,
					}}
				>
					{
						!show ?
							<AiOutlineDown size={20} /> :
							<AiOutlineUp size={20} />
					}
				</div>
			</div>
			{
				show &&
				<div className="p-4 pb-3">
					<Question
						data={data[i]}
						index={i}
						onChange={onChange}
						value={answers[data[i]?.id]}
					/>
				</div>
			}
		</div>
	);
};

Start.propTypes = propTypes;

Start.defaultProps = defaultProps;

export default Start;
