/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-09-22 23:19:19
*------------------------------------------------------- */

const data = {
	'Core C1': {
		label: 'C1 Core Portfolio',
		desc: 'This is a conservative portfolio focused on capital preservation with modest capital appreciation potential. Suitable for clients with lower risk tolerances and short investment horizon of around 3 years.​',
		overview: {
			targetReturns: 4.32,
			targetRisk: 7.49,
			probLoss: 28.21,
			historicalHorizon: 5,
			historicalTimeHorizon: 3,
			model: 'mW-Con-3Yr-140922',
			swapRate: 3.64,
		},
	},
	'Core C2': {
		label: 'C2 Core Portfolio',
		desc: 'This is a conservative portfolio focused on capital preservation with modest capital appreciation potential. Suitable for clients with lower risk tolerances and midterm investment horizon of around 5 years.',
		overview: {
			targetReturns: 4.86,
			targetRisk: 7.18,
			probLoss: 24.90,
			historicalHorizon: 5,
			historicalTimeHorizon: 5,
			model: 'mW-Con-5Yr-140922',
			swapRate: 4.33,
		},
	},
	'Core C3': {
		label: 'C3 Core Portfolio​',
		desc: 'This is a conservative portfolio focused on capital preservation with reasonable capital appreciation potential. Suitable for clients with lower risk tolerances and longer- term investment horizon of around 10 years.​',
		overview: {
			targetReturns: 6.02,
			targetRisk: 8.31,
			probLoss: 23.43,
			historicalHorizon: 5,
			historicalTimeHorizon: 10,
			model: 'mW-Con-10Yr-140922',
			swapRate: 2.49,
		},
	},
	'Core M1': {
		label: 'M1 Core Portfolio​',
		desc: 'This portfolio is focused on capital preservation balanced with capital appreciation potential. Suitable for clients with low-risk tolerances and shorter-term investment horizon of around 3 years.​',
		overview: {
			targetReturns: 5.49,
			targetRisk: 9.48,
			probLoss: 28.14,
			historicalHorizon: 5,
			historicalTimeHorizon: 3,
			model: 'mW-Mod-3Yr-140922',
			swapRate: 2.49,
		},
	},
	'Core M2': {
		label: 'M2 Core Portfolio',
		desc: 'This portfolio is focused on capital preservation balanced with capital appreciation potential. Suitable for clients with low-risk tolerances and midterm investment horizon of around 5 years.',
		overview: {
			targetReturns: 6.04,
			targetRisk: 9.01,
			probLoss: 25.13,
			historicalHorizon: 5,
			historicalTimeHorizon: 5,
			model: 'mW-Mod-5Yr-140922',
			swapRate: 4.22,
		},
	},
	'Core M3': {
		label: 'M3 Core Portfolio',
		desc: 'This portfolio is focused on capital preservation with reasonable capital appreciation potential. Suitable for clients with low-risk tolerances and longer-term investment horizon of around 10 years.​',
		overview: {
			targetReturns: 6.53,
			targetRisk: 10.14,
			probLoss: 25.98,
			historicalHorizon: 5,
			historicalTimeHorizon: 10,
			model: 'mW-Mod-10Yr-140922',
			swapRate: 4.33,
		},
	},
	'Core G1': {
		label: 'G1 Core Portfolio',
		desc: 'This portfolio is focused on capital appreciation potential in line with risk levels. Suitable for clients with higher risk tolerances and shorter-term investment horizon of around 3 years.​',
		overview: {
			targetReturns: 5.70,
			targetRisk: 8.81,
			probLoss: 25.89,
			historicalHorizon: 5,
			historicalTimeHorizon: 3,
			model: 'mW-Gro-3Yr-140922',
			swapRate: 2.49,
		},
	},
	'Core G2': {
		label: 'G2 Core Portfolio​',
		desc: 'This portfolio is focused on capital appreciation potential in line with risk levels. Suitable for clients with higher risk tolerances and midterm investment horizon of around 5 years.',
		overview: {
			targetReturns: 7.18,
			targetRisk: 13.32,
			probLoss: 29.49,
			historicalHorizon: 5,
			historicalTimeHorizon: 5,
			model: 'mW-Gro-5Yr-140922',
			swapRate: 4.00,
		},
	},
	'Core G3': {
		label: 'G2 Core Portfolio​',
		desc: 'This portfolio is focused on capital appreciation potential in line with risk levels. Suitable for clients with higher risk tolerances and longer-term investment horizon of around 10 years.',
		overview: {
			targetReturns: 8.40,
			targetRisk: 13.58,
			probLoss: 26.80,
			historicalHorizon: 5,
			historicalTimeHorizon: 10,
			model: 'mW-Gro-10Yr-140922',
			swapRate: 2.49,
		},
	},
	'Core A1': {
		label: 'A1 Core Portfolio​',
		desc: 'This portfolio is focused on high capital appreciation potential in line with risk levels. Suitable for clients with higher risk appetite and short term investment horizon of around 3 years.​',
		overview: {
			targetReturns: 6.80,
			targetRisk: 12.22,
			probLoss: 28.87,
			historicalHorizon: 5,
			historicalTimeHorizon: 3,
			model: 'mW-Agg-3Yr-140922',
			swapRate: 2.49,
		},
	},
	'Core A2': {
		label: 'A2 Core Portfolio',
		desc: 'This portfolio is focused on high capital appreciation potential in line with risk levels. Suitable for clients with higher risk appetite and midterm investment horizon of around 5 years.​',
		overview: {
			targetReturns: 8.03,
			targetRisk: 14.91,
			probLoss: 29.50,
			historicalHorizon: 5,
			historicalTimeHorizon: 5,
			model: 'mW-Agg-5Yr-140922',
			swapRate: 2.49,
		},
	},
	'Core A3': {
		label: 'A2 Core Portfolio',
		desc: 'This portfolio is focused on high capital appreciation potential in line with risk levels. Suitable for clients with higher risk appetite and long investment horizon of around 10 years.',
		overview: {
			targetReturns: 9.40,
			targetRisk: 16.26,
			probLoss: 28.15,
			historicalHorizon: 5,
			historicalTimeHorizon: 10,
			model: 'mW-Agg-10Yr-140922',
			swapRate: 2.49,
		},
	},
};

export default data;
