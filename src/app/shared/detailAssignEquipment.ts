export interface DetailAssignEquipment {
  id: number;
  idAssignEquip: number;
  idEquipment: number;
  idSupervisor: number;
  idEmployee: number;
  nameSupervisor: string;
  nameEmployee: string;
  dateAssign: Date;
  dateReturn: Date;
  nameEquip: string;
  nameTypeEquip: string;
}
