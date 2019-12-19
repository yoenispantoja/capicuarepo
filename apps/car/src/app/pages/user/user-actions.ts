import { User } from './../../models/user';

//Declaramos las acciones que se pueden ejecutar en el componente User

export class GetUsers {
  static readonly type = '[SPORT] GetUsers';
}
export class AddUser {
  static readonly type = '[SPORT] AddUser';
  constructor(public payload: User) { }
}

export class UpdateUser {
  static readonly type = '[SPORT] UpdateUser';
  constructor(public payload: User, public id: number) { }
}

export class DeleteUser {
  static readonly type = '[SPORT] DeleteUser';
  constructor(public id: number) { }
}
