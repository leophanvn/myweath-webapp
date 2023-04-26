/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-09-28 22:42:09
*------------------------------------------------------- */

import AuthStorage from 'src/utils/auth-storage';
// eslint-disable-next-line import/no-cycle

export const actionUpdateProfile = (payload = {}, next = f => f) => async (dispatch, getState) => {
	const userId = await AuthStorage.userId;

	dispatch({
		type: 'EDIT_USER_SUCCESS',
		payload: {
			...payload,
			id: userId,
		},
	});
	dispatch({
		type: 'EDIT_PROFILE_SUCCESS',
		payload: {
			...payload,
			id: userId,
		},
	});

	next();

	return null;
};

export const actionChangePassword = (payload = {}, next = f => f) => async (dispatch, getState) => {
	const userId = await AuthStorage.userId;

	dispatch({
		type: 'EDIT_USER_SUCCESS',
		payload: {
			...payload,
			id: userId,
		},
	});
	dispatch({
		type: 'EDIT_PROFILE_SUCCESS',
		payload: {
			...payload,
			id: userId,
		},
	});

	next();

	return null;
};
export const actionForgotPassword = (payload = {}, next = f => f) => async (dispatch, getState) => {
	next();

	return null;
};

export const actionLogin = (payload = {}, next = f => f) => async (dispatch, getState) => {
	const users = getState()?.users;

	const u = users.find(el => {
		return el.email === payload.email;
	});

	if (!u) {
		throw new Error('User not found');
	}
	if (u.password !== payload.password) {
		throw new Error('Password is not correct');
	}

	AuthStorage.value = {
		accessToken: +new Date(),
		refreshToken: +new Date(),
		userId: u.id,
	};

	dispatch({
		type: 'LOGIN_SUCCESS',
		payload: u,
	});

	next(null, u || {});

	return u;
};

export const actionSignUp = (payload = {}, next = f => f) => async (dispatch, getState) => {
	const users = getState()?.users;

	const u = users.find(el => {
		return el.email === payload.email;
	});

	if (u) {
		throw new Error('User is existed');
	}

	const user = {
		...payload,
		id: payload.email,
		createdAt: new Date(),
	};

	dispatch({
		type: 'CREATE_USER_SUCCESS',
		payload: user,
	});

	AuthStorage.value = {
		accessToken: +new Date(),
		refreshToken: +new Date(),
		userId: payload.email,
	};

	dispatch({
		type: 'LOGIN_SUCCESS',
		payload: user,
	});

	next(null, user || {});

	return user;
};

export const actionLogout = (next = f => f) => async (dispatch, getState) => {
	await AuthStorage.destroy();

	dispatch({
		type: 'LOGOUT_SUCCESS',
	});

	next();

	return null;
};

export const actionGetUserAuth = (next = f => f) => async (dispatch, getState) => {
	const users = getState()?.users;
	const userId = await AuthStorage.userId;

	const u = users.find(el => {
		return el.id === userId;
	});

	dispatch({
		type: 'GET_USER_AUTH_SUCCESS',
		payload: u,
	});

	next(null, u || {});

	return u;
};

export const actionResetPassword = (next = f => f) => async (dispatch, getState) => {
	const userId = await AuthStorage.userId;

	dispatch({
		type: 'EDIT_USER_SUCCESS',
		payload: {
			password: '123123',
			id: userId,
		},
	});
	dispatch({
		type: 'EDIT_PROFILE_SUCCESS',
		payload: {
			password: '123123',
			id: userId,
		},
	});

	next();

	return null;
};
