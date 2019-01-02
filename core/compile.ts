
import { parse } from '@babel/parser';
import { default as traverse, Visitor } from '@babel/traverse';
// import * as debug from 'debug';
import * as t from '@babel/types';
import * as postcss from 'postcss';
import { getClassName, getRule } from './utils';

// const log = debug('jsx2css:compile.ts');

export default (code: string) => {
  const root = postcss.root();
  const filterTags: string[] = [
    'defs',
    'path',
    'g',
    'image',
    'ellipse',
    'circle',
    'rect',
    'path',
    'mask',
    'use',
  ];
  // parse
  const ast = parse(code, {
    allowImportExportEverywhere: true,
    plugins: [ 'jsx', 'typescript', 'classProperties' ],
  });
  // log('compile time: ');
  const childrenVisitor: Visitor = {
    JSXElement: {
      enter(path, state) {
        const { node } = path;
        const { parentRule } = state;
        const className = getClassName(node.openingElement);
        if (filterTags.find((tag: string) => tag === className)) {
          path.skip();
          return;
        }
        const rule = getRule(parentRule, className);
        if (rule && className) {
          // condition className
          parentRule.append(rule);
          state.parentRule = rule;
        }
      },
      exit(path, state) {
        const { node } = path;
        const { parentRule: exitRule } = state;
        const exitClassName = getClassName(node.openingElement);
        // avoid ul > li * 2, duplicate parentRecursive
        const noRepeat = exitRule.nodes.every((node) => node.selector !== exitClassName);
        if (exitRule && exitRule.parent && exitClassName && noRepeat) {
          state.parentRule = exitRule.parent;
        }
      },
    },
  };
  const visitor: Visitor = {
    JSXElement: {
      enter(path) {
        // children skip
        const { node } = path;
        const className = getClassName(node.openingElement);
        if (className) {
          // condition className
          const rule = getRule(root, className);
          root.append(rule);
          if ('children' in node && node.children.length) {
            path.traverse(childrenVisitor, { parentRule: rule });
            // handle by childrenVisitor
            path.skip();
          }
        }
      },
    },
  };
  traverse(ast, visitor);
  // log('compile time: ');
  return root;
};
