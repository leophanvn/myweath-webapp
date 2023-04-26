/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-25 23:42:33
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { GiStairsGoal, GiHouse } from 'react-icons/gi';
import { BiCalendarHeart } from 'react-icons/bi';
import { AiFillCar } from 'react-icons/ai';
import { MdTravelExplore, MdOutlineBusiness } from 'react-icons/md';
import { FaGraduationCap, FaWallet, FaHandHoldingUsd, FaChair } from 'react-icons/fa';

const propTypes = {
	type: PropTypes.string.isRequired,
};

const defaultProps = {
	type: {},
};

const GoalIcon = (props) => {
	const { type, ...attrs } = props;

	if (type === 'wedding') {
		return <BiCalendarHeart {...attrs} name="party-popper" />;
	}
	if (type === 'business') {
		return <MdOutlineBusiness {...attrs} name="business" />;
	}
	if (type === 'traveling') {
		return <MdTravelExplore {...attrs} name="card-travel" />;
	}
	if (type === 'house') {
		return <GiHouse {...attrs} name="home" />;
	}
	if (type === 'saving') {
		return <FaHandHoldingUsd {...attrs} name="save" />;
	}
	if (type === 'createOwn') {
		return <FaWallet {...attrs} name="wallet-outline" />;
	}
	if (type === 'retirement') {
		return <FaChair {...attrs} name="chair" />;
	}
	if (type === 'education') {
		return <FaGraduationCap {...attrs} name="edu" />;
	}
	if (type === 'vehicle') {
		return <AiFillCar {...attrs} name="car" />;
	}

	return (
		<GiStairsGoal {...attrs} />
	);
};

GoalIcon.propTypes = propTypes;

GoalIcon.defaultProps = defaultProps;

export default GoalIcon;
