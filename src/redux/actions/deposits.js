/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:31:26
*------------------------------------------------------- */

export function create(payload = {}) {
	return {
		type: 'CREATE_DEPOSIT_SUCCESS',
		payload,
	};
}
export function remove(payload = {}) {
	return {
		type: 'DELETE_DEPOSIT_SUCCESS',
		payload,
	};
}
export function update(payload = {}) {
	return {
		type: 'EDIT_DEPOSIT_SUCCESS',
		payload,
	};
}
