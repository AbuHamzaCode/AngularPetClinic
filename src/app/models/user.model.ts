import { Pet } from "./pet.model";

export class User {
  id?: any;
  username?: string;
  password?: string;
  fullName?: string;
  address?: string;
  phone?: string;
  email?: string;
  petList?: Pet[];
  roles?: any[];
}
