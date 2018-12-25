import * as debug from 'debug';
import JSX2CSS from '../lib';
import codes from './codes';

const log = debug('jsx2css: res');

const { options, code } = codes.code_4;

// Instantiate an object, option is { type: 'css' / 'less' } that you want to output style type.
const jsx2css = new JSX2CSS(options as any);

// your jsx code
// call transform function, option is { code: string, isOrigin?: boolean; }
// code is your jsx code, it will return css AST if isOrigin set true, default false.
const styles = jsx2css.transform({ code });
log('styles res: ', styles);
