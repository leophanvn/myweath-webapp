import React from 'react';
import { Line } from '@ant-design/plots';

import moment from 'src/utils/moment';

const ChartPerformance = () => {
	const config = {
		data: [
			{
				'year': '2021/11/01',
				'value': 0,
				'category': 'Buy a Home',
			},
			{
				'year': '2021/11/01',
				'value': 0,
				'category': 'Children\'s Education',
			},
			{
				'year': '2021/12/01',
				'value': 0,
				'category': 'Buy a Home',
			},
			{
				'year': '2021/12/01',
				'value': 0,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/01/01',
				'value': 0,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/01/01',
				'value': 0,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/02/01',
				'value': 150,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/02/01',
				'value': 154,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/03/01',
				'value': 622,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/03/01',
				'value': 1064,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/04/01',
				'value': 430,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/04/01',
				'value': 1457,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/05/01',
				'value': 1330,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/05/01',
				'value': 2259,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/06/01',
				'value': 1440,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/06/01',
				'value': 1969,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/07/01',
				'value': 1550,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/07/01',
				'value': 3171,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/08/01',
				'value': 2060,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/08/01',
				'value': 3676,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/09/01',
				'value': 2690,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/09/01',
				'value': 6677,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/10/01',
				'value': 4740,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/10/01',
				'value': 6840,
				'category': 'Children\'s Education',
			},
			{
				'year': '2022/11/01',
				'value': 5040,
				'category': 'Buy a Home',
			},
			{
				'year': '2022/11/01',
				'value': 7583,
				'category': 'Children\'s Education',
			},
		],
		xField: 'year',
		height: 300,
		yField: 'value',
		seriesField: 'category',
		xAxis: {
			type: 'time',
			label: {
				formatter: (v) => moment(v).format('MMM YYYY'),
			},
		},
		yAxis: {
			label: {
				// 数值格式化为千分位
				formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
			},
		},
		legend: {
			layout: 'horizontal',
			position: 'top',
		},
	};

	return <Line {...config} />;
};

export default ChartPerformance;
