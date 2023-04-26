/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-09-23 07:23:58
*------------------------------------------------------- */

const data = {
	'Core C1': [

	],
	'Core C2': [

	],
	'Core C3': [

	],
	'Core M1': [

	],
	'Core M2': [

	],
	'Core M3': [

	],
	'Core G1': [

	],
	'Core G2': [

	],
	'Core G3': [

	],
	'Core A1': [

	],
	'Core A2': [

	],
	'Core A3': [
		{
			groupId: 0,
			groupName: 'US Equities',
			color: '#6395f9',
			data: [
				{
					name: 'iShares S&P 500 Growth ETF',
					index: 'S&P 500 Growth TR SGD',
					currency: 'SGD',
					weight: 33.43,
					alpha: 15.34,
					sharpeRatio: 0.09,
					jensenAlpha: 15.95,
					informationRatio: 0.35,
					trackingError: 43.76,
				},
				{
					name: 'iShares Russell 2000 ETF',
					index: 'Russell 2000',
					currency: 'SGD',
					weight: 1.01,
					alpha: 15.34,
					sharpeRatio: 0.09,
					jensenAlpha: 15.95,
					informationRatio: 0.35,
					trackingError: 43.76,
				},
				{
					name: 'Communication Services Sel Sect SPDR ETF',
					index: 'S&P500 Communication Services',
					currency: 'SGD',
					weight: 7.19,
					alpha: 1.36,
					sharpeRatio: 0.15,
					jensenAlpha: 1.61,
					informationRatio: 0.81,
					trackingError: 1.67,
				},
				{
					name: 'iShares S&P 500 Financials Sect ETF $Acc',
					index: 'S&P500 Financials',
					currency: 'SGD',
					weight: 12.25,
					alpha: 0.15,
					sharpeRatio: 0.14,
					jensenAlpha: 0.29,
					informationRatio: 0.03,
					trackingError: 5.07,
				},
				{
					name: 'Consumer Discret Sel Sect SPDR ETF',
					index: 'S&P500 Consumer Discretionary',
					currency: 'SGD',
					weight: 1,
					alpha: 0.15,
					sharpeRatio: 0.14,
					jensenAlpha: 0.29,
					informationRatio: 0.03,
					trackingError: 5.07,
				},
				{
					name: 'iShares MSCI Intl Momentum Factor ETF',
					index: 'MSCI World ex-US Momentum',
					currency: 'SGD',
					weight: 21.03,
					alpha: 0.15,
					sharpeRatio: 0.14,
					jensenAlpha: 0.29,
					informationRatio: 0.03,
					trackingError: 5.07,
				},
			],
		},
		{
			groupId: 1,
			groupName: 'Real Estate',
			color: '#62daab',
			data: [
				{
					name: 'iShares International Dev Real Est ETF',
					index: 'FTSE EPRA Nareit Developed Ex US NR',
					currency: 'SGD',
					weight: 1,
					alpha: 4.79,
					sharpeRatio: 0.49,
					jensenAlpha: 4.68,
					informationRatio: 1.06,
					trackingError: 4.50,
				},
				{
					name: 'iShares US Real Estate ETF',
					index: 'DJ US Real Estate TR',
					currency: 'SGD',
					weight: 2.2,
					alpha: 3.17,
					sharpeRatio: 0.03,
					jensenAlpha: 3.19,
					informationRatio: 1.99,
					trackingError: 1.59,
				},
			],
		},
		{
			groupId: 2,
			groupName: 'International Equities',
			color: '#657798',
			data: [
				{
					name: 'Nikko AM Shenton Asia Pacific',
					index: 'MSCI AC Asia Pac Ex JPN NR',
					currency: 'SGD',
					weight: 1,
					alpha: 0.64,
					sharpeRatio: 0.02,
					jensenAlpha: 0.57,
					informationRatio: 0.09,
					trackingError: 6.84,
				},
				{
					name: 'iShares JPX-Nikei 400 ETF',
					index: 'Japan (Topix)',
					currency: 'SGD',
					weight: 1.03,
					alpha: 3.86,
					sharpeRatio: 0.03,
					jensenAlpha: 3.88,
					informationRatio: 2.15,
					trackingError: 1.79,
				},
				{
					name: 'Fidelity European Dynamic Gr-A-Acc-EUR',
					index: 'Europe 600',
					currency: 'SGD',
					weight: 1,
					alpha: 0.00,
					sharpeRatio: 4.04,
					jensenAlpha: 0.00,
					informationRatio: 0.00,
					trackingError: 0.00,
				},
				{
					name: 'Vanguard Value ETF',
					index: 'US Large Cap Value',
					currency: 'SGD',
					weight: 3.55,
					alpha: 5.15,
					sharpeRatio: 0.55,
					jensenAlpha: 5.17,
					informationRatio: 2.26,
					trackingError: 2.28,
				},
			],
		},
		{
			groupId: 3,
			groupName: 'Global Bonds',
			color: '#f6c022',
			data: [
				{
					name: 'PIMCO GIS GllnGd Crdt E USD Inc',
					index: 'BB Global Investment Grade',
					currency: 'SGD',
					weight: 8.49,
					alpha: 0.15,
					sharpeRatio: 0.08,
					jensenAlpha: 0.26,
					informationRatio: 0.02,
					trackingError: 6.55,
				},
				{
					name: 'iShares Core Glbl Aggg Bond UCITS ETF',
					index: 'BB Global Aggregate',
					currency: 'SGD',
					weight: 1,
					alpha: 2.57,
					sharpeRatio: 0.12,
					jensenAlpha: 2.52,
					informationRatio: 1.52,
					trackingError: 1.69,
				},
				{
					name: 'BGF Global Inflation Linked Bd A2 USD',
					index: 'BB Dev Mkts Inflation Bonds',
					currency: 'USD',
					weight: 1,
					alpha: 2.57,
					sharpeRatio: 0.12,
					jensenAlpha: 2.52,
					informationRatio: 1.52,
					trackingError: 1.69,
				},
			],
		},
		{
			groupId: 4,
			groupName: 'Corporate Bonds',
			color: '#7666f9',
			data: [
				{
					name: 'iShares JP Morgan USD Em Makts Bd ETF',
					index: 'BB Asia Credit',
					currency: 'SGD',
					weight: 1.04,
					alpha: 0.60,
					sharpeRatio: 0.01,
					jensenAlpha: 0.59,
					informationRatio: 0.11,
					trackingError: 5.21,
				},
				{
					name: 'iShares iBoxx $ High Yield Corp Bd ETF',
					index: 'BB Global HY',
					currency: 'SGD',
					weight: 1.07,
					alpha: 0.60,
					sharpeRatio: 0.01,
					jensenAlpha: 0.59,
					informationRatio: 0.11,
					trackingError: 5.21,
				},
			],
		},
		{
			groupId: 5,
			groupName: 'Cash',
			color: '#3cb57a',
			data: [
				{
					name: 'US Cash',
					index: 'US Cash',
					currency: 'SGD',
					weight: 1.71,
					alpha: 0.60,
					sharpeRatio: 0.01,
					jensenAlpha: 0.59,
					informationRatio: 0.11,
					trackingError: 5.21,
				},
			],
		},
	],
};

export default data;
