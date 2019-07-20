import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'

class App extends React.Component {
  state = {
    value: '',
    data: [
      {
        name: "Ivel Z3",
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      {
        name: "Bally Astrocade",
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      {
        name: "Sord M200 Smart Home Computer",
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      {
        name: "Commodore 64",
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    ]
  }

  updateSelection = (event) => {
    this.setState({ value: event.target.value });
  }

  submitSelection = (event) => {
    const selectedModel = this.state.data.find(model => model.name === this.state.value)
    const action = {
      type: 'ADD_MODEL',
      payload: selectedModel
    }
    this.props.dispatch(action)
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        {this.props.models.map(model => <ModelDetails
          name={model.name}
          manufacturer={model.manufacturer}
          year={model.year}
          origin={model.origin}
        />)}

        <select value={this.state.value} onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {this.state.data.map(model => <option key={model.name} value={model.name}>{model.name} ({model.year})</option>)}
        </select>

        <button onClick={this.submitSelection}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    models: state
  }
}

export default connect(mapStateToProps)(App);
