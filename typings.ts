export type TYPES = 'css' | 'less';
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
