export interface EmployeeAssignEquipment {
  id: number;
  idSupervisor: number;
  idEmployee: number;
  idEquipment: number;
  description: string;
  dateAssign: Date;
  dateReturn: Date;
}
