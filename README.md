# jsx2css

[![npm package](https://img.shields.io/npm/v/jsx2css.svg?style=flat-square)](https://www.npmjs.org/package/jsx2css) [![Build Status](https://travis-ci.org/ycjcl868/jsx2css.svg?branch=master)](https://travis-ci.org/ycjcl868/jsx2css) [![dependencies Status](https://david-dm.org/ycjcl868/jsx2css/status.svg)](https://david-dm.org/ycjcl868/jsx2css)

A converter to transform jsx className/class to css/less/sass selector. [online demo](http://ycjcl868.github.io/jsx2css)

## Install

```
$ npm install jsx2css --save
```

## Usage

### less

```js
// ES6
import JSX2CSS from 'jsx2css';
// TypeScript: import * as JSX2CSS from 'jsx2css'
// commonJS const JSX2CSS = require('jsx2css');

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
        .image {
          img {}
          p {}
        }
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
.aa11 {}
.body {}
.price {}
p {}
span {}
.action {}
.image {}
img {}
p {}

```

## SnapShot

![image](https://user-images.githubusercontent.com/13595509/50448648-61448600-095d-11e9-9b27-baab8e5054e5.png)



## TODO
- [x] children JSXExpressionContainer bug
- [x] README zh_CN
- [ ] better TypeScript support
- [ ] Sass support
- [ ] More unit testing for robustness
- [ ] more flexible to support other css-in-js tools
- [ ] VSCode plugin base on the converter

