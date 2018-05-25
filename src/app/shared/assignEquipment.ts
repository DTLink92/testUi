export interface AssignEquipment {
  id: number;
  idSupervisor: number;
  idEmployee: number;
  nameSupervisor: string;
  nameEmployee: string;
  fullNameSupervisor: string;
  fullNameEmployee: string;
  dateCreatedOn: Date;
  dateAssign: Date;
  dateReturn: Date;
  description: string;
  statusEmployee: number;
}
