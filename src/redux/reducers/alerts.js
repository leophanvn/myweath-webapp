/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:32:20
*------------------------------------------------------- */

export const initialState = [
	{ 'id': '1667788097515', noti: 2, 'indicator': 'CPI', 'data': [{ 'indicator': 'CPI' }], 'name': 'Alert CPI', desc: 'Warns user if significant deviation of CPI value is detected.', 'alertType': 'simple', 'completed.': false, 'createdAt': '2022-11-07T02:28:17.518Z' },
	{ 'id': '16677880232397515', 'indicator': 'Crude Oil WTI', noti: 2, 'data': [{ 'indicator': 'Crude Oil WTI' }], 'name': 'Alert Crude Oil WTI', desc: 'Warns user if significant deviation of Crude Oil WTI value is detected.', 'alertType': 'simple', 'completed': false, 'createdAt': '2022-11-07T02:28:17.518Z' },
	{ 'id': '1667788021132397515', noti: 0, 'indicator': 'US Auto Sales', 'data': [{ 'indicator': 'US Auto Sales' }], 'name': 'Alert US Auto Sales', desc: 'WWarns user if significant deviation of US Auto Sales value is detected.', 'alertType': 'simple', 'completed': false, 'createdAt': '2022-11-07T02:28:17.518Z' },
	{ 'id': '166778802121132397515', noti: 0, 'indicator': 'US Unemployment Rate', 'data': [{ 'indicator': 'US Unemployment Rate' }], 'name': 'Alert US Unemployment Rate', desc: 'Warns user if significant deviation of US Unemployment Rate value is detected.', 'alertType': 'simple', 'completed': false, 'createdAt': '2022-11-07T02:28:17.518Z' },
	{ 'id': '1667788021211323975215', noti: 0, 'indicator': 'US Intermediate Term Bond Yield (5 Yr)', 'data': [{ 'indicator': 'US Intermediate Term Bond Yield (5 Yr)' }], 'name': 'Alert US Intermediate Term Bond Yield (5 Yr)', desc: 'Warns user if significant deviation of US Intermediate Term Bond Yield (5 Yr) value is detected.', 'alertType': 'simple', 'completed': false, 'createdAt': '2022-11-07T02:28:17.518Z' },
	{ 'id': '1667788021211322223975215', noti: 0, 'indicator': 'PPI', 'data': [{ 'indicator': 'PPI' }], 'name': 'Alert PPI', desc: 'Warns user if significant deviation of PPI value is detected.', 'alertType': 'simple', 'completed': false, 'createdAt': '2022-11-07T02:28:17.518Z' },
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_ALERT_SUCCESS': {
			return [
				{
					id: +new Date() + '',
					...action.payload,
					completed: false,
					createdAt: new Date(),
				},
				...state,
			];
		}
		case 'EDIT_ALERT_SUCCESS': {
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
		case 'DELETE_ALERT_SUCCESS': {
			return state.filter(el => {
				return el.id !== action.payload?.id;
			});
		}
		default:
			return state;
	}
};

export default reducer;
