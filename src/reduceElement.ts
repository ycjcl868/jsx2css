import * as t from '@babel/types';
import getClassName from './getClassName';

const reduceElement = (old, curr) => {
  if (t.isJSXElement(curr)) {
    const className = getClassName(curr.openingElement);
    if (className) {
      const element = {
        className,
        children: [],
      };
      old.push(element);
      if ('children' in curr) {
        curr.children.forEach((node: t.JSXElement | t.JSXText) =>
            old.length > 0
              ? reduceElement(element.children, node)
              : reduceElement(old, node),
        );
      }
      return {
        classList: old,
      };
    }
  }
};

export default reduceElement;
