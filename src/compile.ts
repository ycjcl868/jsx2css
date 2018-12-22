
import { parse } from '@babel/parser';
import { default as traverse } from '@babel/traverse';
// import { IClassList } from '../typings';
import * as postcss from 'postcss';
import generatorCSSAST from './generatorCSSAST';

const root = postcss.root();

export default (code: string) => {
  // parse
  const ast = parse(code, {
    plugins: [ 'jsx' ],
  });
  let cssAST: any = {};
  const visitor = {
    JSXElement(path) {
      cssAST = generatorCSSAST(root, path.node);
      path.stop();
    },
  };
  traverse(ast, visitor);
  return cssAST;
};
