import React from 'react';
import SinglePackage from './SinglePackage';
import PackageView from './PackageView';
import Error from './Error';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: {type: "loading"}, view: "all"};
    this.getData();
  }

  render() {
    let body;
    switch(this.state.data.type) {
      case "package_list":
        body = (<PackageView data={this.state.data} />);
        break;
      case "single_package":
        body = (<SinglePackage data={this.state.data} />);
        break;
      case "error":
        body = (<Error data={this.state.data} />);
        break;
      default:
        body = <p>Loading</p>;
        break;
    }

    return (
      <div id="App">
        {body}
      </div>
    );
  }

  getData() {
    fetch(`http://localhost:9001/api${window.location.pathname}`)
      .then(res => res.json())
      .then(data => {
        this.setState({data: data});
      },
      error => {
        this.setState({data: {type: "error", message: error}})
      });
  }
}

export default App;
