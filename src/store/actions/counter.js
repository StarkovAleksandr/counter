import { INC, DEC, RESET } from '../actionTypes';

export const inc = () => ({ type: INC });
export const dec = () => ({ type: DEC });
export const reset = () => ({ type: RESET });
