/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:32:20
*------------------------------------------------------- */

export const initialState = [
	{
		id: 'demo@mywealth.ai',
		firstName: 'Jerry',
		lastName: 'Yong',
		avatar: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QN3aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA3LjItYzAwMCA3OS4xYjY1YTc5YjQsIDIwMjIvMDYvMTMtMjI6MDE6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NTc4NzAyODQyRDlCMTFFREFBQzFGQTBCMTlDOEFDNzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUFDMDM3RkEyRDlCMTFFREJEMDBBRjE2Rjk3MUZCQ0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUFDMDM3RjkyRDlCMTFFREJEMDBBRjE2Rjk3MUZCQ0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjIgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjAyNjNjMWYtNmQ5My00ZDI0LWJhNmUtNjBmZDg2ZjA1YjIyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU3ODcwMjg0MkQ5QjExRURBQUMxRkEwQjE5QzhBQzcwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpS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',
		email: 'demo@mywealth.ai',
		password: '123123',
		phoneNumber: '987123',
		// NRICno: '456789123',
		citizenship: 'Singapore',
		dateOfBirth: '2022-04-28 22:24:56',
		maritalStatus: 'single',
		gender: 'name',
		numberOfChildren: 0,
		totalMonthlyIncome: 4000,
		totalMonthlyExpenses: 2000,
		assets: 0,
		liabilities: 0,
		// potentialRisk: 'moderate',
		// riskProfile: 'balanced',
		// quizAnswers: {
		// 	'1': 'B',
		// 	'2': 'B',
		// 	'3': 'B',
		// 	'4': 'B',
		// 	'5': 'A',
		// 	'6': 'B',
		// 	'7': 'B',
		// },
		// surveyAnswers: {
		// 	'1': {
		// 		'experience': 'yes',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': '2',
		// 	},
		// 	'10': {
		// 		'experience': 'no',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'11': {
		// 		'experience': 'no',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'12': {
		// 		'experience': 'no',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'13': {
		// 		'experience': 'no',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'14': {
		// 		'experience': 'no',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'15': {
		// 		'experience': 'no',
		// 		'knowledge': 'yes',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'16': {
		// 		'experience': 'no',
		// 		'knowledge': 'yes',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'17': {
		// 		'experience': 'no',
		// 		'knowledge': 'yes',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'18': {
		// 		'experience': 'no',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'19': {
		// 		'experience': 'no',
		// 		'knowledge': 'yes',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'2': {
		// 		'experience': 'no',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'20': {
		// 		'experience': 'no',
		// 		'knowledge': 'yes',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'21': {
		// 		'experience': 'no',
		// 		'knowledge': 'yes',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'22': 'B',
		// 	'23': 'B',
		// 	'24': 'C',
		// 	'25': 'B',
		// 	'3': {
		// 		'experience': 'no',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'4': {
		// 		'experience': undefined,
		// 		'knowledge': 'yes',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'5': {
		// 		'experience': 'yes',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': '3',
		// 	},
		// 	'6': {
		// 		'experience': undefined,
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'7': {
		// 		'experience': undefined,
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'8': {
		// 		'experience': 'no',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// 	'9': {
		// 		'experience': 'no',
		// 		'knowledge': 'no',
		// 		'yearsOfExperience': undefined,
		// 	},
		// },
	},
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_USER_SUCCESS': {
			return [
				{
					...action.payload,
				},
				...state,
			];
		}
		case 'EDIT_USER_SUCCESS': {
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
		case 'DELETE_USER_SUCCESS': {
			return state.filter(el => {
				return el.id !== action.payload?.id;
			});
		}
		default:
			return state;
	}
};

export default reducer;
