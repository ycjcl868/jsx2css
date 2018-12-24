
import { parse } from '@babel/parser';
import { default as traverse } from '@babel/traverse';
import * as debug from 'debug';
// import { IClassList } from '../typings';
// import * as t from '@babel/types';
import * as postcss from 'postcss';
import generatorCSSAST from './generatorCSSAST';

const log = debug('jsx2css:compile.ts');

export default (code: string) => {
  const root = postcss.root();
  // parse
  const ast = parse(code, {
    allowImportExportEverywhere: true,
    plugins: [ 'jsx', 'typescript', 'classProperties' ],
  });
  log('compile time: ');
  const visitor = {
    JSXElement(path) {
      generatorCSSAST(root, path.node);
      path.stop();
    },
  };
  traverse(ast, visitor);
  log('compile time: ');
  return root;
};
