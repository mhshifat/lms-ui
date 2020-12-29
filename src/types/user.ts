import { UserRoleEnum } from "./auth";

export interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  rememberMe: boolean;
  role: UserRoleEnum;
  owner: IUser;
}
