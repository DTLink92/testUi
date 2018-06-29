import {Comment} from './comment';

export class Audit {
  auditHistoryId: number;
  tableName:		 string;
  columnName:	 string;
  id:         number;
  date:      string;
  oldvalue:    string;
  newValue:    string;
  modifiedBy:   number; //  luego cambiar por tipo ID;
  // id: number;
  // featured: boolean;
  // name: string;
  // image: string;
  // category: string;
  // label: string;
  // price: string;
  // description: string;
}
