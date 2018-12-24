import compile from './compile';
import { IOptions, ITransformOptions, TYPES } from './typings';
// import * as debug from 'debug';
import translate from './translate';
import * as assert from 'assert';

// const log = debug('jsx2css');
class JSX2CSS {
  private type: TYPES;
  // new JSX2Class({ type: 'css' / 'less' })
  constructor(options: IOptions = {}) {
    const { type = 'less' } = options;
    this.type = type;
  }
  transform(options: ITransformOptions) {
    const { code, isOrigin = false } = options;
    assert(code, 'code is required');
    const cssATS = compile(code);
    // log('cssATS', translate(cssATS, this.type));
    return isOrigin ? cssATS : translate(cssATS, this.type);
  }
}

export default JSX2CSS;
