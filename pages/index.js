import React, { Component, Fragment } from 'react';
import { debounce } from 'lodash';
import utils from '../util';
import '../styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayUserInput: '',
      inputVal: '',
      inputJS: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onArrayChange = this.onArrayChange.bind(this);
    this.storeArray = debounce(this.storeArray.bind(this), 300);
    this.compute = this.compute.bind(this);
  }

  onArrayChange(e) {
    let arrayUserInput = e.target.value;
    if((/^$|[\d,]$/).test(arrayUserInput)) {
      this.setState({
        arrayUserInput,
      });
      this.storeArray(arrayUserInput);
    }
  }

  storeArray(arrayUserInput) {
    const arrayJS = arrayUserInput.split(',').filter((i) => i !== "").map((i) => parseInt(i));
    this.setState({
      arrayUserInput: arrayJS.join(','),
      arrayJS,
    });
  }

  onInputChange(e) {
    const inputVal = e.target.value;
    if ((/^$|[\d,-]$/).test(inputVal)) {
      const inputJS = inputVal.split(',').reduce((acc, i) => {
        if(i !== '') {
          if(i.indexOf('-') !== -1) {
            acc.range.push(i.split('-').map((i) => parseInt(i)));
          } else {
            acc.eles.push(parseInt(i));
          }
        }
        return acc;
      }, {range: [], eles: [] });
      this.setState({
        inputVal,
        inputJS,
      });
    }
  }

  compute() {
    const { arrayJS, inputJS } = this.state;
    const union = utils.computeUnion(arrayJS, inputJS);
    const intersecion = utils.computeIntersecion(arrayJS, inputJS);
    this.setState({
      union,
      intersecion,
    })
    console.log(union, intersecion);
  }

  render() {
    const { arrayError, arrayErrorMsg, inputVal, arrayUserInput, union, intersecion } = this.state;
    // union = [7000,7001,7002,7003,7004,7005]; intersecion = [7000,7001,7002,7003];
    return (
      <Fragment>
        <div className="container">
          <div className="group">
            <input type="text" onChange={this.onArrayChange} value={arrayUserInput} required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Create an Array</label>
          </div>
          <div className="group">
            <input type="text" onChange={this.onInputChange} value={inputVal} required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Enter input to check against the array</label>
          </div>
          <button onClick={this.compute} disabled={arrayUserInput === '' || inputVal === ''}>
            <span>compute</span>
          </button>
        </div>
        {
          union && intersecion ?
            <div className="output">
              <div className="text-wrap">
                <p>
                  <span className="numbers red ellipses">{`${intersecion.join(',')} `}</span><span>These values are duplicated and skiped.</span>
                </p>
                <p>
                  <span>The final values are</span><span className="numbers green ellipses">{` ${union.join(',')}`}</span>
                </p>
              </div>
            </div>
            :
            null
        }
      </Fragment>
    );
  }
}


export default App;
