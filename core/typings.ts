export enum TYPES {
  LESS = 'less',
  CSS = 'css',
}
export interface IOptions {
  type?: TYPES;
}

export interface ITransformOptions {
  code: string;
  isOrigin?: boolean;
}

export interface IClassList {
  className: string;
  children: IClassList[];
}
