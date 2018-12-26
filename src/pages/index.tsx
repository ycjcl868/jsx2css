import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';
import MonacoEditor from 'react-monaco-editor';
import JSX2CSS from '../../core';
import 'antd/dist/antd.less';

const { Option } = Select;

interface IState {
  source?: string;
  target?: string;
  type?: 'less' | 'css';
  // isAST?: boolean;
}

export default class App extends Component<{}, IState> {

  constructor(props) {
    super(props);
    const source = `
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
    try {
      const jsx2css = new JSX2CSS({ type: 'less' });
      const target = jsx2css.transform({ code: source });
      this.state = {
        source,
        target,
        type: 'less',
        // isAST: false,
      };
    } catch (e) {
      console.error('error', e);
    }
  }
  public handleOnChange = (value: string) => {
    if (value) {
      const { type } = this.state;
      const jsx2css = new JSX2CSS({ type });
      const target = jsx2css.transform({ code: value });
      this.setState({
        target,
      });
    }
  }
  public editorDidMount = (editor) => {
    editor.focus();
  }
  // public onSwitchAST = (checked: boolean) => {
  //   this.setState({
  //     isAST: checked,
  //   });
  // }
  public handleType = (type: 'less' | 'css') => {
    this.setState({
      type,
    });
  }
  render() {
    return (
      <>
        <Row style={{ padding: '0 50px'}}>
          <h1>JSX2CSS</h1>
          <Select onChange={this.handleType} defaultValue='less'>
            <Option value='less'>less</Option>
            <Option value='css'>css</Option>
          </Select>
        {/* <span>是否展示 AST: <Switch checkedChildren='开' unCheckedChildren='关' onChange={this.onSwitchAST} /></span> */}
        </Row>
        <Row type='flex' style={{ padding: '0 50px', marginTop: 32 }} gutter={16}>
          <Col span={12}>
            <MonacoEditor
              defaultValue={this.state.source}
              width='800'
              height='600'
              language='javascript'
              options={{
                selectOnLineNumbers: true,
              }}
              onChange={this.handleOnChange}
              editorDidMount={this.editorDidMount}
            />
          </Col>
          <Col span={12}>
            <MonacoEditor
              width='800'
              height='600'
              language='less'
              value={this.state.target}
              options={{
                selectOnLineNumbers: true,
              }}
            />
          </Col>
        </Row>
      </>
    );
  }
}
