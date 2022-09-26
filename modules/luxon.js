import DateTime from '../node_modules/luxon/src/datetime.js';

import {
  date,
} from './selectors.js';

const dateTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

date.innerHTML = dateTime;