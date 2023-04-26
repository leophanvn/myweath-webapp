/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 22:52:27
*------------------------------------------------------- */

const locales = 'en-US';
const symbol = 'SGD';

const nf = new Intl.NumberFormat(locales, {
	// maximumFractionDigits: 2,
	// roundingIncrement: 5,
	symbol,
});

const format = (val, showUnit = true, digits = 2) => {
	if (!val && val !== 0) {
		return '--';
	}
	if (!showUnit) {
		return nf.format((val * 1).toFixed(digits));
	}

	return nf.format((val * 1).toFixed(digits)) + ' SGD';
	// return new Intl.NumberFormat(locales, {
	// 	style: 'currency',
	// 	currency: symbol,
	// 	// maximumFractionDigits: 2,
	// 	// roundingIncrement: 5,
	// 	symbol,
	// }).format((val * 1).toFixed(digits));
};

const formatNumber = (val, digits = 2) => {
	if (!val && val !== 0) {
		return '--';
	}
	return nf.format((val * 1).toFixed(digits));
};

const formatShort = (num, digits = 2) => {
	if (!num && num !== 0) {
		return '--';
	}
	const lookup = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'K' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'B' },
		// { value: 1e12, symbol: 'Ngàn tỷ' },
		// { value: 1e15, symbol: 'Triệu tỷ' },
		// { value: 1e18, symbol: 'Tỷ tỷ' },
	];

	const item = lookup.slice().reverse().find((el) => {
		return num >= el.value;
	});

	return item ? nf.format((num / item.value).toFixed(digits)) + item.symbol + ' SGD' : '0 SGD';
};

const formatShortMillion = (num, unit = true, digits = 2) => {
	if (!num && num !== 0) {
		return '--';
	}
	return nf.format((num / 1e6).toFixed(digits)) + (unit ? ' M' : '');
};

const currency = {
	formatShort,
	format,
	formatShortMillion,
	formatNumber,
};

export default currency;
