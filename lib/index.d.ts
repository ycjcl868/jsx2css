import { IOptions, ITransformOptions } from './typings';
export default class JSX2Class {
    private type;
    constructor(options?: IOptions);
    transform(options: ITransformOptions): any;
}
