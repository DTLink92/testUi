export interface Contract {
  id: number;
  description: string;
  initDate: Date;
  finishDate: Date;
  employeeId: number;
  positionId: number;
  supervisorId: number;
  employeeFirstName: string;
  employeeLastName: string;
  employeeCi: number;
  positionName: string;
  salary: number;
  projectId: number;
  stringInitDate: string;
  stringFinishDate: string;
}
