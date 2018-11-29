import React, { Component } from 'react';
import { debounce } from 'lodash';
import uitls from '../util';

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
    const union = uitls.computeUnion(arrayJS, inputJS);
    const intersecion = utils.computeIntersecion(arrayJS, inputJS);
    console.log(union, intersecion);
  }

  render() {
    const  { arrayError, arrayErrorMsg, inputVal, arrayUserInput } = this.state;
    return (
      <div>
        <div>
          <input type="text" onChange={this.onArrayChange} value={arrayUserInput} />
          {
              arrayError ? <div>{arrayErrorMsg}</div> : null
          }
        </div>
        <div>
          <input type="text" onChange={this.onInputChange} value={inputVal} />
        </div>
        <button onClick={this.compute}>compute</button>
      </div>
    );
  }
}


export default App;
