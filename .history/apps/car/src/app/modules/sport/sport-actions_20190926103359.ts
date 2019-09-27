//Declaramos las acciones que se pueden ejecutar en el componente Sport
export class AddSport {
  static readonly type = '[Sport] Add Sport';
  constructor(
    public name: string,
    public id: number,
    public nombre: string,
    public modalidad: string,
    public activo: string,
    public created_at: string,
    public updated_at: string
  ) { }
}
