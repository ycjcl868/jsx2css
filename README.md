# jsxclass

[![Build Status](https://travis-ci.org/ycjcl868/jsx2css.svg?branch=master)](https://travis-ci.org/ycjcl868/jsx2css) [![Deps Up to Date](https://david-dm.org/ycjcl868/jsx2css.svg?style=flat)](https://david-dm.org/ycjcl868/jsx2css)

A converter to transform jsx className/class to css/less/sass selector

## Install

```
$ npm install jsx2class --save
```

## Usage

### less

```js
import JSX2Class from 'jsx2class';

// Instantiate an object, option is { type: 'css' / 'less' } that you want to output style type.
const jsx2class = new JSX2Class({ type: 'less' });

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
const styles = jsx2class.transform({ code: code }));

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
- const jsx2class = new JSX2Class({ type: 'less' });
+ const jsx2class = new JSX2Class({ type: 'css' });
const styles = jsx2class.transform({ code: code }));

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
- [ ] children JSXExpressionContainer bug
- [ ] better TypeScript support
- [ ] Sass support
- [ ] More unit testing for robustness
- [ ] more flexible to support other css-in-js tools
- [ ] VSCode plugin base on the converter

