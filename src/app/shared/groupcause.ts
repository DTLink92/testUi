import {Cause} from './cause';

export interface Groupcause {
  id: number;
  title: string;
  causes: [Cause];
}
