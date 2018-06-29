export interface Accident {
  id: number;
  place_accident: string;
  type: {
    id: number;
    name_type_accident: string;
  };
  area: {
    id: number;
    name: string;
  };
}
