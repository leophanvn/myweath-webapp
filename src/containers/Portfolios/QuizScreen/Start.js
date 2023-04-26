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
import { AiOutlineRight } from 'react-icons/ai';
import PageTitle from 'src/components/PageTitle';

import data from './data';
import Question from './Question';
import StartItem from './StartItem';

const propTypes = {
	onSelect: PropTypes.func,
	onChange: PropTypes.func,
	answers: PropTypes.object,
};

const defaultProps = {
	onSelect: f => f,
	onChange: f => f,
	answers: {},
};
const Start = (props) => {
	const { onSelect, answers, onChange } = props;

	return (
		<div className="">
			<PageTitle
				title="Risk Profiling"
				subtitle="We have a few questions for you that&apos;ll help us personalize your experience and give you better advice."
			/>
			<div
				style={{

				}}
			>
				{
					data.map((el, i) => {
						return (
							<StartItem
								key={el.id}
								el={el}
								i={i}
								answers={answers}
								onChange={onChange}
							/>
						);
					})
				}
			</div>
		</div>
	);
};

Start.propTypes = propTypes;

Start.defaultProps = defaultProps;

export default Start;
