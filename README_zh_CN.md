# jsx2css

[![npm package](https://img.shields.io/npm/v/jsx2css.svg?style=flat-square)](https://www.npmjs.org/package/jsx2css) [![Build Status](https://travis-ci.org/ycjcl868/jsx2css.svg?branch=master)](https://travis-ci.org/ycjcl868/jsx2css) [![Deps Up to Date](https://david-dm.org/ycjcl868/jsx2css.svg?style=flat)](https://david-dm.org/ycjcl868/jsx2css)

一个将 `jsx` 代码转成 `less/css/sass` 的转换器。

## 安装

```
$ npm install jsx2css --save
```

## 用法

### less

```js
import JSX2CSS from 'jsx2css';

// Instantiate an object, option is { type: 'css' / 'less' } that you want to output style type.
const jsx2css = new JSX2CSS({ type: 'less' });

// your jsx code
const code = `
  // css modules or not
  import styles from './index.less';
  class Test extends Component {
    render() {
      return (
        <div className="person">
          <div className={styles['header-header']}>
            <Wrapper className={styles.headerContent}>
              <div><span>111</span></div>
              <h1>3333</h1>
            </Wrapper>
          </div>
          <Tag className="a11" />
          <div className={styles.body}>
            <div className={styles.price}>
              <p>31332</p>
              <span>321323</span>
            </div>
            <div className={styles.action}>
              <div className={styles.image}>
                (
                <React.Fragment>
                  <img alt="" />
                  <p>price</p>
                  <Button type="primary">323232</Button>
                </React.Fragment>
                )
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
`;

// call transform function, option is { code: string, isOrigin?: boolean; }
// code is your jsx code, it will return css AST if isOrigin set true, default false.
const styles = jsx2css.transform({ code: code });

=>
// styles is

.person {
  .header-header {
      .headerContent {
          div {
              span {}
          }
          h1 {}
      }
  }
  .a11 {}
  .body {
      .price {
          p {}
          span {}
      }
      .action {
          .image {}
      }
  }
}
```

### css

just edit the constructor options to output css class.

```diff
- const jsx2css = new JSX2CSS({ type: 'less' });
+ const jsx2css = new JSX2CSS({ type: 'css' });
const styles = jsx2css.transform({ code: code });

=>
// styles if

.person {}
.header-header {}
.headerContent {}
div {}
span {}
h1 {}
.a11 {}
.body {}
.price {}
p {}
span {}
.action {}
.image {}

```


## TODO
- [-] jsx 表达式内解析 bug
- [-] 中文 README.md
- [ ] 更好的 TypeScript 支持
- [ ] Sass 支持
- [ ] 更多地测试用例来保证健壮性
- [ ] 支持 css-in-js
- [ ] 基于这个转换器的 VSCode 插件

