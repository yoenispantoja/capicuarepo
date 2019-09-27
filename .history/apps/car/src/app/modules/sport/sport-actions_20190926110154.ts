import { Sport } from './../../models/sport';

//Declaramos las acciones que se pueden ejecutar en el componente Sport
export class AddSport {
  static readonly type = '[SPORT] Add Sport';
  constructor(public payload: Sport) { }
}

export class DeleteSport {
  static readonly type = '[SPORT] Delete Sport';
  constructor(public payload: string) { }
}
