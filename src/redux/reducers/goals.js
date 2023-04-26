/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:32:20
*------------------------------------------------------- */

export const initialState = [
	{
		'id': '1667465913335081',
		'type': 'house',
		'label': 'Buy a Home',
		'desc': 'Grow a long-term investment to have a better prepare for housing purchases',
		'duration': '20',
		'total': '500000',
		'tracking': true,
		'autoRebalance': true,
		'status': 'pending',
		'fund': 0,
		'createdAt': '2022-11-03T08:58:35.084Z',
		'riskProfile': 'conservative',
		'customizedPortfolio': true,
		'customizedPortfolioData': { 'tenor': '>8Y', 'experience': '>3Y', 'total': '>100k' },
		'recommendedPortfolio': 'Flagship/C3',
		'builtPortfolio': true,
		'init': 0,
		demo: true,
		'initialAccountId': 'account-1',
		'monthlyContributions': 12212,
		'monthlyAccountId': 'account-1',
		'paymentDate': '2022-11-30T16:53:21.848Z',
		'firstPayment': true,
		'isCompleted': true,
	},
	{
		'id': '1667212465915081',
		'type': 'education',
		'label': 'Children’s Education',
		'desc': 'Invest money with a suitable plan for school fees, tuition costs, living expenses…',
		'duration': '20',
		'total': '500000',
		'tracking': true,
		'autoRebalance': true,
		'status': 'pending',
		'fund': 0,
		'createdAt': '2022-11-03T08:58:35.084Z',
		'riskProfile': 'conservative',
		'customizedPortfolio': true,
		'customizedPortfolioData': { 'tenor': '>8Y', 'experience': '>3Y', 'total': '>100k' },
		'recommendedPortfolio': 'Flagship/C3',
		'builtPortfolio': true,
		'init': 0,
		demo: true,
		'initialAccountId': 'account-1',
		'monthlyContributions': 12212,
		'monthlyAccountId': 'account-1',
		'paymentDate': '2022-11-30T16:53:21.848Z',
		'firstPayment': true,
		'isCompleted': true,
	},
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_GOAL_SUCCESS': {
			return [
				{
					id: +new Date() + '',
					...action.payload,
					tracking: true,
					autoRebalance: true,
					status: 'pending',
					fund: 0,
					createdAt: new Date(),
				},
				...state,
			];
		}
		case 'EDIT_GOAL_SUCCESS': {
			if (!action.payload?.id) {
				return state;
			}
			return state.map(el => {
				if (el.id === action.payload?.id) {
					return {
						...el,
						...action.payload,
					};
				}
				return {
					...el,
				};
			});
		}
		case 'DELETE_GOAL_SUCCESS': {
			if (!action.payload?.id) {
				return state;
			}
			return state.filter(el => {
				return el.id !== action.payload?.id;
			});
		}
		default:
			return state;
	}
};

export default reducer;
