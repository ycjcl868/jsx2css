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
              .image {}
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
};
