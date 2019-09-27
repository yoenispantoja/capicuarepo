import { Sport } from './../../models/sport';

//Declaramos las acciones que se pueden ejecutar en el componente Sport

export class GetSports {
  static readonly type = '[SPORT] GetSports';
}
export class AddSport {
  static readonly type = '[SPORT] AddSport';
  constructor(public payload: Sport) { }
}

export class DeleteSport {
  static readonly type = '[SPORT] DeleteSport';
  constructor(public payload: string) { }
}
