
import { parse } from '@babel/parser';
import { default as traverse } from '@babel/traverse';
import { IClassList } from '../typings';
import reduceElement from './reduceElement';

export default (code: string) => {
  // parse
  const ast = parse(code, {
    plugins: [ 'jsx' ],
  });
  let classList: IClassList[] = [];
  const visitor = {
    JSXElement(path) {
      classList = reduceElement([], path.node).classList;
      path.stop();
    },
  };
  traverse(ast, visitor);
  return classList;
};
