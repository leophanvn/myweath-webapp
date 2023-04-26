/* eslint-disable no-param-reassign */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-09-28 22:42:09
*------------------------------------------------------- */

import { combineReducers } from 'redux';

import auth, { initialState as authInitial } from './auth';
import loader, { initialState as initialLoader } from './loader';
import settings, { initialState as initialSettings } from './settings';

import goals, { initialState as initialGoals } from './goals';
import alerts, { initialState as initialAlerts } from './alerts';
import deposits, { initialState as initialDeposits } from './deposits';
import users, { initialState as initialUsers } from './users';
import bankAccount, { initialState as initialBankAccount } from './bank-account';

const extractWhiteList = (initialState, state, wl) => {
	const newData = Object.entries(initialState).reduce((preVal, [key, val]) => {
		if (wl.includes(key)) {
			preVal[key] = state[key];
		} else {
			preVal[key] = val;
		}
		return preVal;
	}, {});

	return newData;
};

export const whitelist = ['settings', 'auth', 'users', 'goals', 'deposits', 'bankAccount', 'alerts']; //  'goals', 'deposits', 'bankAccount'
// export const whitelist = ['settings']; //  'goals', 'deposits', 'bankAccount'

export const initialState = {
	auth: authInitial,
	loader: initialLoader,
	settings: initialSettings,
	goals: initialGoals,
	alerts: initialAlerts,
	deposits: initialDeposits,
	users: initialUsers,
	bankAccount: initialBankAccount,
};

const appReducer = combineReducers({
	auth,
	loader,
	settings,
	goals,
	alerts,
	deposits,
	users,
	bankAccount,
});

const reducers = (state, action) => {
	return appReducer(action.type === 'LOGOUT_SUCCESS' ? extractWhiteList(initialState, state, whitelist) : state, action);
};

export default reducers;
