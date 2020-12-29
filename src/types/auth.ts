export enum UserRoleEnum {
  Librarian = 0,
  Member = 1,
}

export interface UserPayload {
  uid: string;
  email: string;
  rememberMe: boolean;
  role: UserRoleEnum;
  createdAt: string;
}
