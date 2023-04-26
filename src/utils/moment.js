/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-23 16:47:02
*------------------------------------------------------- */
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import dayjs from 'dayjs';

dayjs.locale('en');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

dayjs.tz.setDefault('Asia/Singapore');

export const FORMAT_DATE = 'YYYY/MM/DD';

export default dayjs;
