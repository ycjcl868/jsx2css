/* tslint:disable */

export default {
  code_1: {
    options: {
      type: 'css',
    },
    isOrigin: false,
    code: `
    class Test extends Component {
      render() {
        console.log('333');
        return (
        <div className="person">
            <div className={styles['header-header']}>
              <Wrapper className={styles.headerContent}>
                <div><span>111</span></div>
                <h1>3333</h1>
              </Wrapper>
            </div>
            <Tag className="aa11" />
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
    }`,
    spec: `
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
    `,
  },
  code_2: {
    options: {
      type: 'less',
    },
    isOrigin: false,
    code: `
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
    }`,
    spec: `
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
    `,
  },
  code_3: {
    options: {
      type: 'less',
    },
    isOrigin: false,
    code: `
    const Overview = (props) => {
      const data = props.schemaData || {};
      const { content, backgroundColor } = data;
      const locale = handleLocale();
      // const {
      //   title_zh_Hans_CN: titleCN,
      //   title_en_US: titleEN,
      // } = data;
      const bgColor = backgroundColor === '_F5F5F5' ? '_F7F9FA' : backgroundColor;
      const colNum = content ? getCols(content.length) : 6;
      return (
        <Section className={styles['fd-overview']} style={{ paddingBottom: 0 }}>
          <SectionTitle titleCN="title" titleEN="BENEFITS" anchorId="overview" />
          <Row style={{ marginLeft: 0, marginRight: 0 }} className={styles['overview-row']} gutter={36} type="flex" justify="space-around">
              <Col key={i} className={styles['overview-col']} sm={colNum} xs={12}>
                <img className={styles.img} alt="" />
                <p>21212</p>
                <span>323232</span>
              </Col>
          </Row>
        </Section>
      );
    };`,
    spec: `
    .fd-overview {
      .overview-row {
        .overview-col {
          .img {

          }
          p {

          }
          span {

          }
        }
      }
    }
    `,
  },
  code_4: {
    options: {
      type: 'less',
    },
    isOrigin: false,
    code: `
      class ShoppingList extends React.Component {
        render() {
          return (
            <div className="shopping-list">
              <h1>Shopping List for {this.props.name}</h1>
              <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
              </ul>
            </div>
          );
        }
      }
    `,
    spec: `
      .shopping-list {
        h1 {

        }
        ul {
          li {

          }
        }
      }
    `
  },
  code_5: {
    options: {
      type: 'less',
    },
    isOrigin: false,
    code: `
      class Board extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            squares: Array(9).fill(null),
          };
        }

        handleClick(i) {
          const squares = this.state.squares.slice();
          squares[i] = 'X';
          this.setState({squares: squares});
        }

        renderSquare(i) {
          return (
            <Square
              value={this.state.squares[i]}
              onClick={() => this.handleClick(i)}
            />
          );
        }

        render() {
          const status = 'Next player: X';

          return (
            <div>
              <div className="status">{status}</div>
              <div className="board-row1">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          );
        }
      }
    `,
    spec: `
      div {
        .status {

        }
        .board-row1 {

        }
        .board-row {

        }
      }
    `
  },
  code_6: {
    options: {
      type: 'less',
    },
    isOrigin: false,
    code: `
      import React, { Component } from "react";
      import PropTypes from "prop-types";

      import Thumb from "./../Thumb";
      import util from "../../util";

      class CartProduct extends Component {
        state = {
          isMouseOver: false
        };

        handleMouseOver = () => {
          this.setState({ isMouseOver: true });
        };

        handleMouseOut = () => {
          this.setState({ isMouseOver: false });
        };

        render() {
          const { product, removeProduct } = this.props;

          if (!!this.state.isMouseOver) {
            classes.push("shelf-item--mouseover");
          }

          return (
            <div className={styles.wrapper}>
              <div
                className="shelf-item__del"
                onMouseOver={() => this.handleMouseOver()}
                onMouseOut={() => this.handleMouseOut()}
                onClick={() => removeProduct(product)}
              />
              <Thumb
                classes="shelf-item__thumb"
                alt={product.title}
              />
              <div className="shelf-item__details">
                <p className="title">{product.title}</p>
                <p className="desc">
                  3232
                </p>
              </div>
              <div className="shelf-item__price">
                666
              </div>

              <div className="clearfix" />
            </div>
          );
        }
      }

      CartProduct.propTypes = {
        product: PropTypes.object.isRequired,
        removeProduct: PropTypes.func.isRequired
      };

      export default CartProduct;
    `,
    spec: `
      .wrapper {
        .shelf-item__del {}
        .shelf-item__details {
            .title {}
            .desc {}
        }
        .shelf-item__price {}
        .clearfix {}
      }
    `
  },
  code_7: {
    options: {
      type: 'css',
    },
    isOrigin: false,
    code: `
      import React, { Component } from "react";
      import PropTypes from "prop-types";

      import Thumb from "./../Thumb";
      import util from "../../util";

      class CartProduct extends Component {
        state = {
          isMouseOver: false
        };

        handleMouseOver = () => {
          this.setState({ isMouseOver: true });
        };

        handleMouseOut = () => {
          this.setState({ isMouseOver: false });
        };

        render() {
          const { product, removeProduct } = this.props;

          if (!!this.state.isMouseOver) {
            classes.push("shelf-item--mouseover");
          }

          return (
            <div className={styles.wrapper}>
              <div
                className="shelf-item__del"
                onMouseOver={() => this.handleMouseOver()}
                onMouseOut={() => this.handleMouseOut()}
                onClick={() => removeProduct(product)}
              />
              <Thumb
                classes="shelf-item__thumb"
                alt={product.title}
              />
              <div className="shelf-item__details">
                <p className="title">{product.title}</p>
                <p>
                  3232
                </p>
                <p>3333</p>
              </div>
              <div className="shelf-item__price">
                666
              </div>

              <div className="clearfix" />
            </div>
          );
        }
      }

      CartProduct.propTypes = {
        product: PropTypes.object.isRequired,
        removeProduct: PropTypes.func.isRequired
      };

      export default CartProduct;
    `,
    spec: `
      .wrapper {}
      .shelf-item__del {}
      .shelf-item__details {}
      .title {}
      p {}
      .shelf-item__price {}
      .clearfix {}
    `
  },
  code_8: {
    options: {
      type: 'less',
    },
    isOrigin: false,
    code: `
      const a = (
        <div className="parent1">
          <div
            className="parent1-1"
            onMouseOver={() => this.handleMouseOver()}
            onMouseOut={() => this.handleMouseOut()}
            onClick={() => removeProduct(product)}
          />
          {!this.state.isOpen && current (
            <Transition timeout={transitionTimeout}>
              <span
                onClick={() => this.openFloatCart()}
                className="bag--float-cart-closed"
              >
                <span className="bag__quantity">
                  {cartTotals.productQuantity}
                </span>
              </span>
            </Transition>
          )}
          <div className="parent1-3">
            <p className="parent1-3-1">{product.title}</p>
            <p>
              3232
            </p>
            <p>3333</p>
          </div>
          <div className="parent1-4">
            666
          </div>

          <div className="parent1-5" />
        </div>
      );
    `,
    spec: `
      .parent1 {
        .parent1-1 {}
        .bag--float-cart-closed {
            .bag__quantity {}
        }
        .parent1-3 {
            .parent1-3-1 {}
            p {}
        }
        .parent1-4 {}
        .parent1-5 {}
      }
    `
  },
  code_9: {
    options: {
      type: 'less',
    },
    isOrigin: false,
    code: `
    import React, { Component } from 'react';

    export default class App extends Component {
      render() {
        return (
          <div className="banner">
            <div className="text-wrapper" >
              <h1 className="title">Ant Design</h1>
              <p><span>服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。</span></p>
              <div className="banner-btns">
                <a href="/docs" className="banner-btn"><span>开始使用</span></a>
                <a href="/docs" className="banner-btn"><span>设计语言</span></a>
              </div>
              <svg width="400px" height="576px" viewBox="0 0 400 576" fill="none"><g style="opacity: 1; transform: translate(0px, 1.96096px);"><ellipse cx="100" cy="100" rx="6" ry="6" stroke="#2F54EB" stroke-width="1.6"></ellipse></g><g style="opacity: 1; transform: translate(0px, -1.96096px);"><g transform="translate(200 450)"><g style="transform-origin: 50% 50% 0px; transform: rotate(-340deg);"><rect stroke="#FADB14" stroke-width="1.6" width="9" height="9"></rect></g></g></g></svg>
              <span className="github-btn">
                <a class="gh-btn" href="//github.com/ant-design/ant-design/" target="_blank">
                  <span class="gh-ico" aria-hidden="true"></span>
                  <span class="gh-text">Star</span>
                </a>
                <a class="gh-count" target="_blank" href="//github.com/ant-design/ant-design/stargazers/">39751</a>
              </span>
            </div>
          </div>
        );
      }
    }
    `,
    spec: `
    .banner {
      .text-wrapper {
          .title {}
          p {
              span {}
          }
          .banner-btns {
              .banner-btn {
                  span {}
              }
              span {}
          }
          svg {}
          .github-btn {
              .gh-btn {
                  .gh-ico {}
                  .gh-text {}
              }
              .gh-count {}
          }
      }
  }
    `
  },
};
