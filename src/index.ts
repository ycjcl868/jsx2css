import compile from './compile';
import { IOptions, ITransformOptions, TYPES } from '../typings';
// import translate from './translate';
import * as assert from 'assert';

const code = `
class PersonalTicket extends Component {
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
		    <Tag className="111" />
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

class JSX2Class {
  private type: TYPES;

  // new JSX2Class({ type: 'css' / 'less' })
  constructor(options: IOptions = {}) {
    const { type = 'less' } = options;
    this.type = type;
    console.log('--type-', this.type);
  }
  transform(options: ITransformOptions) {
    const { code, isOrigin = false } = options;
    assert(code, 'code is required');
    console.log('--isOrigin-', isOrigin);
    const res = compile(code);
    // return isOrigin ? classNamesAST : translate(classNamesAST, this.type);
    return res;
  }
}

const jsx2class = new JSX2Class({ type: 'css' });

console.log('--string--', JSON.stringify(jsx2class.transform({ code })));
