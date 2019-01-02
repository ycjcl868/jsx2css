import compile from './compile';
import { IOptions, ITransformOptions, TYPES } from './typings';
import translate from './translate';

// const log = debug('jsx2css');
class JSX2CSS {
  private type: TYPES;
  // new JSX2Class({ type: 'css' / 'less' })
  constructor(options: IOptions = {}) {
    const { type = TYPES.LESS } = options;
    this.type = type;
  }
  transform(options: ITransformOptions) {
    const { code, isOrigin = false } = options;
    if (!code) {
      console.error('code is required');
      return '';
    }
    const cssATS = compile(code);
    // log('cssATS', translate(cssATS, this.type));
    return isOrigin ? cssATS.toString() : translate(cssATS, this.type);
  }
}

export default JSX2CSS;
