/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-02-26 20:57:07
*------------------------------------------------------- */

import React from 'react';
import dynamic from 'next/dynamic';

// import Loading from 'src/components/Loading';

const FactSet = dynamic(
	() => import('./FactSet'),
	{
		ssr: false,
	},
);

export default FactSet;
