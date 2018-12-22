import * as postcss from 'postcss';

const translate = (cssAST, type) => {
  switch (type) {
    case 'less': {
      return cssAST.toResult().css;
    }
    case 'css': {
      const root = postcss.root();
      cssAST.walkRules((rule) => {
        root.append(rule);
      });
      return root.toResult().css;
    }
  }
};

export default translate;
