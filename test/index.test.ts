import * as chai from 'chai';
import * as chaiString from 'chai-string';
import codes from './codes';
import JSX2CSS from '../lib';

chai.use(chaiString);

const { assert } = chai;

describe('index.ts', () => {
  describe('test all codes', () => {
    const keys = Object.keys(codes);
    keys.forEach((key) => {
      it(`${key} code, type: ${codes[key].options.type}, elements should be matched`, () => {
        const { options, isOrigin, code, spec } = codes[key];
        // Instantiate an object, option is { type: 'css' / 'less' } that you want to output style type.
        const jsx2css = new JSX2CSS(options);
        const res = jsx2css.transform({ code, isOrigin });
        assert.containIgnoreSpaces(res, spec);
      });
    });
  });
});
