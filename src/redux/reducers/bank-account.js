/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:32:20
*------------------------------------------------------- */

export const initialState = {};

const reducer =	 (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_BANK_ACCOUNT_SUCCESS':
			return {
				...action.payload,
				...state,
			};
		case 'EDIT_BANK_ACCOUNT_SUCCESS': {
			return {
				...action.payload,
				...state,
			};
		}
		case 'DELETE_BANK_ACCOUNT_SUCCESS': {
			return initialState;
		}
		default:
			return state;
	}
};

export default reducer;
