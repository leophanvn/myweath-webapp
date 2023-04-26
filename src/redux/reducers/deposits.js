/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:32:20
*------------------------------------------------------- */

export const initialState = [
	{
		id: 'account-1',
		name: 'Current Account',
		balance: 1225000,
		historyTransactions: [
			{
				type: 'top-up',
				amount: 1000,
				status: 'pending',
			},
			{
				type: 'top-up',
				amount: 2000,
				status: 'success',
			},
			{
				type: 'Withdraw',
				amount: 3000,
				status: 'success',
			},
			{
				type: 'top-up',
				amount: 1500,
				status: 'rejected',
			},
			{
				type: 'Withdraw',
				amount: 3000,
				status: 'success',
			},
			{
				type: 'top-up',
				amount: 1500,
				status: 'rejected',
			},
			{
				type: 'Withdraw',
				amount: 3000,
				status: 'success',
			},
			{
				type: 'top-up',
				amount: 1500,
				status: 'rejected',
			},
		],
	},
	{
		id: 'account-2',
		name: 'Savings Account',
		balance: 500000,
		historyTransactions: [
			{
				type: 'top-up',
				amount: 1000,
				status: 'pending',
			},
			{
				type: 'top-up',
				amount: 2000,
				status: 'success',
			},
			{
				type: 'Withdraw',
				amount: 3000,
				status: 'success',
			},
			{
				type: 'top-up',
				amount: 1500,
				status: 'rejected',
			},
		],
	},
];

const reducer =	 (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_DEPOSIT_SUCCESS':
			return [
				action.payload,
				...state,
			];
		case 'EDIT_DEPOSIT_SUCCESS': {
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
		case 'DELETE_DEPOSIT_SUCCESS': {
			return state.filter(el => {
				return el.id !== action.payload?.id;
			});
		}
		default:
			return state;
	}
};

export default reducer;
