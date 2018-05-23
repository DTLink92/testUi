export interface AssignEquipment {
  id: number;
  idSupervisor: number;
  idEmployee: number;
  dateAssign: Date;
  dateReturn: Date;
  description: string;
  statusEmployee: number;
}
