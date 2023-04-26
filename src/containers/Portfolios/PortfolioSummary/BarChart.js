/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import orderBy from 'lodash/orderBy';
import { Bar } from '@ant-design/plots';

const DemoColumn = ({ data = [], formData = {}, total = 100 }) => {
	const chartData = React.useMemo(() => {
		const d = orderBy(data?.map((dael, i) => {
			const tt = dael.data.reduce((preVal, el) => {
				return preVal + ((formData?.[el.name] || el.weight) * 1);
			}, 0).toFixed(2) * 1;

			return {
				x: dael.groupName,
				// y: 'Target Asset Allocation by asset class',
				y: tt,
				type: dael.color,
			};
		}), ['y'], ['desc']);

		return {
			data: d,
			colors: d?.map((dael, i) => {
				return dael.type;
			}),
		};
	}, [data, formData]);

	const config = {
		data: chartData.data,
		xField: 'y',
		yField: 'x',
		seriesField: 'type',
		colorField: 'type',
		color: chartData.colors,
		legend: false,
		label: {
			content: (originData) => {
				return (originData.y).toFixed(2) + '%';
			},
			// offset: 10,
			position: 'right',
		},
		tooltip: {
			formatter: (datum) => {
				return { name: 'Weight', value: datum.y + '%' };
			},
			// offset: 10,
		},
		// tooltip: false,
		// yAxis: {
		// 	label: false,
		// 	max: 100,
		// },
		xAxis: {
			label: false,
			grid: {
				line: false,
			},
			// max: 90,
		},
	};

	if (total !== 100) {
		return (
			<div className="p-5 text-center">
				<strong className="text-danger">Total weight should be 100%</strong>
			</div>
		);
	}

	return <Bar {...config} />;
};

export default DemoColumn;
