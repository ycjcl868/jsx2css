import * as postcss from 'postcss';
import * as t from '@babel/types';

const getRule = (cssAST, className) => {
  const noRepeat = cssAST.nodes.every((node) => node.selector !== className);
  if (noRepeat) {
    const rule = postcss.rule({ selector: className });
    return rule;
  }
};

const getClassName = (node) => {
  // skip <React.xxx> <Form.Item>
  if (t.isJSXIdentifier(node.name)) {
    const { attributes } = node;
    const className: t.JSXAttribute | undefined = attributes.find((attribute: t.JSXAttribute) => {
      if (t.isJSXAttribute(attribute)) {
        return attribute.name.name === 'className' || attribute.name.name === 'class';
      }
      return false;
    });
    if (className) {
      const classValue = className.value;
      if (t.isStringLiteral(classValue)) {
        return `.${classValue.value}`;
      }
      if (t.isJSXExpressionContainer(classValue)) {
        if (t.isMemberExpression(classValue.expression)) {
          if (t.isStringLiteral(classValue.expression.property)) {
            return `.${classValue.expression.property.value}`;
          }
          if (t.isIdentifier(classValue.expression.property)) {
            return `.${classValue.expression.property.name}`;
          }
        }
      }
    }
    const { name: { name: tag } } = node;
    if (/^[a-z]/g.test(tag)) {
      return tag;
    }
  }
};

export {
  getRule,
  getClassName,
};
