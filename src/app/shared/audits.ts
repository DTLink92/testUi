import {Audit} from './audit';

export const AUDIT: Audit[] = [
  {
    auditHistoryId: 1,
    tableName:		 'employee',
    columnName:	 'firstname',
    id:         2,
    date:      '2018-12-24',
    oldvalue:    'maelo',
    newValue:    'marcelo',
    modifiedBy:   1
   },
  {
    auditHistoryId: 2,
    tableName:		 'area',
    columnName:	 'name',
    id:         2,
    date:      '2018-06-24',
    oldvalue:    'Fachao',
    newValue:    'Fachado',
    modifiedBy:   1
  },
  {
    auditHistoryId: 3,
    tableName:		 'project',
    columnName:	 'detail',
    id:         1,
    date:      '2018-1-24',
    oldvalue:    'Av. Juan rosa',
    newValue:    'Av. Juan de la rosa',
    modifiedBy:   1
    },
  {
    auditHistoryId: 4,
    tableName:		 'accident',
    columnName:	 'id_employee',
    id:         2,
    date:      '2018-8-24',
    oldvalue:    '2',
    newValue:    '4',
    modifiedBy:   1
  }
];
