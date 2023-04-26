/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';
import orderBy from 'lodash/orderBy';

const AssetAllocationChart = ({ data = [], formData = {}, total = 100 }) => {
	const chartData = React.useMemo(() => {
		const d = orderBy(data?.map((dael, i) => {
			const tt = dael.data.reduce((preVal, el) => {
				return preVal + ((formData?.[el.name] || el.weight) * 1);
			}, 0).toFixed(2) * 1;

			return {
				label: dael.groupName,
				color: dael.color,
				y: 'Target Asset Allocation by asset class',
				x: tt,
			};
		}), ['x'], ['desc']);

		return {
			data: d,
			colors: d?.map((dael, i) => {
				return dael.color;
			}),
		};
	}, [data, formData]);

	const config = {
		data: chartData.data,
		xField: 'x',
		yField: 'y',
		xAxis: false,
		yAxis: false,
		seriesField: 'label',
		isPercent: true,
		isStack: true,
		height: 70,
		legend: {
			position: 'bottom',
			layout: 'horizontal',
		},
		color: chartData.colors,
		label: {
			position: 'middle',
			content: (item) => {
				return (item.x * 100).toFixed(2) + '%';
			},
			style: {
				fill: '#fff',
				fontSize: 10,
			},
		},
	};

	if (total !== 100) {
		return (
			<div className="p-4 text-center">
				<strong className="text-danger">Total weight should be 100%</strong>
			</div>
		);
	}

	return <Bar {...config} />;
};

export default AssetAllocationChart;
