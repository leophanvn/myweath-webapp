const data = {
	'conservative': {
		icon: require('./images/conservative.png'),
		riskLevel: 'Low',
		behavioral: 'Emotional',
		desc: [
			{
				title: 'Attitude towards decision-making',
				content: 'You are what is considered as a conservative investor. This means you are not always confident to make your own investment decisions. ',
			},
			{
				title: 'Attitude towards risk versus gains​',
				content: 'You tend to see challenges ahead of time and try to avoid them if you can help it. ​',
			},
			{
				title: 'Attitude towards risk and advice​',
				content: 'You appreciate guided advice every time, be it through other more experienced investors or a proven investment methodology to help you reduce risk. ​',
			},
			{
				title: 'How myWealth.ai can help​',
				content: 'MyWealth A.I. can help you achieve the growth you desire with our personalized investment approach that curates and organizes a selection of best-in-class portfolio mix that others with your profile typically invest in.',
			},
		],
		content: [
			{
				value: 30,
				label: 'Cash',
				key: 'cash',
			},
			{
				value: 60,
				label: 'Fixed Income',
				key: 'fixedIncome',
			},
			{
				value: 10,
				label: 'Equities',
				key: 'equities',
			},
		],
	},
	'moderate': {
		icon: require('./images/moderate.png'),
		riskLevel: 'Moderate',
		behavioral: 'Cognitive',
		desc: [
			{
				title: 'Attitude towards decision-making',
				content: 'You are what is considered as a moderate investor. This means you are not fully confident to make your own investment decisions every time. ​',
			},
			{
				title: 'Attitude towards risk versus gains​',
				content: 'You tend to evaluate challenges and weigh your options before making a decision​.',
			},
			{
				title: 'Attitude towards risk and advice​',
				content: 'You appreciate guided advice from time to time, be it through other more experienced investors or a proven investment methodology to help you manage risk. ',
			},
			{
				title: 'How myWealth.ai can help​',
				content: 'myWealth.ai can help you achieve the growth you desire with our personalized investment approach that curates and organizes a selection of best-in-class portfolio mix that others with your profile typically invest in.​',
			},
		],
		content: [
			{
				value: 25,
				label: 'Cash',
				key: 'cash',
			},
			{
				value: 45,
				label: 'Fixed Income',
				key: 'fixedIncome',
			},
			{
				value: 30,
				label: 'Equities',
				key: 'equities',
			},
		],
	},
	'growth': {
		icon: require('./images/growth.png'),
		riskLevel: 'Medium to high',
		behavioral: 'Cognitive',
		desc: [
			{
				title: 'Attitude towards decision-making',
				content: 'You are what is considered as growth investor. This means you are mostly confident of your own investment decisions.​',
			},
			{
				title: 'Attitude towards risk versus gains​',
				content: 'You tend to see challenges as potential opportunities.​',
			},
			{
				title: 'Attitude towards risk and advice​',
				content: 'You refer to advice from other more experienced investors or a proven investment methodology as a benefit to help you achieve your goals within a shorter time span.',
			},
			{
				title: 'How myWealth.ai can help​',
				content: 'myWealth.ai can help you achieve the growth you desire with our personalized investment approach that curates and organizes a selection of best-in-class portfolio mix that others with your profile typically invest in.​',
			},
		],
		content: [
			{
				value: 15,
				label: 'Cash',
				key: 'cash',
			},
			{
				value: 40,
				label: 'Fixed Income',
				key: 'fixedIncome',
			},
			{
				value: 40,
				label: 'Equities',
				key: 'equities',
			},
		],
	},
	'aggressive': {
		icon: require('./images/aggressive.png'),
		riskLevel: 'High',
		behavioral: 'Emotional',
		desc: [
			{
				title: 'Attitude towards decision-making',
				content: 'You are what is considered as an aggressive investor. This means you are very confident of your own investment decisions.​',
			},
			{
				title: 'Attitude towards risk versus gains​',
				content: 'You tend to see opportunities where others can only see challenges.',
			},
			{
				title: 'Attitude towards risk and advice​',
				content: 'You refer to advice from other more experienced investors or a proven investment methodology to benchmark against your own thinking and approach to achieve as much as growth as possible within a shorter time span.',
			},
			{
				title: 'How myWealth.ai can help​',
				content: 'myWealth.ai can help you achieve the growth you desire with our personalized investment approach that curates and organizes a selection of best-in-class portfolio mix that others with your profile typically invest in.​',
			},
		],
		content: [
			{
				value: 10,
				label: 'Cash',
				key: 'cash',
			},
			{
				value: 30,
				label: 'Fixed Income',
				key: 'fixedIncome',
			},
			{
				value: 60,
				label: 'Equities',
				key: 'equities',
			},
		],
	},
};

export default data;
