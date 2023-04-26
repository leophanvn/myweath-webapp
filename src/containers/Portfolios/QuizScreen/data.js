/* eslint-disable no-unused-expressions */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-27 14:40:43
*------------------------------------------------------- */
import React from 'react';
import Icon from 'src/components/IcoMoon';

const data = [
	{
		id: '1',
		icon: <Icon name="exp" size={28} />,
		summary: 'Prior investment experience',
		question: 'Do you have any investment experience In terms of stocks (equity), bonds (fixed income) or other market instruments?',
		answer: [
			{
				value: '1',
				label: 'Never Invested before',
				score: 1,
			},
			{
				value: '2',
				label: 'Invested a small amount (e.g. less than 10% of my monthly income)',
				score: 2,
			},
			{
				value: '3',
				label: 'Invested a moderate amount (e.g. 10-20% of my monthly income)',
				score: 3,
			},
			{
				value: '4',
				label: 'Invested a substantial amount (e.g. >20% of my monthly income)',
				score: 4,
			},
		],
	},
	{
		id: '2',
		summary: 'Knowledge of financial markets',
		icon: <Icon name="knowledge" size={28} />,
		question: 'Do you have any educational knowledge or work experience in the financial markets?',
		answer: [
			{
				value: '2',
				label: 'Yes',
				score: 2,
			},
			{
				value: '1',
				label: 'No',
				score: 1,
			},
		],
	},
	{
		id: '3',
		icon: <Icon name="invest-loss" size={28} />,
		summary: 'In case of investment loss . . .',
		question: 'If my investment makes a loss of 10% in 1 Year, I would?',
		answer: [
			{
				value: '1',
				label: 'Feel very uncomfortable and try to sell off to cut short my losses',
				score: 1,
			},
			{
				value: '2',
				label: 'Hold for at least 6 months and wait for the market to recover',
				score: 2,
			},
			{
				value: '3',
				label: 'Hold and might even consider increasing my investment to take advantage of the low buying price',
				score: 3,
			},
			{
				value: '4',
				label: 'Increase my investment to take advantage of the low buying price',
				score: 4,
			},
		],
	},
	{
		id: '4',
		summary: 'Growth versus risk',
		icon: <Icon name="growth" size={28} />,
		question: 'My optimal mix in terms of growth versus risk?',
		answer: [
			{
				value: '1',
				label: 'I am ok with lower returns as long as my investment is protected',
				score: 1,
			},
			{
				value: '2',
				label: 'I am ok with a potential loss of 10% annually as long as my overall investment grows in the mid term',
				score: 2,
			},
			{
				value: '3',
				label: 'I am ok with a potential loss of 25% annually as long as my overall investment grows in the mid term',
				score: 3,
			},
			{
				value: '4',
				label: 'I am ok with a potential loss of more than 25% annually as long as my overall investment grows in the long term',
				score: 4,
			},
		],
	},
	{
		id: '5',
		icon: <Icon name="amount" size={28} />,
		summary: 'Amount to invest',
		question: 'I am willing to invest SGD_____ each month to achieve my goal over a period of __ years.',
		type: 'group',
		answer: [
			{
				value: 'g1',
				label: 'Investment Amount',
				answer: [
					{
						value: '1',
						label: '1,000 & below a month',
						score: 1,
					},
					{
						value: '2',
						label: 'Up to 3,000 per month',
						score: 2,
					},
					{
						value: '3',
						label: 'Up to 5,000 per month',
						score: 3,
					},
					{
						value: '4',
						label: 'More than 5,000 per month',
						score: 4,
					},
				],
			},
			{
				value: 'g2',
				label: 'Investment Duration',
				answer: [
					{
						value: '1',
						label: 'Up to 5 years',
						score: 1,
					},
					{
						value: '2',
						label: 'Up to 10 years',
						score: 2,
					},
					{
						value: '3',
						label: 'Up to 15 years',
						score: 3,
					},
					{
						value: '4',
						label: 'Up to 20 years',
						score: 4,
					},
				],
			},
		],
	},
	{
		id: '6',
		icon: <Icon name="exp-versus" size={28} />,
		summary: 'Expenses versus income',
		question: 'My monthly living* expenses are around ___% of my monthly income.',
		answer: [
			{
				value: '4',
				label: 'Less than 10%',
				score: 4,
			},
			{
				value: '3',
				label: '10-20%',
				score: 3,
			},
			{
				value: '2',
				label: '30 - 40%',
				score: 2,
			},
			{
				value: '1',
				label: '50% or more',
				score: 1,
			},
		],
		note: '* Living expenses daily spending on groceries, utilities, insurance premiums, food etc',
	},
];

export const MAPPING = [
	{
		value: 'conservative',
		label: 'Conservative',
		rules: [7, 11],
	},
	{
		value: 'moderate',
		label: 'Moderate',
		rules: [12, 16],
	},
	{
		value: 'growth',
		label: 'Growth',
		rules: [17, 21],
	},
	{
		value: 'aggressive',
		label: 'Aggressive',
		rules: [22, 26],
	},
];

export default data;
