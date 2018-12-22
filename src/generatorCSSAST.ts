import * as t from '@babel/types';
import * as postcss from 'postcss';
import getClassName from './getClassName';

const generatorCSSAST = (old, curr) => {
  if (t.isJSXElement(curr)) {
    const className = getClassName(curr.openingElement);
    if (className) {
      const rule = postcss.rule({ selector: className });
      old.append(rule);

      if ('children' in curr) {
        curr.children.forEach((node: t.JSXElement | t.JSXText) =>
            old.nodes.length > 0
              ? generatorCSSAST(rule, node)
              : generatorCSSAST(old, node),
        );
      }
    }
    // TODO bug
    // if (t.isJSXExpressionContainer(curr)) {

    // }
    return old;
  }
};

export default generatorCSSAST;
