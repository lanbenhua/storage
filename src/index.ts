import { ENV, SUB_ENV } from '_shared/constants';
import Storage from './storage';

const id = 'scheduler' + '__' + ENV + '__' + SUB_ENV;

export default new Storage(id);
