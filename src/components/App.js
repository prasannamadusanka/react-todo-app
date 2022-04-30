import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <provider store={store}>
      <div className='App'>
        <CakeContainer/>
      </div>
      </provider>
    )
  }
}


export default App;
