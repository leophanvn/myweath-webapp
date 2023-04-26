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

import RadioGroup from 'src/components/Forms/RadioGroup';

const propTypes = {
	data: PropTypes.object.isRequired,
	onChange: PropTypes.func,
	value: PropTypes.any,
	index: PropTypes.number,
};

const defaultProps = {
	data: {},
	onChange: f => f,
	value: null,
	index: 0,
};
const Question = (props) => {
	const { data, value, index, onChange } = props;

	return (
		<div
			style={{
				// justifyContent: 'center',
				// marginTop: 10,
			}}
		>
			{/* <div
				style={{
					alignItems: 'center',
				}}
			>
				<Image
					source={data.img}
					style={{
						height: 200,
						width: 200,
					}}
					resizeMode="contain"
				/>
			</div> */}
			<h6>
				Q{index + 1}/6
			</h6>
			<div
				style={{
					// marginBottom: 20,
				}}
			>
				<strong
					style={{
						// strongAlign: 'center',
						marginTop: 10,
					}}
				>
					{data.question}
				</strong>
			</div>
			{
				data.type === 'group' ?
					<div
						style={{

						}}
					>
						{
							data.answer?.map((gr, i) => {
								return (
									<RadioGroup
										right
										style={{
											marginBottom: 20,
										}}
										value={value?.split('--')[i]}
										label={gr.label}
										onChange={(v) => {
											const newVal = value?.split('--') || Array.from({ length: data.answer?.length }, () => null);
											newVal[i] = v;
											onChange(data.id, newVal.join('--'), data);
										}}
										key={gr.value}
										checkBoxStyle={{
											border: '1px solid #DBDCDD',
										}}
									>
										{
											gr.answer?.map((a) => {
												return (
													<RadioGroup.Item
														value={a.value}
														key={a.value}
														style={{
															marginBottom: 10,
															backgroundColor: '#fff',
															borderRadius: 8,
															border: '1px solid #DBDCDD',
															boxShadow: '1px 1px 20px 1px #e0e0e0',
															borderWidth: 1,
															alignItems: 'center',
															padding: 15,
														}}
													>
														{a.label}
													</RadioGroup.Item>
												);
											})
										}
									</RadioGroup>
								);
							})
						}
					</div> :
					<RadioGroup
						right
						value={value}
						onChange={(v) => onChange(data.id, v, data)}
						checkBoxStyle={{
							border: '1px solid #DBDCDD',
						}}
					>
						{
							data.answer?.map((el) => {
								return (
									<RadioGroup.Item
										value={el.value}
										key={el.value}
										style={{
											marginBottom: 10,
											backgroundColor: '#fff',
											borderRadius: 8,
											border: '1px solid #DBDCDD',
											boxShadow: '1px 1px 20px 1px #e0e0e0',
											borderWidth: 1,
											padding: 15,
											alignItems: 'center',
										}}
									>
										{el.label}
									</RadioGroup.Item>
								);
							})
						}
					</RadioGroup>
			}
			{
				data.note ?
					<div
						style={{
							marginTop: 20,
							marginBottom: 20,
						}}
						className="text-muted"
					>
						{data.note}
					</div> :
					null
			}
		</div>
	);
};

Question.propTypes = propTypes;

Question.defaultProps = defaultProps;

export default Question;
