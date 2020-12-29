import { IBook } from "./book";
import { IUser } from "./user";

export interface ILoan {
  _id: string;
  book: IBook;
  user: IUser;
  issueDate: string;
  dueDate: string;
  returnDate: string;
  status: string;
}
