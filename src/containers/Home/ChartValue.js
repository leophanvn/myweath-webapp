import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const ChartPerformance = () => {
	const [data, setData] = useState([]);

	const config = {
		data: [
			{
				'Date': '2021-11',
				'scales': 0,
			},
			{
				'Date': '2021-12',
				'scales': 824,
			},
			{
				'Date': '2022-01',
				'scales': 998,
			},
			{
				'Date': '2022-02',
				'scales': 1050,
			},
			{
				'Date': '2022-03',
				'scales': 1220,
			},
			{
				'Date': '2022-04',
				'scales': 1818,
			},
			{
				'Date': '2022-05',
				'scales': 1920,
			},
			{
				'Date': '2022-06',
				'scales': 1802,
			},
			{
				'Date': '2022-07',
				'scales': 1945,
			},
			{
				'Date': '2022-08',
				'scales': 2856,
			},
			{
				'Date': '2022-09',
				'scales': 3107,
			},
			{
				'Date': '2022-10',
				'scales': 4140,
			},
			{
				'Date': '2022-11',
				'scales': 5211,
			},
			{
				'Date': '2022-12',
				'scales': 5011,
			},
		],
		xField: 'Date',
		yField: 'scales',
		yAxis: false,
		xAxis: false,
		height: 145,
		// xAxis: {
		// 	range: [0, 1],
		// 	tickCount: 5,
		// },
		point: {
			shape: 'breath-point',
		},
		meta: {
			cpu: {
				time: {
					type: 'cat',
				},
				max: 100,
				min: 0,
			},
		},
		colorField: 'type',
		color: '#1da96a',
		areaStyle: () => {
			return {
				fill: 'l(270) 0:#ffffff 0.5:#1da96a 1:#1da96a',
			};
		},
	};

	return <Area {...config} />;
};

export default ChartPerformance;
