import {
  Books,
  EditBook,
  EditLoan,
  EditUser,
  Home,
  Loan,
  Loans,
  Login,
  NewBook,
  NewLoan,
  NewUser,
  Register,
  User,
  Users,
} from "../pages";
import Book from "../pages/Book";

export interface IRoute {
  exact: boolean;
  path: string;
  type: "common" | "public" | "private";
  component: React.FC<any>;
}

export const routes: IRoute[] = [
  {
    exact: true,
    path: "/",
    component: Home,
    type: "private",
  },
  {
    exact: true,
    path: "/login",
    component: Login,
    type: "public",
  },
  {
    exact: true,
    path: "/register",
    component: Register,
    type: "public",
  },
  {
    exact: true,
    path: "/users",
    component: Users,
    type: "private",
  },
  {
    exact: true,
    path: "/users/new",
    component: NewUser,
    type: "private",
  },
  {
    exact: true,
    path: "/users/:id",
    component: User,
    type: "private",
  },
  {
    exact: true,
    path: "/users/:id/edit",
    component: EditUser,
    type: "private",
  },
  {
    exact: true,
    path: "/books",
    component: Books,
    type: "private",
  },
  {
    exact: true,
    path: "/books/new",
    component: NewBook,
    type: "private",
  },
  {
    exact: true,
    path: "/books/:id",
    component: Book,
    type: "private",
  },
  {
    exact: true,
    path: "/books/:id/edit",
    component: EditBook,
    type: "private",
  },
  {
    exact: true,
    path: "/loans",
    component: Loans,
    type: "private",
  },
  {
    exact: true,
    path: "/loans/new",
    component: NewLoan,
    type: "private",
  },
  {
    exact: true,
    path: "/loans/:id",
    component: Loan,
    type: "private",
  },
  {
    exact: true,
    path: "/loans/:id/edit",
    component: EditLoan,
    type: "private",
  },
];
