import * as postcss from 'postcss';
import { TYPES } from './typings';

const translate = (cssAST: postcss.Root, type: TYPES) => {
  switch (type) {
    case TYPES.LESS: {
      return cssAST.toResult().css;
    }
    case TYPES.CSS: {
      const root = postcss.root();
      cssAST.walkRules((rule) => {
        root.append(rule);
      });
      return root.toResult().css;
    }
  }
};

export default translate;
