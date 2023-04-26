/* eslint-disable dot-notation */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-09-23 07:23:58
*------------------------------------------------------- */
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import excel from './excel.json';

const colors = ['#CD3248', '#6395f9', '#62daab', '#567798', '#7666f9', '#3cb57a', '#BDA142', '#6857A8', '#97A857', '#47B86E', '#C5603A', '#97CD32', '#6832CD', '#f6c022', '#9B6C64', '#31C4CE', '#CE3B31'];
const colorsC = {
	'US Government Bonds': '#BDA142',
	'Developed Markets Aggregate Bonds': '#6395f9',
	'Emerging Markets Government Bonds': '#62daab',
	'Asia Aggregate Bonds': '#567798',
	'Global Aggregate Bonds': '#7666f9',
	'Asia Pacific ex-Japan Equities': '#3cb57a',
	'US Equities': '#CD3248',
	'Commodities': '#97A857',
	'Global Equities': '#47B86E',
	'Japan Equities': '#C5603A',
	'Europe Equities': '#6857A8',
	'Global Corporate Bonds': '#6832CD',
	'Developed Markets Government Bonds': '#9B6C64',
	'Real Estate': '#31C4CE',
	'Emerging Markets Equities': '#CE3B31',
	'Cash': '#97CD32',
	'Developed Markets Equities': '#f6c022',
};

const extract = () => {
	const ext = Object.entries(excel).reduce((preVal, [key, val]) => {
		const grouped = groupBy(orderBy(val, 'category', 'asc').map((el) => {
			return {
				category: el['New Category'],
				name: el['Name'],
				index: el['Index'],
				weight: el[' Weight '] * 1,
				currency: 'USD',
				alpha: (Math.random() * 6).toFixed(2) * 1,
				sharpeRatio: (Math.random() * 6).toFixed(2) * 1,
				jensenAlpha: (Math.random() * 6).toFixed(2) * 1,
				informationRatio: (Math.random() * 6).toFixed(2) * 1,
				trackingError: (Math.random() * 6).toFixed(2) * 1,
			};
		}), e => e.category);

		const d = Object.entries(grouped).map(([k, v], i) => {
			return {
				groupId: k,
				groupName: k,
				color: colorsC[k] || colors[i],
				data: v,
			};
		});

		return {
			...preVal,
			['Core ' + (key?.split(' ')?.[0] || '')]: d,
		};
	}, {});

	return ext;
};

export default extract;
