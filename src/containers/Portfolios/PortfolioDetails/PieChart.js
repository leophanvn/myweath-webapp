/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-exponentiation-operator */
/* eslint-disable no-param-reassign */
import React from 'react';
import { Pie } from '@ant-design/plots';

import orderBy from 'lodash/orderBy';

const pieDataMock = [
	{
		value: 40,
		type: 'Government Bonds',
	},
	{
		value: 30,
		type: 'Corporate Bonds',
	},
	{
		value: 13,
		type: 'US Equities',
	},
	{
		value: 10,
		type: 'Commodities',
	},
	{
		value: 7,
		type: 'Cash',
	},
];

const PieChartCpn = ({ portfolio, goalData = { portfolioData: {} }, mockData = [] }) => {
	if (!portfolio) {
		return null;
	}

	// const pieData = orderBy(dataP?.[portfolio].map((el, i) => {
	// 	const weight = goalData?.portfolioData?.[el.name] || 0;

	// 	return {
	// 		value: weight,
	// 		type: el.name,
	// 	};
	// }), ['value'], ['desc']);
	const pieData = orderBy(mockData.map((elD, i) => {
		const tt = elD.data.reduce((preVal, el) => {
			return preVal + ((goalData?.portfolioData?.[el.name] || el.weight) * 1);
		}, 0);

		return {
			value: tt,
			type: elD.groupName,
		};
	}), ['value'], ['desc']);

	const config = {
		appendPadding: 0,
		data: pieData,
		angleField: 'value',
		colorField: 'type',
		radius: 0.7,
		innerRadius: 0.7,
		tooltip: true,
		meta: {
			value: {
				formatter: (v) => `${v}%`,
			},
		},
		label: {
			type: 'spider',
			labelHeight: 28,
			content: '{name}\n{percentage}',
			style: {
				// textAlign: 'left',
			},
		},
		// legend: false,
		statistic: {
			title: false,
			content: {
				style: {
					whiteSpace: 'pre-wrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					fontSize: 24,
					lineHeight: 30,
				},
				content: goalData.recommendedPortfolio,
			},
		},
		interactions: [
			{
				type: 'pie-legend-active',
			},
			{
				type: 'element-active',
			},
		],
	};

	return (
		<Pie
			{...config}
		/>
	);
};

export default PieChartCpn;
