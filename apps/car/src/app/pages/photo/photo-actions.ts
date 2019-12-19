import { Photo } from './../../models/photo';

//Declaramos las acciones que se pueden ejecutar en el componente Photo

export class GetPhotos {
  static readonly type = '[SPORT] GetPhotos';
}
export class AddPhoto {
  static readonly type = '[SPORT] AddPhoto';
  constructor(public payload: Photo) { }
}

export class UpdatePhoto {
  static readonly type = '[SPORT] UpdatePhoto';
  constructor(public payload: Photo, public id: number) { }
}

export class DeletePhoto {
  static readonly type = '[SPORT] DeletePhoto';
  constructor(public id: number) { }
}
